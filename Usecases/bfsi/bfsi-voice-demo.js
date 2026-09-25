(function () {
  'use strict';

  const voiceDemos = Array.isArray(window.BFSI_VOICE_DEMOS) ? window.BFSI_VOICE_DEMOS : [];
  const root = document.getElementById('modalRoot');
  const overlay = document.getElementById('modalOverlay');
  const mount = document.getElementById('voiceDemoMount');
  const modalHeader = root?.querySelector('.modal-header') || document.getElementById('modalHeader');
  const restart = document.getElementById('restartBtn');
  const close = document.getElementById('closeModalBtn');
  const voiceTab = document.getElementById('voiceModeBtn');
  if (!voiceDemos.length || !root || !overlay || !mount || !restart || !close || !voiceTab) return;

  const audio = new Audio();
  audio.preload = 'metadata';
  audio.id = 'bfsiVoiceAudio';
  audio.hidden = true;

  const firstScenario = voiceDemos[0];
  const firstVariant = firstScenario.variants?.find(item => item.id === firstScenario.defaultVariant) || firstScenario.variants?.[0] || firstScenario;
  const state = {
    phase: 'idle', channel: 'whatsapp', active: false, generation: 0,
    nextCue: 0, seconds: 0, muted: false, quiet: false, reason: '',
    scenarioId: firstScenario.id, variantId: firstVariant.id || 'default',
    language: firstVariant.defaultLanguage
  };
  const pending = new Set();
  const ringNodes = new Set();
  const customSelects = new Map();
  let audioContext = null;
  let ringtoneInterval = null;
  let ringtoneGeneration = 0;
  let returnFocus = null;
  let internalClose = false;
  let previousMode = 'text';

  function scenario() {
    return voiceDemos.find(item => item.id === state.scenarioId) || voiceDemos[0];
  }

  function variants(selected = scenario()) {
    return Array.isArray(selected.variants) && selected.variants.length ? selected.variants : [selected];
  }

  function variant() {
    const options = variants();
    return options.find(item => (item.id || 'default') === state.variantId) || options[0];
  }

  function recording() {
    const selected = variant();
    return selected.languages[state.language] || selected.languages[selected.defaultLanguage];
  }

  function icon(name) {
    const shapes = {
      phone: '<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z"/>',
      hangup: '<path d="M3 15v-4c5-5 13-5 18 0v4h-5v-3a12 12 0 0 0-8 0v3H3Z"/>',
      microphone: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
      speaker: '<path d="m11 4-6 5H2v6h3l6 5V4ZM15 8a6 6 0 0 1 0 8M18 4a11 11 0 0 1 0 16"/>',
      chat: '<path d="M21 11a9 9 0 0 1-13 8l-5 2 1-5a9 9 0 1 1 17-5Z"/><path d="M8 10h8M8 14h5"/>'
    };
    return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + shapes[name] + '</svg>';
  }

  mount.innerHTML = `
    <div class="vc-pickerbar" id="vcPickerbar" aria-label="Voice demo settings">
      <label class="vc-picker"><span>Scenario</span><select id="vcScenarioSelect" aria-label="Voice scenario"></select></label>
      <label class="vc-picker vc-variant-picker" id="vcVariantPicker"><span>Provider / Demo</span><select id="vcVariantSelect" aria-label="Provider or demo variant"></select></label>
      <label class="vc-picker vc-language-picker"><span>Language</span><select id="vcLanguageSelect" aria-label="Voice language"></select></label>
    </div>
    <div class="vc-channels" role="tablist" aria-label="Voice call channel">
      <button class="vc-channel" id="vcWhatsappTab" type="button" role="tab" aria-selected="true" aria-controls="vcStage" data-call-channel="whatsapp">${icon('chat')} WhatsApp Call</button>
      <button class="vc-channel" id="vcTelephonyTab" type="button" role="tab" aria-selected="false" aria-controls="vcStage" data-call-channel="telephony">${icon('phone')} Telephony</button>
      <span class="vc-meta" id="vcMeta"></span>
    </div>
    <div class="vc-stage" id="vcStage" role="tabpanel" aria-labelledby="vcWhatsappTab">
      <div class="vc-live" id="vcLive">
        <section class="vc-call" aria-label="Call controls">
          <div class="vc-status" id="vcStatus" role="status">Incoming voice call</div>
          <div class="vc-identity">
            <div class="vc-avatar" aria-hidden="true">🛡️</div>
            <h3 id="vcCaller">BFSI Voice Agent</h3>
            <p class="vc-role" id="vcRole">Original recorded call</p>
            <p class="vc-call-caption" id="vcCaption"></p>
            <time class="vc-timer" id="vcTimer" aria-label="Call duration" hidden>00:00</time>
          </div>
          <div class="vc-incoming-actions" id="vcIncomingActions">
            <button class="vc-call-button decline" type="button" data-call-action="decline"><span class="vc-button-icon">${icon('hangup')}</span>Decline</button>
            <button class="vc-call-button answer" id="vcAnswer" type="button" data-call-action="answer"><span class="vc-button-icon">${icon('phone')}</span>Answer</button>
          </div>
          <div class="vc-active-actions" id="vcActiveActions" hidden>
            <button class="vc-call-button" id="vcMute" type="button" data-call-action="mute" aria-pressed="false" aria-label="Mute call audio"><span class="vc-button-icon">${icon('microphone')}</span><span id="vcMuteLabel">Mute</span></button>
            <button class="vc-call-button" id="vcSpeaker" type="button" data-call-action="speaker" aria-pressed="true" aria-label="Speaker volume"><span class="vc-button-icon">${icon('speaker')}</span>Speaker</button>
            <button class="vc-call-button end" id="vcEnd" type="button" data-call-action="end"><span class="vc-button-icon">${icon('hangup')}</span>End call</button>
          </div>
          <p class="vc-audio-hint" id="vcAudioHint" role="status"></p>
        </section>
        <section class="vc-transcript" aria-labelledby="vcTranscriptTitle">
          <div class="vc-transcript-heading"><h4 id="vcTranscriptTitle">Live Transcript</h4><span id="vcTranscriptStatus">Waiting for answer</span></div>
          <div class="vc-turns" id="vcTurns" role="log" aria-live="polite" aria-relevant="additions" aria-label="Call transcript" tabindex="0"></div>
        </section>
      </div>
      <section class="vc-ended" id="vcEnded" aria-live="polite" hidden>
        <div class="vc-avatar">${icon('hangup')}</div>
        <h3 id="vcEndedTitle">Call ended</h3><p id="vcEndedCopy"></p>
      </section>
      <section class="vc-post" id="vcPost" aria-label="After your call" hidden></section>
    </div>
    <div class="vc-footer"><span id="vcFooterStatus">Answer to begin your call</span><button class="vc-replay" type="button" data-call-action="replay">↻ Replay</button></div>`;
  mount.appendChild(audio);

  const el = id => document.getElementById(id);
  const channels = [...mount.querySelectorAll('[data-call-channel]')];
  const scenarioSelect = el('vcScenarioSelect');
  const variantSelect = el('vcVariantSelect');
  const languageSelect = el('vcLanguageSelect');

  voiceDemos.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.title;
    scenarioSelect.appendChild(option);
  });
  scenarioSelect.disabled = voiceDemos.length <= 1;

  function formatTime(seconds) {
    const whole = Math.max(0, Math.floor(seconds || 0));
    return String(Math.floor(whole / 60)).padStart(2, '0') + ':' + String(whole % 60).padStart(2, '0');
  }

  function defer(fn, ms) {
    const generation = state.generation;
    const id = setTimeout(() => {
      pending.delete(id);
      if (state.active && generation === state.generation) fn();
    }, ms);
    pending.add(id);
  }

  function stopRingtone() {
    ringtoneGeneration += 1;
    clearInterval(ringtoneInterval);
    ringtoneInterval = null;
    ringNodes.forEach(node => {
      try { node.stop(); } catch (_) {}
      node.disconnect();
    });
    ringNodes.clear();
  }

  function ring() {
    if (!state.active || state.phase !== 'ringing' || audioContext?.state !== 'running') return;
    [0, .55].forEach(offset => [440, 480].forEach(frequency => {
      const tone = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime + offset;
      tone.type = 'sine';
      tone.frequency.value = frequency;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(.03, start + .025);
      gain.gain.setValueAtTime(.03, start + .24);
      gain.gain.linearRampToValueAtTime(0, start + .3);
      tone.connect(gain);
      gain.connect(audioContext.destination);
      ringNodes.add(tone);
      tone.onended = () => {
        tone.disconnect();
        gain.disconnect();
        ringNodes.delete(tone);
      };
      tone.start(start);
      tone.stop(start + .32);
    }));
  }

  function startRingtone() {
    stopRingtone();
    if (document.hidden) return;
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    try {
      if (!audioContext || audioContext.state === 'closed') audioContext = new Context();
      const generation = state.generation;
      const ringGeneration = ringtoneGeneration;
      audioContext.resume().then(() => {
        if (!state.active || state.phase !== 'ringing' || state.generation !== generation || ringtoneGeneration !== ringGeneration || document.hidden) return;
        ring();
        ringtoneInterval = setInterval(ring, 3000);
      }).catch(() => {});
    } catch (_) {}
  }

  function cleanup(resetAudio = false) {
    state.generation += 1;
    pending.forEach(clearTimeout);
    pending.clear();
    stopRingtone();
    audio.pause();
    if (resetAudio) {
      try { audio.currentTime = 0; } catch (_) {}
    }
  }

  function labelForOption(option) {
    return option ? option.textContent : '';
  }

  function closeCustomSelect(except) {
    customSelects.forEach(control => {
      if (!except || control !== except) {
        control.root.classList.remove('open');
        control.button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function enhanceSelect(select, config = {}) {
    select.classList.add('vc-native-select');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');
    const rootNode = document.createElement('div');
    rootNode.className = 'vc-select-ui';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'vc-select-button';
    button.setAttribute('aria-haspopup', 'listbox');
    button.setAttribute('aria-expanded', 'false');
    const value = document.createElement('span');
    value.className = 'vc-select-value';
    const chevron = document.createElement('span');
    chevron.className = 'vc-select-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    button.append(value, chevron);
    const staticValue = document.createElement('span');
    staticValue.className = 'vc-static-value';
    const list = document.createElement('div');
    list.className = 'vc-select-list';
    list.setAttribute('role', 'listbox');
    list.tabIndex = -1;
    rootNode.append(button, staticValue, list);
    select.insertAdjacentElement('afterend', rootNode);
    const control = { select, root: rootNode, button, value, staticValue, list, config };
    customSelects.set(select, control);

    button.addEventListener('click', event => {
      event.preventDefault();
      if (button.disabled) return;
      const willOpen = !rootNode.classList.contains('open');
      closeCustomSelect(control);
      rootNode.classList.toggle('open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
      if (willOpen) list.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
    });

    button.addEventListener('keydown', event => {
      if (['ArrowDown', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        if (!button.disabled) {
          closeCustomSelect(control);
          rootNode.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
          (list.querySelector('[aria-selected="true"]') || list.querySelector('button'))?.focus({ preventScroll: true });
        }
      }
      if (event.key === 'Escape') {
        rootNode.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    });

    list.addEventListener('keydown', event => {
      const items = [...list.querySelectorAll('button')];
      const index = items.indexOf(document.activeElement);
      if (event.key === 'Escape') {
        rootNode.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.focus({ preventScroll: true });
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const next = event.key === 'ArrowDown' ? index + 1 : index - 1;
        items[(next + items.length) % items.length]?.focus({ preventScroll: true });
      }
    });

    return control;
  }

  function syncCustomSelect(select) {
    const control = customSelects.get(select);
    if (!control) return;
    const options = [...select.options];
    const selectedOption = select.selectedOptions[0] || options[0];
    const optionCount = typeof control.config.getOptionCount === 'function' ? control.config.getOptionCount() : options.length;
    const isStatic = control.config.staticWhenSingle && optionCount <= 1;
    control.root.classList.toggle('is-static', isStatic);
    control.root.classList.remove('open');
    control.button.setAttribute('aria-expanded', 'false');
    control.button.disabled = select.disabled || isStatic;
    control.value.textContent = labelForOption(selectedOption);
    control.staticValue.textContent = labelForOption(selectedOption);
    control.list.replaceChildren();
    options.forEach(option => {
      const item = document.createElement('button');
      item.type = 'button';
      item.setAttribute('role', 'option');
      item.textContent = option.textContent;
      item.dataset.value = option.value;
      item.setAttribute('aria-selected', String(option.value === select.value));
      item.addEventListener('click', () => {
        select.value = option.value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        closeCustomSelect();
        control.button.focus({ preventScroll: true });
      });
      control.list.appendChild(item);
    });
  }

  document.addEventListener('click', event => {
    if (![...customSelects.values()].some(control => control.root.contains(event.target))) closeCustomSelect();
  });

  enhanceSelect(scenarioSelect, { staticWhenSingle: true, getOptionCount: () => voiceDemos.length });
  enhanceSelect(variantSelect, { staticWhenSingle: true, getOptionCount: () => variants().length });
  enhanceSelect(languageSelect, { staticWhenSingle: true, getOptionCount: () => Object.keys(variant().languages || {}).length });

  function populateVariants(selectedVariant) {
    const options = variants();
    variantSelect.replaceChildren();
    options.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id || 'default';
      option.textContent = item.provider || item.brand || item.project || item.label || scenario().title;
      variantSelect.appendChild(option);
    });
    const fallback = scenario().defaultVariant || options[0].id || 'default';
    state.variantId = options.some(item => (item.id || 'default') === selectedVariant) ? selectedVariant : fallback;
    variantSelect.value = state.variantId;
    variantSelect.disabled = options.length <= 1;
    el('vcPickerbar').dataset.hasVariant = 'true';
    syncCustomSelect(variantSelect);
  }

  function populateLanguages(selectedLanguage) {
    const selected = variant();
    languageSelect.replaceChildren();
    Object.entries(selected.languages).forEach(([code, item]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = item.label;
      languageSelect.appendChild(option);
    });
    state.language = selected.languages[selectedLanguage] ? selectedLanguage : selected.defaultLanguage;
    languageSelect.value = state.language;
    languageSelect.disabled = Object.keys(selected.languages).length === 1;
    syncCustomSelect(languageSelect);
  }

  function syncRecording() {
    const selectedRecording = recording();
    const selectedVariant = variant();
    scenarioSelect.value = scenario().id;
    syncCustomSelect(scenarioSelect);
    syncCustomSelect(variantSelect);
    syncCustomSelect(languageSelect);
    audio.src = selectedRecording.audio;
    audio.load();
    const direction = (selectedRecording.direction || selectedVariant.direction || scenario().direction) === 'outbound' ? 'Outbound' : 'Inbound';
    el('vcMeta').textContent = direction + ' · ' + selectedRecording.label + ' · ' + formatTime(selectedRecording.duration);
    el('vcCaller').textContent = 'BFSI Voice Agent';
    el('vcRole').textContent = (selectedVariant.provider || selectedVariant.brand || selectedVariant.project || 'Provider') + ' · Original recording';
  }

  function selectScenario(id, selectedVariant, language) {
    const selected = voiceDemos.find(item => item.id === id) || voiceDemos[0];
    state.scenarioId = selected.id;
    populateVariants(selectedVariant || selected.defaultVariant);
    populateLanguages(language || variant().defaultLanguage);
    syncRecording();
  }

  function phase(next) {
    const selected = scenario();
    const selectedVariant = variant();
    const selectedRecording = recording();
    const direction = selectedRecording.direction || selectedVariant.direction || selected.direction;
    const prospect = selectedRecording.prospect || selected.prospect || 'prospect';
    const purpose = selectedRecording.purpose || selected.purpose || selected.title;
    state.phase = next;
    mount.dataset.callState = next;
    mount.dataset.channel = state.channel;
    const live = ['ringing', 'connecting', 'connected'].includes(next);
    el('vcLive').hidden = !live;
    el('vcEnded').hidden = next !== 'ended';
    el('vcPost').hidden = next !== 'postCall';
    el('vcIncomingActions').hidden = next !== 'ringing';
    el('vcActiveActions').hidden = !['connecting', 'connected'].includes(next);
    el('vcTimer').hidden = next !== 'connected';
    el('vcStatus').textContent = next === 'connected' ? 'Connected' : next === 'connecting' ? 'Connecting…' : state.channel === 'whatsapp' ? 'Incoming voice call' : 'Incoming phone call';
    el('vcTranscriptStatus').textContent = next === 'connected' ? 'Live' : next === 'connecting' ? 'Connecting' : 'Waiting for answer';
    el('vcCaption').textContent = next === 'ringing'
      ? (direction === 'inbound' ? 'Incoming prospect call' : 'Calling ' + prospect)
      : purpose + ' · ' + selectedRecording.label;
    el('vcFooterStatus').textContent = next === 'ringing'
      ? 'Answer to begin your call'
      : next === 'connected' ? purpose
        : next === 'connecting' ? 'Connecting your call…'
          : 'Original recording · ' + (state.channel === 'whatsapp' ? 'WhatsApp Call' : 'Telephony');
    el('vcMute').disabled = next !== 'connected';
    el('vcSpeaker').disabled = next !== 'connected';
  }

  function resetTranscript() {
    state.nextCue = 0;
    el('vcTurns').innerHTML = '<div class="vc-transcript-empty"><span class="vc-empty-icon" aria-hidden="true">≡</span><b>Your conversation, as it happens.</b><p>Answer the call to follow the conversation here.</p></div>';
    el('vcTurns').scrollTop = 0;
  }

  function advanceTranscript() {
    if (state.phase !== 'connected') return;
    const selectedRecording = recording();
    state.seconds = audio.currentTime;
    el('vcTimer').textContent = formatTime(state.seconds);
    el('vcTimer').dateTime = 'PT' + Math.floor(state.seconds) + 'S';
    const turns = el('vcTurns');
    let added = false;
    while (state.nextCue < selectedRecording.transcript.length && selectedRecording.transcript[state.nextCue].start <= state.seconds) {
      const cue = selectedRecording.transcript[state.nextCue++];
      if (state.nextCue === 1) turns.replaceChildren();
      turns.querySelector('.current')?.classList.remove('current');
      const turn = document.createElement('div');
      turn.className = 'vc-turn current' + (cue.speaker === 'Customer' ? ' prospect' : '');
      const head = document.createElement('div');
      head.className = 'vc-turn-head';
      const speaker = document.createElement('span');
      speaker.className = 'vc-speaker';
      speaker.textContent = cue.speaker;
      const time = document.createElement('time');
      time.textContent = formatTime(cue.start);
      const copy = document.createElement('p');
      copy.textContent = cue.text;
      head.append(speaker, time);
      turn.append(head, copy);
      turns.appendChild(turn);
      added = true;
    }
    if (added) turns.scrollTop = turns.scrollHeight;
  }

  function confirmation(fields, outcome) {
    const box = document.createElement('div');
    box.className = 'vc-confirmation';
    const heading = document.createElement('h4');
    heading.textContent = outcome.heading;
    box.appendChild(heading);
    fields.forEach(([label, value]) => {
      const row = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = value;
      row.append(document.createTextNode(label + ': '), strong);
      box.appendChild(row);
    });
    return box;
  }

  function postCall() {
    const selected = scenario();
    const selectedRecording = recording();
    const outcome = selectedRecording.outcome || selected.outcome;
    const postCallConfig = selectedRecording.postCall || selected.postCall || { confirmationFields: [] };
    const post = el('vcPost');
    post.replaceChildren();
    const heading = document.createElement('div');
    heading.className = 'vc-post-heading';
    heading.innerHTML = '<span class="vc-mini-avatar" aria-hidden="true">🛡️</span><div><strong>BFSI Voice Agent</strong><small>' + (state.channel === 'whatsapp' ? selected.title : 'Call completed · ' + formatTime(state.seconds)) + '</small></div>';
    post.appendChild(heading);
    if (state.channel === 'whatsapp') {
      const chat = document.createElement('div');
      chat.className = 'vc-post-chat';
      chat.setAttribute('role', 'log');
      chat.setAttribute('aria-live', 'polite');
      const receipt = document.createElement('div');
      receipt.className = 'vc-call-receipt';
      receipt.textContent = '☎ Voice call ended · ' + formatTime(state.seconds);
      const fields = outcome.fields.filter(([label]) => postCallConfig.confirmationFields.includes(label));
      chat.append(receipt, confirmation(fields.length ? fields : outcome.fields, outcome));
      post.appendChild(chat);
      if (postCallConfig.reply) {
        defer(() => {
          const reply = document.createElement('div');
          reply.className = 'vc-post-reply';
          reply.textContent = postCallConfig.reply;
          chat.appendChild(reply);
        }, postCallConfig.replyDelay || 0);
      }
    } else {
      const kicker = document.createElement('div');
      kicker.className = 'vc-outcome-kicker';
      kicker.textContent = 'CALL OUTCOME';
      post.append(kicker, confirmation(outcome.fields, outcome));
    }
    phase('postCall');
    el('vcStage').scrollTop = 0;
  }

  function resetCall() {
    state.seconds = 0;
    state.reason = '';
    state.muted = false;
    state.quiet = false;
    audio.muted = false;
    audio.volume = 1;
    el('vcMute').setAttribute('aria-pressed', 'false');
    el('vcMuteLabel').textContent = 'Mute';
    el('vcSpeaker').setAttribute('aria-pressed', 'true');
    el('vcAudioHint').textContent = '';
    el('vcTimer').textContent = '00:00';
    el('vcPost').replaceChildren();
    resetTranscript();
    channels.forEach(button => {
      const selected = button.dataset.callChannel === state.channel;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    el('vcStage').setAttribute('aria-labelledby', state.channel === 'whatsapp' ? 'vcWhatsappTab' : 'vcTelephonyTab');
    phase('ringing');
    startRingtone();
    el('vcStage').scrollTop = 0;
  }

  function dispatch(action, value) {
    if (action === 'dispose') {
      cleanup(true);
      state.active = false;
      phase('idle');
      if (audioContext) {
        audioContext.close().catch(() => {});
        audioContext = null;
      }
      return;
    }
    if (!state.active) return;
    if (['replay', 'channel', 'scenario', 'variant', 'language'].includes(action)) {
      cleanup(true);
      if (action === 'channel') state.channel = value;
      if (action === 'scenario') selectScenario(value);
      if (action === 'variant') {
        state.variantId = variants().some(item => (item.id || 'default') === value) ? value : variants()[0].id;
        variantSelect.value = state.variantId;
        populateLanguages(variant().defaultLanguage);
        syncRecording();
      }
      if (action === 'language') {
        state.language = variant().languages[value] ? value : variant().defaultLanguage;
        languageSelect.value = state.language;
        syncCustomSelect(languageSelect);
        syncRecording();
      }
      resetCall();
      return;
    }
    if (action === 'answer' && state.phase === 'ringing') {
      stopRingtone();
      phase('connecting');
      el('vcAudioHint').textContent = '';
      const generation = state.generation;
      audio.play().then(() => {
        if (!state.active || state.generation !== generation || state.phase !== 'connecting') return;
        phase('connected');
        advanceTranscript();
        el('vcEnd').focus({ preventScroll: true });
      }).catch(() => {
        if (state.generation !== generation || !state.active) return;
        cleanup(true);
        phase('ringing');
        el('vcAudioHint').textContent = 'Couldn’t connect the audio. Please try Answer again.';
      });
      return;
    }
    if (action === 'finish' && ['connecting', 'connected', 'ringing'].includes(state.phase)) {
      const selected = scenario();
      const selectedRecording = recording();
      state.seconds = audio.currentTime;
      state.reason = value;
      cleanup();
      phase('ended');
      el('vcEndedTitle').textContent = value === 'declined' ? 'Call declined' : 'Call ended';
      el('vcEndedCopy').textContent = value === 'completed'
        ? (selectedRecording.completionCopy || selected.completionCopy)
        : value === 'declined' ? 'No changes were made. Replay whenever you’re ready.'
          : value === 'error' ? 'The call was interrupted. Replay to try again.'
            : 'The call ended before completion. Replay to continue the conversation.';
      el('vcStage').scrollTop = 0;
      if (value === 'completed') defer(postCall, 700);
      mount.querySelector('[data-call-action="replay"]').focus({ preventScroll: true });
      return;
    }
    if (action === 'mute' && state.phase === 'connected') {
      state.muted = !state.muted;
      audio.muted = state.muted;
      el('vcMute').setAttribute('aria-pressed', String(state.muted));
      el('vcMuteLabel').textContent = state.muted ? 'Unmute' : 'Mute';
      el('vcAudioHint').textContent = state.muted ? 'Call audio muted' : '';
    }
    if (action === 'speaker' && state.phase === 'connected') {
      state.quiet = !state.quiet;
      audio.volume = state.quiet ? .3 : 1;
      el('vcSpeaker').setAttribute('aria-pressed', String(!state.quiet));
      el('vcAudioHint').textContent = state.quiet ? 'Quiet volume' : state.muted ? 'Call audio muted' : '';
    }
  }

  function setModeTabs(mode) {
    root.dataset.mode = mode;
    root.querySelectorAll('.mode-btn').forEach(button => {
      const selected = button.dataset.mode === mode;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-selected', String(selected));
    });
  }

  function enterVoice(opener) {
    const requestedScenario = opener?.dataset.voiceScenario || state.scenarioId;
    if (state.active) {
      if (scenario().id !== requestedScenario) dispatch('scenario', requestedScenario);
      return;
    }
    returnFocus = opener || voiceTab;
    previousMode = root.dataset.mode === 'structured' ? 'structured' : 'text';
    if (opener?.dataset.voiceFlow) {
      const flowOpener = document.querySelector('[data-open-flow="' + opener.dataset.voiceFlow + '"]');
      flowOpener?.click();
    }
    internalClose = true;
    close.click();
    internalClose = false;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    root.classList.remove('web-channel', 'web-widget-open');
    setModeTabs('voice');
    if (modalHeader) modalHeader.style.background = '';
    el('modalTitle').textContent = 'BFSI Voice Agent';
    el('modalSub').textContent = '● Original BFSI recordings · Voice demo';
    el('modalAvatar').textContent = '☎';
    selectScenario(requestedScenario);
    state.active = true;
    state.channel = 'whatsapp';
    dispatch('replay');
    el('vcAnswer').focus({ preventScroll: true });
  }

  function exitVoice() {
    if (!state.active) return;
    dispatch('dispose');
    setModeTabs(previousMode);
    if (modalHeader) modalHeader.style.background = '';
  }

  scenarioSelect.addEventListener('change', event => dispatch('scenario', event.target.value));
  variantSelect.addEventListener('change', event => dispatch('variant', event.target.value));
  languageSelect.addEventListener('change', event => dispatch('language', event.target.value));
  mount.addEventListener('click', event => {
    const channel = event.target.closest('[data-call-channel]');
    if (channel) {
      if (channel.dataset.callChannel !== state.channel) dispatch('channel', channel.dataset.callChannel);
      return;
    }
    const action = event.target.closest('[data-call-action]')?.dataset.callAction;
    if (action === 'decline') dispatch('finish', 'declined');
    else if (action === 'end') dispatch('finish', 'early');
    else if (action) dispatch(action);
  });
  mount.querySelector('.vc-channels').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : state.channel === 'whatsapp' ? 1 : 0;
    dispatch('channel', channels[index].dataset.callChannel);
    channels[index].focus();
  });

  audio.addEventListener('timeupdate', advanceTranscript);
  audio.addEventListener('ended', () => {
    if (state.phase === 'connected') {
      advanceTranscript();
      dispatch('finish', 'completed');
    }
  });
  audio.addEventListener('error', () => {
    if (['connected', 'connecting'].includes(state.phase)) dispatch('finish', 'error');
  });
  audio.addEventListener('waiting', () => {
    if (state.phase === 'connected') el('vcStatus').textContent = 'Reconnecting…';
  });
  audio.addEventListener('playing', () => {
    if (state.phase === 'connected') el('vcStatus').textContent = 'Connected';
  });

  document.addEventListener('click', event => {
    if (internalClose) return;
    const voiceOpener = event.target.closest?.('[data-open-voice]');
    const targetButton = event.target.closest?.('button');
    if (targetButton === voiceTab || voiceOpener) {
      event.preventDefault();
      event.stopImmediatePropagation();
      enterVoice(voiceOpener || targetButton);
      return;
    }
    if (!state.active) return;
    if (targetButton === close) {
      exitVoice();
      returnFocus?.focus({ preventScroll: true });
    } else if (targetButton?.matches('#textModeBtn, #structuredModeBtn')) {
      exitVoice();
      queueMicrotask(() => {
        if (!state.active && overlay.classList.contains('open')) restart.click();
      });
    } else if (targetButton?.hasAttribute('data-open-flow')) {
      exitVoice();
    } else if (targetButton === restart) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }, true);

  overlay.addEventListener('click', event => {
    if (event.target === overlay && state.active) {
      exitVoice();
      returnFocus?.focus({ preventScroll: true });
    }
  }, true);

  document.addEventListener('keydown', event => {
    if (!state.active) return;
    if (event.key === 'Escape') {
      exitVoice();
      returnFocus?.focus({ preventScroll: true });
    } else if (event.key === 'Tab') {
      const focusable = [...root.querySelectorAll('button, select, [tabindex="0"]')].filter(node => !node.disabled && node.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  }, true);

  new MutationObserver(() => {
    if (state.active && !overlay.classList.contains('open')) exitVoice();
  }).observe(overlay, { attributes: true, attributeFilter: ['class'] });

  window.addEventListener('pagehide', exitVoice);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (state.phase === 'ringing') stopRingtone();
    } else if (state.active && state.phase === 'ringing') {
      startRingtone();
    }
  });

  selectScenario(state.scenarioId, state.variantId, state.language);
  resetTranscript();
  phase('idle');
})();
