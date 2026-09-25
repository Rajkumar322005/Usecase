(function () {
  'use strict';

  window.HEALTHCARE_VOICE_DEMOS = [
    {
      id: 'appointment-request',
      title: 'Appointment Booking',
      category: 'book-appointment',
      defaultVariant: 'cfs-request',
      variants: [
        {
          id: 'cfs-request', label: 'Centre For Sight', hospital: 'Centre For Sight',
          direction: 'outbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-request-en.mp3', duration: 81.76,
              patient: 'Sachin', purpose: 'Appointment request',
              transcript: [
                { start: 1.30, end: 10.50, speaker: 'AI Voice Agent', text: 'Hi Sachin, this is Diya from Centre for Sight. I noticed you were trying to book an appointment. Let me quickly help you with the booking. May I know the reason for your appointment?' },
                { start: 11.98, end: 13.78, speaker: 'Patient', text: 'Yeah, I have pain in my right eye.' },
                { start: 16.04, end: 24.12, speaker: 'AI Voice Agent', text: 'I understand. Which state are you located in? We have hospitals in Delhi NCR, Maharashtra, Telangana, Uttar Pradesh.' },
                { start: 24.34, end: 24.78, speaker: 'Patient', text: 'Maharashtra.' },
                { start: 28.40, end: 36.02, speaker: 'AI Voice Agent', text: 'Okay, and which city in Maharashtra would you prefer? We have branches in Mumbai, Badlapur and Nashik.' },
                { start: 37.22, end: 38.46, speaker: 'Patient', text: 'Yeah, Mumbai works.' },
                { start: 40.52, end: 48.26, speaker: 'AI Voice Agent', text: 'I have noted your preferred branch. What is your preferred date for the appointment? We are available Monday to Saturday from 9 AM to 6 PM.' },
                { start: 50.04, end: 52.72, speaker: 'Patient', text: 'Fine, then can you schedule an appointment for tomorrow?' },
                { start: 54.86, end: 62.08, speaker: 'AI Voice Agent', text: 'I have noted your preferred date. And what would be your preferred time for the appointment? Our timings are from 9 AM to 6 PM.' },
                { start: 63.68, end: 64.86, speaker: 'Patient', text: 'Anytime works for me.' },
                { start: 67.06, end: 71.72, speaker: 'AI Voice Agent', text: 'I have noted your preferred time. Our team will contact you shortly. Is there anything else I can help you with?' },
                { start: 73.14, end: 74.38, speaker: 'Patient', text: "No, that's it. Thank you." },
                { start: 76.82, end: 79.04, speaker: 'AI Voice Agent', text: 'Thank you for your time. Have a great day. Goodbye.' },
                { start: 79.46, end: 79.62, speaker: 'Patient', text: 'Goodbye.' }
              ],
              outcome: { heading: 'Appointment Request Submitted', fields: [['Provider', 'Centre For Sight'], ['Patient', 'Sachin'], ['Location', 'Mumbai'], ['Date', 'Tomorrow'], ['Time', 'Anytime'], ['Status', 'Team callback pending']] },
              postCall: { confirmationFields: ['Location', 'Date', 'Time', 'Status'] },
              completionCopy: 'Your appointment preferences were captured for a team callback.'
            },
            hi: {
              label: 'हिंदी', audio: '../../assets/voice-demos/healthcare/appointment-request-hi.mp3', duration: 65.92,
              patient: 'Sachin', purpose: 'Appointment request',
              transcript: [
                { start: 1.68, end: 10.40, speaker: 'AI Voice Agent', text: 'नमस्ते सचिन, मैं सेंटर फॉर साइट से दिया हूँ। मैंने देखा कि आप एक अपॉइंटमेंट बुक करने की कोशिश कर रहे थे। मैं आपको बुकिंग में जल्दी से मदद करती हूँ। आपको अपॉइंटमेंट किसलिए चाहिए?' },
                { start: 11.80, end: 14.82, speaker: 'Patient', text: 'मेरी दाहिनी आँख में थोड़ा दर्द हो रहा है।' },
                { start: 17.48, end: 32.74, speaker: 'AI Voice Agent', text: 'ठीक है, मैं समझ गई। आपको दाहिनी आँख में दर्द के लिए अपॉइंटमेंट चाहिए। आप किस राज्य में अपॉइंटमेंट लेना चाहेंगे? हमारे अस्पताल दिल्ली एनसीआर, महाराष्ट्र, तेलंगाना, उत्तर प्रदेश में हैं।' },
                { start: 32.86, end: 36.24, speaker: 'Patient', text: 'मैं मुंबई में देख रहा हूँ।' },
                { start: 40.00, end: 48.36, speaker: 'AI Voice Agent', text: 'ठीक है, मैंने आपकी पसंदीदा ब्रांच नोट कर ली है। आपको किस तारीख को अपॉइंटमेंट चाहिए? हम सोमवार से शनिवार तक सुबह 9 बजे से शाम 6 बजे तक उपलब्ध हैं।' },
                { start: 49.80, end: 54.36, speaker: 'Patient', text: 'मेरे को सैटरडे को ना 6 बजे के आसपास चाहिए, या 5 बजे के आसपास।' },
                { start: 55.02, end: 62.06, speaker: 'AI Voice Agent', text: 'ठीक है, मैंने आपकी पसंदीदा तारीख और समय नोट कर लिया है। हमारी टीम आपसे जल्दी संपर्क करेगी।' },
                { start: 62.14, end: 65.46, speaker: 'Patient', text: 'जी, शुक्रिया।' }
              ],
              outcome: { heading: 'Appointment Request Submitted', fields: [['Provider', 'Centre For Sight'], ['Patient', 'Sachin'], ['Location', 'Mumbai'], ['Date', 'Saturday'], ['Time', '5–6 PM'], ['Status', 'Team callback pending']] },
              postCall: { confirmationFields: ['Location', 'Date', 'Time', 'Status'] },
              completionCopy: 'Your appointment preferences were captured for a team callback.'
            }
          }
        },
        {
          id: 'nu-urology', label: 'NU Hospitals', hospital: 'NU Hospitals',
          direction: 'inbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-booking-nu-urology-en.mp3', duration: 62.32,
              patient: 'Rajesh', purpose: 'Urology appointment request',
              transcript: [
                { start: 1.20, end: 8.46, speaker: 'AI Voice Agent', text: 'Hello, welcome to NU Hospitals. I am here to assist you with scheduling an appointment. May I please have your name?' },
                { start: 10.71, end: 12.09, speaker: 'Patient', text: 'My name is Rajesh.' },
                { start: 15.23, end: 18.59, speaker: 'AI Voice Agent', text: 'Hello Rajesh, what symptoms are you experiencing today?' },
                { start: 20.37, end: 22.45, speaker: 'Patient', text: 'My urine flow is weak.' },
                { start: 25.64, end: 33.84, speaker: 'AI Voice Agent', text: 'I understand Rajesh, based on your symptom, we are referring you to our urology team. Which city would you prefer for your appointment, Bengaluru or Shivamogga?' },
                { start: 35.32, end: 37.38, speaker: 'Patient', text: 'I would prefer the Shivamogga branch.' },
                { start: 40.06, end: 45.00, speaker: 'AI Voice Agent', text: 'Thank you for selecting NU Hospitals. Your request has been logged. Do you confirm this?' },
                { start: 46.52, end: 48.64, speaker: 'Patient', text: 'Yeah, I confirm that.' },
                { start: 49.18, end: 57.16, speaker: 'AI Voice Agent', text: 'Thank you for choosing NU Hospitals. Our representative will contact you shortly to assist you with booking an appointment.' }
              ],
              outcome: { heading: 'Appointment Request Logged', fields: [['Provider', 'NU Hospitals'], ['Patient', 'Rajesh'], ['Specialty', 'Urology'], ['Branch', 'Shivamogga'], ['Status', 'Representative callback pending']] },
              postCall: { confirmationFields: ['Specialty', 'Branch', 'Status'] },
              completionCopy: 'The urology appointment request was logged for a representative callback.'
            }
          }
        },
        {
          id: 'dr-agarwal-doctor-known', label: 'Dr Agarwal', hospital: 'Dr Agarwal',
          direction: 'inbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-booking-dr-agarwal-doctor-known-en.mp4', duration: 113.39,
              patient: 'Thiruvannamalai Sekar', purpose: 'Doctor-known appointment booking',
              transcript: [
                { start: 5.94, end: 14.16, speaker: 'AI Voice Agent', text: "Hello, I am your virtual assistant from Dr. Agarwal's Eye Hospital. Do you want to book an appointment or know about our services?" },
                { start: 15.02, end: 18.62, speaker: 'Patient', text: 'Yes, I want to book an appointment with Dr. Manoj Khatri.' },
                { start: 23.75, end: 30.83, speaker: 'AI Voice Agent', text: 'Got it. I found Dr. Manoj Khatri at Adyar, Gandhi Nagar branch in Chennai. Is this the doctor you are looking for?' },
                { start: 30.97, end: 31.41, speaker: 'Patient', text: 'Yes.' },
                { start: 35.48, end: 38.04, speaker: 'AI Voice Agent', text: 'Great. May I have your name, please?' },
                { start: 39.02, end: 41.40, speaker: 'Patient', text: 'My name is Thiruvannamalai Sekar.' },
                { start: 44.23, end: 48.07, speaker: 'AI Voice Agent', text: 'Thank you, Thiruvannamalai Sekar. What is your age?' },
                { start: 48.37, end: 50.07, speaker: 'Patient', text: 'I am 45 years old.' },
                { start: 53.14, end: 55.42, speaker: 'AI Voice Agent', text: 'And what is your preferred date for the appointment?' },
                { start: 55.82, end: 57.26, speaker: 'Patient', text: 'Next Monday will be fine.' },
                { start: 63.77, end: 75.01, speaker: 'AI Voice Agent', text: 'On November 10th, slots are available from 9:30 AM to 7:30 PM in 30-minute intervals. Do you have a preferred time, or would you like me to suggest the nearest one?' },
                { start: 76.51, end: 77.79, speaker: 'Patient', text: '10 AM works for me.' },
                { start: 82.11, end: 89.83, speaker: 'AI Voice Agent', text: 'Great. To confirm, booking for Thiruvannamalai Sekar at Adyar, Gandhi Nagar on November 10th at 10 AM. Is that correct?' },
                { start: 90.23, end: 90.63, speaker: 'Patient', text: 'Correct.' },
                { start: 94.46, end: 100.26, speaker: 'AI Voice Agent', text: 'Thank you. Your appointment has been successfully booked. Anything else I can help you with today?' },
                { start: 100.60, end: 102.06, speaker: 'Patient', text: 'No, that will be all. Thank you.' }
              ],
              outcome: { heading: 'Appointment Booked', fields: [['Provider', "Dr. Agarwal's Eye Hospital"], ['Patient', 'Thiruvannamalai Sekar'], ['Doctor', 'Dr. Manoj Khatri'], ['Branch', 'Adyar, Gandhi Nagar'], ['Date', '10 Nov'], ['Time', '10 AM'], ['Status', 'Booked']] },
              postCall: { confirmationFields: ['Doctor', 'Branch', 'Date', 'Time', 'Status'] },
              completionCopy: 'The doctor-known appointment was booked successfully.'
            }
          }
        },
        {
          id: 'hcg-doctor-known', label: 'HCG Hospitals', hospital: 'HCG Hospitals',
          direction: 'inbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-booking-hcg-doctor-known-en.mp4', duration: 89.81,
              patient: 'Patient', purpose: 'Doctor-known appointment booking',
              transcript: [
                { start: 5.77, end: 15.17, speaker: 'AI Voice Agent', text: 'Hi there. I am Kerbadi, your virtual assistant from HCG Hospitals. Are you looking to book an appointment, or would you like some information about our services?' },
                { start: 15.47, end: 17.71, speaker: 'Patient', text: 'I would like to book an appointment with Dr. Kedar.' },
                { start: 24.63, end: 34.51, speaker: 'AI Voice Agent', text: 'Dr. Kedar Ravi Hibare is available at our HCG Cancer Centre, K. R. Road, Bengaluru branch. Would you like to book an appointment with him?' },
                { start: 34.93, end: 35.29, speaker: 'Patient', text: 'Yes.' },
                { start: 38.56, end: 41.84, speaker: 'AI Voice Agent', text: 'Great. What date would be best for your appointment?' },
                { start: 43.08, end: 45.14, speaker: 'Patient', text: 'Next Monday at 3 PM.' },
                { start: 50.00, end: 62.38, speaker: 'AI Voice Agent', text: 'Perfect. Just to confirm, the appointment is with Dr. Kedar Ravi Hibare at HCG Cancer Centre, K. R. Road, Bengaluru on next Monday. Is that correct?' },
                { start: 62.76, end: 63.26, speaker: 'Patient', text: 'Yes.' },
                { start: 68.77, end: 78.31, speaker: 'AI Voice Agent', text: 'Thank you. I am booking your appointment now. You will receive a confirmation shortly. Your appointment is all set. Is there anything else I can help you with today?' },
                { start: 78.57, end: 79.01, speaker: 'Patient', text: 'No, nothing.' },
                { start: 79.01, end: 84.42, speaker: 'AI Voice Agent', text: 'Thank you for choosing HCG Hospitals.' }
              ],
              outcome: { heading: 'Appointment Booked', fields: [['Provider', 'HCG Hospitals'], ['Doctor', 'Dr. Kedar Ravi Hibare'], ['Branch', 'K. R. Road, Bengaluru'], ['Date', 'Next Monday'], ['Time', '3 PM'], ['Status', 'Booked']] },
              postCall: { confirmationFields: ['Doctor', 'Branch', 'Date', 'Time', 'Status'] },
              completionCopy: 'The doctor-known appointment was booked successfully.'
            }
          }
        }
      ]
    },
    {
      id: 'appointment-confirmation', title: 'Appointment Confirmation', category: 'manage-appointments',
      defaultVariant: 'rainbow-confirmation',
      variants: [{
        id: 'rainbow-confirmation', label: 'Rainbow Children Hospital', hospital: 'Rainbow Children Hospital',
        direction: 'outbound', defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-confirmation-rainbow-en.mp3', duration: 56.34,
            patient: 'Chandrima Mandal', purpose: 'Appointment confirmation',
            transcript: [
              { start: 1.62, end: 6.80, speaker: 'AI Voice Agent', text: 'Hello, I am calling from Rainbow Hospitals regarding an upcoming appointment. May I please speak with Chandrima Mandal?' },
              { start: 7.98, end: 9.06, speaker: 'Patient', text: 'Yes, tell me.' },
              { start: 10.10, end: 13.52, speaker: 'AI Voice Agent', text: 'Is this a good time to talk, and would you prefer English, Hindi or Kannada?' },
              { start: 14.60, end: 15.64, speaker: 'Patient', text: 'English is fine.' },
              { start: 16.72, end: 27.12, speaker: 'AI Voice Agent', text: 'This is a reminder that you have an appointment at Rainbow Hospitals, Bannerghatta unit, on the 15th of July 2026 at 8:30 AM with Dr. Shweta R.D. for child care. Will you be able to attend this appointment?' },
              { start: 28.00, end: 29.46, speaker: 'Patient', text: "Yes, yes, we'll come." },
              { start: 30.72, end: 33.18, speaker: 'AI Voice Agent', text: 'Thank you for confirming. We look forward to seeing you.' },
              { start: 35.00, end: 37.56, speaker: 'Patient', text: 'Okay, which specialty was this for again?' },
              { start: 38.48, end: 40.30, speaker: 'AI Voice Agent', text: 'This appointment is for child care.' },
              { start: 41.88, end: 43.68, speaker: 'Patient', text: 'Okay, so this is a physical appointment?' },
              { start: 44.72, end: 47.30, speaker: 'AI Voice Agent', text: 'Yes, that is correct. This is a physical appointment.' },
              { start: 48.34, end: 50.08, speaker: 'Patient', text: "Sure, sure, we'll be coming. Thank you." },
              { start: 50.78, end: 53.38, speaker: 'AI Voice Agent', text: 'Thank you for confirming. We look forward to seeing you.' }
            ],
            outcome: { heading: 'Appointment Confirmed', fields: [['Provider', 'Rainbow Hospitals'], ['Patient', 'Chandrima Mandal'], ['Doctor', 'Dr. Shweta R.D.'], ['Unit', 'Bannerghatta'], ['Date', '15 Jul 2026'], ['Time', '8:30 AM'], ['Visit', 'Physical appointment'], ['Status', 'Attendance confirmed']] },
            postCall: { confirmationFields: ['Doctor', 'Unit', 'Date', 'Time', 'Status'] },
            completionCopy: 'The patient confirmed attendance for the physical appointment.'
          },
          hi: {
            label: 'हिंदी', audio: '../../assets/voice-demos/healthcare/appointment-confirmation-rainbow-hi.mp3', duration: 58.57,
            patient: 'Chandrima Mandal', purpose: 'Appointment confirmation',
            transcript: [
              { start: 0.00, end: 6.74, speaker: 'AI Voice Agent', text: 'Hello, I am calling from Rainbow Hospitals regarding an upcoming appointment. May I please speak with Chandrima Mandal?' },
              { start: 7.96, end: 8.30, speaker: 'Patient', text: 'Yes.' },
              { start: 9.78, end: 14.38, speaker: 'AI Voice Agent', text: 'Is this a good time to talk, and would you prefer English, Hindi or Kannada?' },
              { start: 15.42, end: 16.34, speaker: 'Patient', text: 'Hindi, please.' },
              { start: 17.40, end: 23.88, speaker: 'AI Voice Agent', text: 'This is a reminder about your appointment at Rainbow Hospitals, Bannerghatta unit. Will you come to this appointment?' },
              { start: 25.74, end: 26.84, speaker: 'Patient', text: 'Yes, we will come.' },
              { start: 53.72, end: 56.82, speaker: 'AI Voice Agent', text: 'Thank you.' }
            ],
            outcome: { heading: 'Appointment Confirmed', fields: [['Provider', 'Rainbow Hospitals'], ['Patient', 'Chandrima Mandal'], ['Unit', 'Bannerghatta'], ['Visit', 'Physical appointment'], ['Status', 'Attendance confirmed']] },
            postCall: { confirmationFields: ['Unit', 'Visit', 'Status'] },
            completionCopy: 'The patient confirmed attendance for the physical appointment.'
          },
          kn: {
            label: 'ಕನ್ನಡ', audio: '../../assets/voice-demos/healthcare/appointment-confirmation-rainbow-kn.mp3', duration: 67.18,
            patient: 'Chandrima Mandal', purpose: 'Appointment confirmation',
            transcript: [
              { start: 0.00, end: 5.08, speaker: 'AI Voice Agent', text: 'Hello, I am calling from Rainbow Hospitals regarding an upcoming appointment. May I please speak with Chandrima Mandal?' },
              { start: 5.64, end: 5.98, speaker: 'Patient', text: 'Yes.' },
              { start: 7.78, end: 11.18, speaker: 'AI Voice Agent', text: 'Is this a good time to talk, and would you prefer English, Hindi or Kannada?' },
              { start: 12.04, end: 13.12, speaker: 'Patient', text: 'Kannada.' },
              { start: 14.46, end: 22.06, speaker: 'AI Voice Agent', text: 'Kannada appointment reminder from Rainbow Hospitals.' },
              { start: 23.08, end: 23.72, speaker: 'Patient', text: 'Yes, yes.' },
              { start: 53.74, end: 58.16, speaker: 'AI Voice Agent', text: 'This is a physical appointment.' },
              { start: 58.60, end: 63.82, speaker: 'Patient', text: 'Thank you.' }
            ],
            outcome: { heading: 'Appointment Confirmed', fields: [['Provider', 'Rainbow Hospitals'], ['Patient', 'Chandrima Mandal'], ['Visit', 'Physical appointment'], ['Status', 'Attendance confirmed']] },
            postCall: { confirmationFields: ['Visit', 'Status'] },
            completionCopy: 'The patient confirmed attendance for the physical appointment.'
          }
        }
      }]
    },
    {
      id: 'appointment-reschedule', title: 'Appointment Reschedule', category: 'manage-appointments',
      defaultVariant: 'aster-missed-visit',
      variants: [
        {
          id: 'aster-missed-visit', label: 'Aster Hospitals', hospital: 'Aster Hospitals',
          direction: 'outbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-reschedule-en.mp3', duration: 74.70,
              patient: 'Jasmine', purpose: 'Missed-appointment reschedule',
              transcript: [
                { start: 0.00, end: 6.70, speaker: 'AI Voice Agent', text: 'Hello, Jasmine. I am Asha from Aster Hospitals. Is this a good time to speak for a minute regarding your missed appointment?' },
                { start: 7.64, end: 8.34, speaker: 'Patient', text: 'Yes, I agree.' },
                { start: 10.12, end: 13.34, speaker: 'AI Voice Agent', text: 'Which language are you comfortable with? English or Kannada?' },
                { start: 14.74, end: 16.20, speaker: 'Patient', text: 'We can do it in English.' },
                { start: 18.12, end: 23.08, speaker: 'AI Voice Agent', text: 'Okay. We noticed you missed your visit at Mumbai on May 15th. May I know the reason for this?' },
                { start: 24.16, end: 26.02, speaker: 'Patient', text: 'I was actually very sick that day.' },
                { start: 27.70, end: 36.32, speaker: 'AI Voice Agent', text: 'I see. It would really help us improve our service if you could share the reason for missing the appointment. Would you like me to help you reschedule this appointment for a different date or time?' },
                { start: 37.24, end: 40.98, speaker: 'Patient', text: 'Yeah. Can we do it on 28th of August?' },
                { start: 43.28, end: 45.40, speaker: 'AI Voice Agent', text: "Sure. May I have the patient's name, please?" },
                { start: 46.40, end: 47.22, speaker: 'Patient', text: "It's the same." },
                { start: 50.22, end: 58.82, speaker: 'AI Voice Agent', text: 'Thank you, Jasmine. I have noted your request for Mumbai on August 28th. Our team will contact you shortly to confirm. Is there anything else I can help you with?' },
                { start: 59.58, end: 60.76, speaker: 'Patient', text: 'No, thank you so much.' },
                { start: 68.22, end: 69.44, speaker: 'Patient', text: "No, that's it. Thank you." },
                { start: 72.16, end: 74.48, speaker: 'AI Voice Agent', text: 'Thank you for your feedback. Have a healthy day.' }
              ],
              outcome: { heading: 'Appointment Reschedule Requested', fields: [['Provider', 'Aster Hospitals'], ['Patient', 'Jasmine'], ['Location', 'Mumbai'], ['Requested Date', '28 Aug'], ['Status', 'Team confirmation pending']] },
              postCall: { confirmationFields: ['Location', 'Requested Date', 'Status'] },
              completionCopy: 'Your reschedule request was captured for team confirmation.'
            },
            kn: {
              label: 'ಕನ್ನಡ', audio: '../../assets/voice-demos/healthcare/appointment-reschedule-aster-kn.mp3', duration: 78.52,
              patient: 'Jasmine', purpose: 'Missed-appointment reschedule',
              transcript: [
                { start: 0.00, end: 7.48, speaker: 'AI Voice Agent', text: 'Hello, I am Asha from Aster Hospitals. Is this a good time to speak regarding your missed appointment?' },
                { start: 8.94, end: 9.46, speaker: 'Patient', text: 'Yes.' },
                { start: 11.60, end: 15.32, speaker: 'AI Voice Agent', text: 'Which language are you comfortable with, English or Kannada?' },
                { start: 16.70, end: 17.14, speaker: 'Patient', text: 'Kannada.' },
                { start: 18.86, end: 24.68, speaker: 'AI Voice Agent', text: 'Kannada missed-appointment follow-up from Aster Hospitals.' },
                { start: 26.78, end: 29.50, speaker: 'Patient', text: 'I was busy that day.' },
                { start: 31.00, end: 40.00, speaker: 'AI Voice Agent', text: 'The appointment can be rescheduled for another date and time.' },
                { start: 41.00, end: 46.00, speaker: 'Patient', text: 'Yes, I want to reschedule.' },
                { start: 47.00, end: 56.00, speaker: 'AI Voice Agent', text: 'Thank you. I have noted the request and preferred time.' },
                { start: 62.06, end: 64.46, speaker: 'AI Voice Agent', text: 'Our team will contact you shortly.' },
                { start: 67.96, end: 68.58, speaker: 'Patient', text: 'Okay.' },
                { start: 70.42, end: 73.42, speaker: 'AI Voice Agent', text: 'Thank you for your time. Goodbye.' }
              ],
              outcome: { heading: 'Appointment Reschedule Requested', fields: [['Provider', 'Aster Hospitals'], ['Patient', 'Jasmine'], ['Status', 'Team confirmation pending']] },
              postCall: { confirmationFields: ['Status'] },
              completionCopy: 'Your reschedule request was captured for team confirmation.'
            }
          }
        },
        {
          id: 'rainbow-reminder', label: 'Rainbow Children Hospital', hospital: 'Rainbow Children Hospital',
          direction: 'outbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/appointment-reschedule-rainbow-en.mp3', duration: 79.02,
              patient: 'Chandrima Mandal', purpose: 'Reminder and reschedule request',
              transcript: [
                { start: 0.21, end: 5.93, speaker: 'AI Voice Agent', text: 'Hello, I am calling from Rainbow Hospitals regarding an upcoming appointment. May I please speak with Chandrima Mandal?' },
                { start: 6.49, end: 7.73, speaker: 'Patient', text: "Yes, it's me. Tell me." },
                { start: 8.53, end: 12.33, speaker: 'AI Voice Agent', text: 'Is this a good time to talk, and would you prefer English, Hindi or Kannada?' },
                { start: 13.09, end: 14.09, speaker: 'Patient', text: 'English is fine.' },
                { start: 15.67, end: 24.57, speaker: 'AI Voice Agent', text: 'This is a reminder that you have an appointment at Rainbow Hospitals, Bannerghatta unit, tomorrow at 8:30 AM with Dr. Shweta R.D. Will you be able to attend this appointment?' },
                { start: 25.33, end: 27.31, speaker: 'Patient', text: 'Actually, no. I need to change it.' },
                { start: 28.09, end: 31.55, speaker: 'AI Voice Agent', text: 'I understand. Please let me know your preferred new date for the appointment.' },
                { start: 32.99, end: 35.59, speaker: 'Patient', text: 'Tomorrow. No, not tomorrow. Day after tomorrow.' },
                { start: 37.11, end: 39.21, speaker: 'AI Voice Agent', text: 'And what would be your preferred time for that day?' },
                { start: 39.97, end: 41.71, speaker: 'Patient', text: 'At 11, around 11 AM.' },
                { start: 42.81, end: 51.83, speaker: 'AI Voice Agent', text: 'Thank you. I have noted your request to reschedule for the day after tomorrow at 11 AM. The hospital team will contact you to finalize this. Thank you for calling.' },
                { start: 53.72, end: 57.16, speaker: 'Patient', text: 'Okay. Can you also check whether the same doctor is available at that time?' },
                { start: 58.22, end: 68.74, speaker: 'AI Voice Agent', text: "I'm sorry, I only have the appointment reminder details. For information regarding doctor availability, please contact Rainbow Hospitals directly. The hospital team will be in touch with you regarding your reschedule request." },
                { start: 69.78, end: 71.94, speaker: 'Patient', text: 'Okay, sure. Make sure the team calls me.' },
                { start: 72.94, end: 76.50, speaker: 'AI Voice Agent', text: 'The hospital team will contact you. Thank you for your time. Goodbye.' }
              ],
              outcome: { heading: 'Appointment Reschedule Requested', fields: [['Provider', 'Rainbow Hospitals'], ['Patient', 'Chandrima Mandal'], ['Unit', 'Bannerghatta'], ['Requested Date', 'Day after tomorrow'], ['Requested Time', '11 AM'], ['Status', 'Hospital callback pending']] },
              postCall: { confirmationFields: ['Unit', 'Requested Date', 'Requested Time', 'Status'] },
              completionCopy: 'The reminder call captured a reschedule request for hospital follow-up.'
            }
          }
        }
      ]
    },
    {
      id: 'patient-callback', title: 'Patient Callback', category: 'book-appointment',
      defaultVariant: 'nu-privacy-callback',
      variants: [{
        id: 'nu-privacy-callback', label: 'NU Hospitals', hospital: 'NU Hospitals',
        direction: 'inbound', defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English', audio: '../../assets/voice-demos/healthcare/patient-callback-nu-en.mp3', duration: 36.76,
            patient: 'Patient', purpose: 'Representative callback',
            transcript: [
              { start: 1.46, end: 7.12, speaker: 'AI Voice Agent', text: "Welcome to NU Hospitals. I'm here to assist you with appointment booking. May I have your name, please?" },
              { start: 9.89, end: 11.65, speaker: 'Patient', text: "Sorry, I don't want to say my name." },
              { start: 13.31, end: 17.69, speaker: 'AI Voice Agent', text: "That's perfectly all right. How may I help you today? Please tell me your symptoms." },
              { start: 20.13, end: 23.23, speaker: 'Patient', text: "But I'm not comfortable sharing my symptoms with you." },
              { start: 24.81, end: 29.11, speaker: 'AI Voice Agent', text: 'I understand. A representative will contact you shortly to assist you further.' }
            ],
            outcome: { heading: 'Representative Callback Requested', fields: [['Provider', 'NU Hospitals'], ['Patient Details', 'Not shared'], ['Symptoms', 'Not shared'], ['Status', 'Representative callback pending']] },
            postCall: { confirmationFields: ['Patient Details', 'Symptoms', 'Status'] },
            completionCopy: 'A representative callback was arranged without collecting private details.'
          }
        }
      }]
    },
    {
      id: 'medicine-reorder', title: 'Medicine Reorder', category: 'pharmacy-refills',
      defaultVariant: 'hcg-saved-address',
      variants: [
        {
          id: 'hcg-saved-address', label: 'HCG Hospitals', hospital: 'HCG Hospitals',
          direction: 'outbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/medicine-reorder-hcg-saved-address-en.mp3', duration: 76.25,
              patient: 'Rajesh Gupta', purpose: 'Medicine reorder',
              transcript: [
                { start: 1.36, end: 5.40, speaker: 'AI Voice Agent', text: "Hello, I'm calling from HCG Pharmacy. Is this a good time to talk?" },
                { start: 7.85, end: 8.37, speaker: 'Patient', text: 'Yes.' },
                { start: 10.56, end: 25.82, speaker: 'AI Voice Agent', text: "Great. I'm calling from HCG Hospitals, K. R. Road, Bangalore, regarding a recent order in the name of Rajesh Gupta. We're following up on your refill reminder for your ongoing treatment. Would you like to reorder the same medicines from February 12th, which were cyclophosphamide and anti-nausea meds?" },
                { start: 27.74, end: 29.66, speaker: 'Patient', text: 'What was the cost of those medicines?' },
                { start: 31.76, end: 35.18, speaker: 'AI Voice Agent', text: 'The last order from February 12th was for 6,800 rupees.' },
                { start: 37.94, end: 40.62, speaker: 'Patient', text: 'Okay, then yes. Please proceed with reordering the medicines.' },
                { start: 43.14, end: 49.76, speaker: 'AI Voice Agent', text: 'Sure, we can proceed with reordering the same medicines. Should we use your saved address at 24th Main Road, Bangalore for the delivery?' },
                { start: 51.18, end: 52.22, speaker: 'Patient', text: 'Yes, same address.' },
                { start: 54.41, end: 64.17, speaker: 'AI Voice Agent', text: "Great. I've noted that you'd like to reorder the same medicines and have them delivered to 24th Main Road, Bangalore. Our pharmacy team will process this shortly. Is there anything else I can help you with today?" },
                { start: 66.89, end: 68.09, speaker: 'Patient', text: "No, that's it. Thank you." },
                { start: 70.67, end: 72.77, speaker: 'AI Voice Agent', text: 'Thank you for your time. Have a great day. Goodbye.' }
              ],
              outcome: { heading: 'Medicine Reorder Submitted', fields: [['Provider', 'HCG Pharmacy'], ['Patient', 'Rajesh Gupta'], ['Medicines', 'Cyclophosphamide and anti-nausea meds'], ['Amount', '₹6,800'], ['Delivery', 'Saved address'], ['Status', 'Pharmacy processing pending']] },
              postCall: { confirmationFields: ['Medicines', 'Amount', 'Delivery', 'Status'] },
              completionCopy: 'The medicine reorder was submitted for pharmacy processing.'
            }
          }
        },
        {
          id: 'hcg-different-address', label: 'HCG Hospitals', hospital: 'HCG Hospitals',
          direction: 'outbound', defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English', audio: '../../assets/voice-demos/healthcare/medicine-reorder-hcg-different-address-en.mp3', duration: 78.26,
              patient: 'Rajesh Gupta', purpose: 'Medicine reorder address change',
              transcript: [
                { start: 0.78, end: 4.94, speaker: 'AI Voice Agent', text: "Hello, I'm calling from HCG Pharmacy. Is this a good time to talk?" },
                { start: 6.28, end: 6.80, speaker: 'Patient', text: 'Yes.' },
                { start: 8.68, end: 24.86, speaker: 'AI Voice Agent', text: "Great. I'm calling regarding a last order in the name of Rajesh Gupta from HCG Hospitals, K. R. Road, Bangalore. We're following up on the refill reminder for your ongoing treatment. We wanted to confirm if you'd like to reorder the same medicines from the 12th of February, which were cyclophosphamide and anti-nausea meds." },
                { start: 27.09, end: 28.91, speaker: 'Patient', text: "Yes, I'd like to reorder the same." },
                { start: 30.79, end: 37.97, speaker: 'AI Voice Agent', text: "Okay. You'd like to reorder the same medicines. Should we use your saved address at 24th Main Road, HSR Layout, Bangalore for the delivery?" },
                { start: 39.15, end: 41.87, speaker: 'Patient', text: 'No, I want delivery to a different address.' },
                { start: 44.22, end: 54.34, speaker: 'AI Voice Agent', text: 'No worries, we can arrange that. Our pharmacy team will need to assist with a new delivery address. What is a convenient date and time for our pharmacist to call you back to confirm the new address and finalize your order?' },
                { start: 55.74, end: 57.16, speaker: 'Patient', text: 'Yeah, anytime tomorrow works.' },
                { start: 59.49, end: 65.93, speaker: 'AI Voice Agent', text: "Okay, so anytime tomorrow works for a callback from our pharmacy team. I've noted that down for you. Is there anything else I can help you with today?" },
                { start: 67.29, end: 68.45, speaker: 'Patient', text: "No, that's it. Thank you." },
                { start: 71.83, end: 73.69, speaker: 'AI Voice Agent', text: 'Thank you for your time. Have a great day. Goodbye.' }
              ],
              outcome: { heading: 'Pharmacy Callback Requested', fields: [['Provider', 'HCG Pharmacy'], ['Patient', 'Rajesh Gupta'], ['Medicines', 'Same medicines'], ['Delivery', 'Different address'], ['Callback', 'Anytime tomorrow'], ['Status', 'Pharmacist callback pending']] },
              postCall: { confirmationFields: ['Medicines', 'Delivery', 'Callback', 'Status'] },
              completionCopy: 'A pharmacist callback was requested to confirm the new delivery address.'
            }
          }
        }
      ]
    }
  ];
})();
