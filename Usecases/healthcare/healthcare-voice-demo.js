(function () {
  'use strict';

  // Replace this placeholder with the final team recording at the same local path.
  const healthcareVoiceRecording = '../../assets/voice-demos/healthcare/healthcare-appointment-booking.mp3';
  const voiceDemos = {
    appointmentBooking: {
      organisation: 'CarePlus Hospitals',
      agent: 'Healthcare Voice Agent',
      patient: 'Rahul Mehta',
      language: 'English',
      duration: 76.14,
      audio: healthcareVoiceRecording,
      // Approximate sample cues for the placeholder; replace alongside the final call.
      transcript: [
        { time: 0, speaker: 'AI Voice Agent', text: 'Hello Rahul, I’m calling from CarePlus Hospitals. Am I speaking with Rahul Mehta?' },
        { time: 6, speaker: 'Patient', text: 'Yes, speaking.' },
        { time: 9, speaker: 'AI Voice Agent', text: 'I’m calling regarding your appointment with Dr. Ananya Menon at CarePlus Whitefield Hospital.' },
        { time: 18, speaker: 'Patient', text: 'I would like to reschedule my appointment, please.' },
        { time: 24, speaker: 'AI Voice Agent', text: 'Certainly, I can help you with that. Which date would work best for you?' },
        { time: 32, speaker: 'Patient', text: 'Would 18 August be available?' },
        { time: 38, speaker: 'AI Voice Agent', text: 'Dr. Ananya Menon has an available slot on 18 August at 4:30 PM. Shall I confirm that for you?' },
        { time: 49, speaker: 'Patient', text: 'Yes, that works for me.' },
        { time: 54, speaker: 'AI Voice Agent', text: 'Your appointment is rescheduled for 18 August 2026 at 4:30 PM, at CarePlus Whitefield Hospital. Your status is confirmed.' },
        { time: 67, speaker: 'Patient', text: 'Thank you for your help.' },
        { time: 71, speaker: 'AI Voice Agent', text: 'You’re welcome, Rahul. We look forward to seeing you. Have a good day.' }
      ],
      outcome: {
        heading: '✅ Appointment Rescheduled',
        fields: [
          ['Patient', 'Rahul Mehta'], ['Doctor', 'Dr. Ananya Menon'],
          ['Hospital', 'CarePlus Whitefield Hospital'], ['Date', '18 Aug 2026'],
          ['Time', '4:30 PM'], ['Status', 'Confirmed']
        ]
      },
      postCall: { confirmationFields: ['Doctor', 'Hospital', 'Date', 'Time', 'Status'], reply: 'Thank you.', replyDelay: 1100 }
    }
  };

  const demo = voiceDemos.appointmentBooking;
  const root = document.getElementById('modalRoot');
  const overlay = document.getElementById('modalOverlay');
  const mount = document.getElementById('voiceDemoMount');
  const restart = document.getElementById('restartBtn');
  const close = document.getElementById('closeModalBtn');
  const voiceTab = document.getElementById('voiceModeBtn');
  const audio = new Audio(demo.audio);
  audio.preload = 'metadata';
  audio.id = 'healthcareVoiceAudio';
  audio.hidden = true;

  const state = { phase: 'idle', channel: 'whatsapp', active: false, generation: 0, nextCue: 0, seconds: 0, muted: false, quiet: false, reason: '' };
  const pending = new Set();
  let audioContext = null;
  let ringtoneInterval = null;
  let ringtoneGeneration = 0;
  const ringNodes = new Set();
  let returnFocus = null;
  let internalClose = false;
  let previousMode = 'text';

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
    <div class="vc-channels" role="tablist" aria-label="Voice call channel">
      <button class="vc-channel" id="vcWhatsappTab" type="button" role="tab" aria-selected="true" aria-controls="vcStage" data-call-channel="whatsapp">${icon('chat')} WhatsApp Call</button>
      <button class="vc-channel" id="vcTelephonyTab" type="button" role="tab" aria-selected="false" aria-controls="vcStage" data-call-channel="telephony">${icon('phone')} Telephony</button>
      <span class="vc-meta">English · 01:16</span>
    </div>
    <div class="vc-stage" id="vcStage" role="tabpanel" aria-labelledby="vcWhatsappTab">
      <div class="vc-live" id="vcLive">
        <section class="vc-call" aria-label="Call controls">
          <div class="vc-status" id="vcStatus" role="status">Incoming voice call</div>
          <div class="vc-identity">
            <div class="vc-avatar" aria-hidden="true">✚</div>
            <h3 id="vcCaller"></h3>
            <p class="vc-role" id="vcRole"></p>
            <p class="vc-call-caption" id="vcCaption">Calling Rahul Mehta</p>
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
  el('vcCaller').textContent = demo.organisation;
  el('vcRole').textContent = demo.agent;
  const channels = [...mount.querySelectorAll('[data-call-channel]')];

  function formatTime(seconds) {
    const whole = Math.max(0, Math.floor(seconds || 0));
    return String(Math.floor(whole / 60)).padStart(2, '0') + ':' + String(whole % 60).padStart(2, '0');
  }
  function defer(fn, ms) {
    const generation = state.generation;
    const id = setTimeout(() => { pending.delete(id); if (state.active && generation === state.generation) fn(); }, ms);
    pending.add(id);
  }
  function stopRingtone() {
    ringtoneGeneration += 1;
    clearInterval(ringtoneInterval);
    ringtoneInterval = null;
    ringNodes.forEach(node => { try { node.stop(); } catch (_) {} node.disconnect(); });
    ringNodes.clear();
  }
  function ring() {
    if (!state.active || state.phase !== 'ringing' || audioContext?.state !== 'running') return;
    // Two quiet chimes, generated locally; no ringtone download or microphone access.
    [0, .55].forEach(offset => [440, 480].forEach(frequency => {
      const tone = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime + offset;
      tone.type = 'sine'; tone.frequency.value = frequency;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(.035, start + .025);
      gain.gain.setValueAtTime(.035, start + .24);
      gain.gain.linearRampToValueAtTime(0, start + .3);
      tone.connect(gain); gain.connect(audioContext.destination);
      ringNodes.add(tone);
      tone.onended = () => { tone.disconnect(); gain.disconnect(); ringNodes.delete(tone); };
      tone.start(start); tone.stop(start + .32);
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
        ring(); ringtoneInterval = setInterval(ring, 3000);
      }).catch(() => {}); // Visual incoming state remains usable if sound is blocked.
    } catch (_) { /* Browsers without Web Audio still support Answer and the call. */ }
  }
  function cleanup(resetAudio = false) {
    state.generation += 1;
    pending.forEach(clearTimeout); pending.clear();
    stopRingtone();
    audio.pause();
    if (resetAudio) audio.currentTime = 0;
  }
  function phase(next) {
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
    el('vcCaption').textContent = next === 'ringing' ? 'Calling ' + demo.patient : 'Appointment follow-up · ' + demo.language;
    el('vcFooterStatus').textContent = next === 'ringing' ? 'Answer to begin your call' : next === 'connected' ? 'Appointment follow-up' : next === 'connecting' ? 'Connecting your call…' : 'CarePlus Hospitals · ' + (state.channel === 'whatsapp' ? 'WhatsApp Call' : 'Telephony');
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
    state.seconds = audio.currentTime;
    el('vcTimer').textContent = formatTime(state.seconds);
    el('vcTimer').dateTime = 'PT' + Math.floor(state.seconds) + 'S';
    const turns = el('vcTurns');
    let added = false;
    while (state.nextCue < demo.transcript.length && demo.transcript[state.nextCue].time <= state.seconds) {
      const cue = demo.transcript[state.nextCue++];
      if (state.nextCue === 1) turns.replaceChildren();
      turns.querySelector('.current')?.classList.remove('current');
      const turn = document.createElement('div');
      turn.className = 'vc-turn current' + (cue.speaker === 'Patient' ? ' patient' : '');
      const head = document.createElement('div'); head.className = 'vc-turn-head';
      const speaker = document.createElement('span'); speaker.className = 'vc-speaker'; speaker.textContent = cue.speaker;
      const time = document.createElement('time'); time.textContent = formatTime(cue.time);
      const copy = document.createElement('p'); copy.textContent = cue.text;
      head.append(speaker, time); turn.append(head, copy); turns.appendChild(turn); added = true;
    }
    if (added) turns.scrollTop = turns.scrollHeight;
  }
  function confirmation(fields) {
    const box = document.createElement('div'); box.className = 'vc-confirmation';
    const heading = document.createElement('h4'); heading.textContent = demo.outcome.heading; box.appendChild(heading);
    fields.forEach(([label, value]) => {
      const row = document.createElement('p');
      const strong = document.createElement('strong'); strong.textContent = value;
      row.append(document.createTextNode(label + ': '), strong); box.appendChild(row);
    });
    return box;
  }
  function postCall() {
    const post = el('vcPost'); post.replaceChildren();
    const heading = document.createElement('div'); heading.className = 'vc-post-heading';
    heading.innerHTML = '<span class="vc-mini-avatar" aria-hidden="true">✚</span><div><strong>CarePlus Hospitals</strong><small>' + (state.channel === 'whatsapp' ? 'Appointment updates' : 'Call completed · ' + formatTime(state.seconds)) + '</small></div>';
    post.appendChild(heading);
    if (state.channel === 'whatsapp') {
      const chat = document.createElement('div'); chat.className = 'vc-post-chat'; chat.setAttribute('role', 'log'); chat.setAttribute('aria-live', 'polite');
      const receipt = document.createElement('div'); receipt.className = 'vc-call-receipt'; receipt.textContent = '☎ Voice call ended · ' + formatTime(state.seconds);
      chat.append(receipt, confirmation(demo.outcome.fields.filter(([label]) => demo.postCall.confirmationFields.includes(label))));
      post.appendChild(chat);
      defer(() => { const reply = document.createElement('div'); reply.className = 'vc-post-reply'; reply.textContent = demo.postCall.reply; chat.appendChild(reply); }, demo.postCall.replyDelay);
    } else {
      const kicker = document.createElement('div'); kicker.className = 'vc-outcome-kicker'; kicker.textContent = 'CALL OUTCOME';
      post.append(kicker, confirmation(demo.outcome.fields));
    }
    phase('postCall');
    el('vcStage').scrollTop = 0;
  }

  // All call actions enter here; timers and audio events never form a separate sequence.
  function dispatch(action, value) {
    if (action === 'dispose') {
      cleanup(true); state.active = false; phase('idle');
      if (audioContext) { audioContext.close().catch(() => {}); audioContext = null; }
      return;
    }
    if (!state.active) return;
    if (action === 'replay' || action === 'channel') {
      cleanup(true);
      if (action === 'channel') state.channel = value;
      state.seconds = 0; state.reason = ''; state.muted = false; state.quiet = false;
      audio.muted = false; audio.volume = 1;
      el('vcMute').setAttribute('aria-pressed', 'false'); el('vcMuteLabel').textContent = 'Mute';
      el('vcSpeaker').setAttribute('aria-pressed', 'true'); el('vcAudioHint').textContent = '';
      el('vcTimer').textContent = '00:00'; el('vcPost').replaceChildren();
      resetTranscript();
      channels.forEach(button => { const selected = button.dataset.callChannel === state.channel; button.setAttribute('aria-selected', String(selected)); button.tabIndex = selected ? 0 : -1; });
      el('vcStage').setAttribute('aria-labelledby', state.channel === 'whatsapp' ? 'vcWhatsappTab' : 'vcTelephonyTab');
      phase('ringing'); startRingtone(); el('vcStage').scrollTop = 0;
      return;
    }
    if (action === 'answer' && state.phase === 'ringing') {
      stopRingtone(); phase('connecting'); el('vcAudioHint').textContent = '';
      const generation = state.generation;
      // play() is invoked in the Answer click, preserving browser user activation.
      audio.play().then(() => {
        if (!state.active || state.generation !== generation || state.phase !== 'connecting') return;
        phase('connected'); advanceTranscript(); el('vcEnd').focus({ preventScroll: true });
      }).catch(() => {
        if (state.generation !== generation || !state.active) return;
        cleanup(true); phase('ringing');
        el('vcAudioHint').textContent = 'Couldn’t connect the audio. Please try Answer again.';
      });
      return;
    }
    if (action === 'finish' && ['connecting', 'connected', 'ringing'].includes(state.phase)) {
      state.seconds = audio.currentTime; state.reason = value;
      cleanup(); phase('ended');
      el('vcEndedTitle').textContent = value === 'declined' ? 'Call declined' : 'Call ended';
      el('vcEndedCopy').textContent = value === 'completed' ? 'Your appointment update is ready.' : value === 'declined' ? 'No appointment changes were made. Replay whenever you’re ready.' : value === 'error' ? 'The call was interrupted. Replay to try again.' : 'The call ended before confirmation. Replay to complete the conversation.';
      el('vcStage').scrollTop = 0;
      if (value === 'completed') defer(postCall, 850);
      mount.querySelector('[data-call-action="replay"]').focus({ preventScroll: true });
      return;
    }
    if (action === 'mute' && state.phase === 'connected') {
      state.muted = !state.muted; audio.muted = state.muted;
      el('vcMute').setAttribute('aria-pressed', String(state.muted)); el('vcMuteLabel').textContent = state.muted ? 'Unmute' : 'Mute';
      el('vcAudioHint').textContent = state.muted ? 'Call audio muted' : '';
    }
    if (action === 'speaker' && state.phase === 'connected') {
      state.quiet = !state.quiet; audio.volume = state.quiet ? .3 : 1;
      el('vcSpeaker').setAttribute('aria-pressed', String(!state.quiet));
      el('vcAudioHint').textContent = state.quiet ? 'Quiet volume' : state.muted ? 'Call audio muted' : '';
    }
  }

  function setModeTabs(mode) {
    root.dataset.mode = mode;
    root.querySelectorAll('.mode-btn').forEach(button => {
      const selected = button.dataset.mode === mode;
      button.classList.toggle('active', selected); button.setAttribute('aria-selected', String(selected));
    });
  }
  function enterVoice(opener) {
    if (state.active) return;
    returnFocus = opener;
    if (opener.hasAttribute('data-open-voice')) document.querySelector('.featured-banner[data-open-flow="0"]').click();
    previousMode = root.dataset.mode === 'structured' ? 'structured' : 'text';
    // Use the approved close lifecycle to cancel its autoplay and channel timers.
    // No edits or private-state access are needed in either existing demo script.
    internalClose = true; close.click(); internalClose = false;
    overlay.classList.add('open'); overlay.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    root.classList.remove('web-channel', 'web-widget-open');
    setModeTabs('voice');
    el('modalHeader').style.background = '';
    el('modalTitle').textContent = demo.agent;
    el('modalSub').textContent = demo.organisation;
    el('modalAvatar').textContent = '☎';
    state.active = true; state.channel = 'whatsapp';
    dispatch('replay');
    el('vcAnswer').focus({ preventScroll: true });
  }
  function exitVoice() {
    if (!state.active) return;
    dispatch('dispose'); setModeTabs(previousMode); el('modalHeader').style.background = '';
  }

  mount.addEventListener('click', event => {
    const channel = event.target.closest('[data-call-channel]');
    if (channel) { if (channel.dataset.callChannel !== state.channel) dispatch('channel', channel.dataset.callChannel); return; }
    const action = event.target.closest('[data-call-action]')?.dataset.callAction;
    if (action === 'decline') dispatch('finish', 'declined');
    else if (action === 'end') dispatch('finish', 'early');
    else if (action) dispatch(action);
  });
  mount.querySelector('.vc-channels').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : state.channel === 'whatsapp' ? 1 : 0;
    dispatch('channel', channels[index].dataset.callChannel); channels[index].focus();
  });
  audio.addEventListener('timeupdate', advanceTranscript);
  audio.addEventListener('ended', () => { if (state.phase === 'connected') dispatch('finish', 'completed'); });
  audio.addEventListener('error', () => { if (['connected', 'connecting'].includes(state.phase)) dispatch('finish', 'error'); });
  audio.addEventListener('waiting', () => { if (state.phase === 'connected') el('vcStatus').textContent = 'Reconnecting…'; });
  audio.addEventListener('playing', () => { if (state.phase === 'connected') el('vcStatus').textContent = 'Connected'; });

  // Capture only prototype navigation. Normal Text/Guided events retain their existing handlers.
  document.addEventListener('click', event => {
    if (internalClose) return;
    const target = event.target.closest('button');
    if (!target) return;
    if (target === voiceTab || target.hasAttribute('data-open-voice')) {
      event.preventDefault(); event.stopImmediatePropagation(); enterVoice(target); return;
    }
    if (!state.active) return;
    if (target === close) { exitVoice(); returnFocus?.focus({ preventScroll: true }); }
    else if (target.matches('#textModeBtn, #structuredModeBtn')) {
      exitVoice();
      // The selected existing mode may already be active in its own state.
      // Restart after its handler so its normal header and content are restored either way.
      queueMicrotask(() => { if (!state.active && overlay.classList.contains('open')) restart.click(); });
    } else if (target.hasAttribute('data-open-flow')) exitVoice();
    else if (target === restart) { event.stopImmediatePropagation(); event.preventDefault(); }
  }, true);
  overlay.addEventListener('click', event => { if (event.target === overlay && state.active) { exitVoice(); returnFocus?.focus({ preventScroll: true }); } }, true);
  document.addEventListener('keydown', event => {
    if (!state.active) return;
    if (event.key === 'Escape') { exitVoice(); returnFocus?.focus({ preventScroll: true }); }
    else if (event.key === 'Tab') {
      const focusable = [...root.querySelectorAll('button, [tabindex="0"]')].filter(node => !node.disabled && node.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  }, true);
  new MutationObserver(() => { if (state.active && !overlay.classList.contains('open')) exitVoice(); }).observe(overlay, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('pagehide', exitVoice);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (state.phase === 'ringing') stopRingtone(); }
    else if (state.active && state.phase === 'ringing') startRingtone();
  });
  phase('idle');
})();
