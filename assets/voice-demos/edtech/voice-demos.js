(function () {
  'use strict';

  const base = '../../assets/voice-demos/edtech/';

  window.EDTECH_VOICE_DEMOS = [
    {
      id: 'course-discovery',
      title: 'Course Discovery & Enquiry',
      category: 'course-discovery',
      defaultVariant: 'pillai',
      direction: 'inbound',
      variants: [
        {
          id: 'pillai',
          institute: 'Pillai University',
          defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English',
              audio: base + 'pillai-course-enquiry-english.mp3',
              duration: 161.60,
              direction: 'inbound',
              learner: 'Prospective student',
              purpose: 'UG course enquiry',
              transcript: [
                { start: 1.39, speaker: 'AI Voice Agent', text: "Hello. I'm your virtual assistant from Pillai University. How may I help you today? Would you like to converse in English or Hindi?" },
                { start: 10.39, speaker: 'Student', text: 'I prefer English.' },
                { start: 18.86, speaker: 'AI Voice Agent', text: 'Alright. Which program level are you interested in? Undergraduate or postgraduate?' },
                { start: 24.86, speaker: 'Student', text: "I'm interested in undergraduate, please." },
                { start: 30.42, speaker: 'AI Voice Agent', text: 'We have a variety of undergraduate programs. What category are you interested in? We have engineering, design, pharmacy, commerce and management, science and humanities.' },
                { start: 45.83, speaker: 'Student', text: 'Anything related to artificial intelligence?' },
                { start: 48.83, speaker: 'AI Voice Agent', text: 'In the engineering category, we have B.Tech Computer Science and Engineering AI and ML. Would you like to know more about this course?' },
                { start: 63.82, speaker: 'Student', text: 'That sounds exactly along the lines of what I want. Can you tell me a bit more about it?' },
                { start: 70.61, speaker: 'AI Voice Agent', text: 'B.Tech Computer Science and Engineering AI and ML is a four-year program with 120 seats. The course fee is 12 lakh rupees.' },
                { start: 87.08, speaker: 'AI Voice Agent', text: 'To be eligible, you need 45% in physics, chemistry and mathematics and an aggregate of 45% in 12th grade.' },
                { start: 94.73, speaker: 'Student', text: "Okay. It sounds like I'm eligible. Can you help me sign up for this course?" },
                { start: 98.73, speaker: 'AI Voice Agent', text: "To apply, you'll need to register on our portal, pay a 1000 rupees application fee, fill out the form and upload your documents." },
                { start: 108.84, speaker: 'AI Voice Agent', text: "After that, you'll appear for our entrance test, check the merit list and finally pay the admission fee to confirm your seat. Would you like to proceed with the registration?" },
                { start: 118.84, speaker: 'Student', text: "I want to be a part of this university, so let's go for it." },
                { start: 123.84, speaker: 'AI Voice Agent', text: 'To summarize, you are interested in the undergraduate B.Tech Computer Science and Engineering AI and ML program. Is that correct?' },
                { start: 136.89, speaker: 'Student', text: 'That is indeed correct.' },
                { start: 140.90, speaker: 'AI Voice Agent', text: 'Is there anything else I can help you with today?' },
                { start: 143.90, speaker: 'Student', text: "No, let's first proceed with this one. Thank you so much." },
                { start: 150.60, speaker: 'AI Voice Agent', text: 'Thank you for contacting Pillai University. We look forward to receiving your application. Have a great day. Goodbye.' }
              ],
              outcome: {
                heading: 'Course Enquiry Completed',
                fields: [['Institute', 'Pillai University'], ['Program', 'B.Tech CSE AI & ML'], ['Level', 'Undergraduate'], ['Eligibility', '45% PCM and 45% aggregate'], ['Application Fee', '₹1,000'], ['Status', 'Registration interest captured']]
              },
              postCall: { confirmationFields: ['Program', 'Level', 'Application Fee', 'Status'], reply: 'We’ll share the registration steps on WhatsApp shortly.', replyDelay: 800 },
              completionCopy: 'The course enquiry was completed and registration interest was captured.'
            },
            hi: {
              label: 'हिंदी',
              audio: base + 'pillai-course-enquiry-hindi.mp3',
              duration: 230.15,
              direction: 'inbound',
              learner: 'Prospective student',
              purpose: 'PG course enquiry',
              transcript: [
                { start: 1.42, speaker: 'AI Voice Agent', text: 'Hello, I am your virtual assistant from Pillai University. How may I help you today? Would you like to converse in English or Hindi?' },
                { start: 13.35, speaker: 'Student', text: 'I would like to talk in Hindi.' },
                { start: 20.61, speaker: 'AI Voice Agent', text: 'How can I help you today?' },
                { start: 25.96, speaker: 'Student', text: 'I wanted to check the course.' },
                { start: 29.14, speaker: 'AI Voice Agent', text: 'What program level are you interested in? Undergraduate or postgraduate?' },
                { start: 36.24, speaker: 'Student', text: 'I am interested in postgraduate course.' },
                { start: 41.82, speaker: 'AI Voice Agent', text: 'We have courses in engineering, commerce and management and science.' },
                { start: 53.02, speaker: 'Student', text: 'I wanted to do a course in management.' },
                { start: 59.40, speaker: 'AI Voice Agent', text: 'In commerce and management, MBA is available. MBA course duration is two years and the course fee is 6 lakhs.' },
                { start: 79.25, speaker: 'AI Voice Agent', text: 'Finance, marketing, HR, operations and systems specializations are applied. Do you want eligibility criteria or placement details?' },
                { start: 88.25, speaker: 'Student', text: 'Yes, both of you.' },
                { start: 96.06, speaker: 'AI Voice Agent', text: 'MBA basic eligibility is graduation with minimum 50 marks. Placements highest package is 9 lakhs per annum and median package is 4 lakhs per annum.' },
                { start: 144.44, speaker: 'Student', text: 'Yes, how can I sign up for this?' },
                { start: 151.91, speaker: 'AI Voice Agent', text: 'For MBA admission, first you will have to register online, then fill the application form, entrance test results and merit list.' },
                { start: 184.57, speaker: 'AI Voice Agent', text: 'You asked about postgraduate commerce and management MBA with HR specialization, eligibility, fees, duration, placement details and admission process.' },
                { start: 207.52, speaker: 'Student', text: "No, it's enough. Thank you so much." }
              ],
              outcome: {
                heading: 'Course Enquiry Completed',
                fields: [['Institute', 'Pillai University'], ['Program', 'MBA'], ['Specialisation', 'HR'], ['Level', 'Postgraduate'], ['Fee', '₹6,00,000'], ['Status', 'Admission process explained']]
              },
              postCall: { confirmationFields: ['Program', 'Specialisation', 'Fee', 'Status'], reply: 'MBA admission details can be shared with the student for follow-up.', replyDelay: 800 },
              completionCopy: 'The postgraduate course enquiry was completed.'
            }
          }
        }
      ]
    },
    {
      id: 'admission-assistance',
      title: 'Admission Assistance',
      category: 'admissions',
      defaultVariant: 'scms',
      direction: 'inbound',
      variants: [
        {
          id: 'scms',
          institute: 'SCMS Pune',
          defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English',
              audio: base + 'scms-admission-happy-flow-english.mp3',
              duration: 124.74,
              learner: 'Prospective student',
              purpose: 'BBA admission assistance',
              transcript: [
                { start: 0.66, speaker: 'AI Voice Agent', text: 'Hello, I am Diya from SCMS Pune. I can help you with information regarding the SET exam and our BBA and Global BBA admissions process.' },
                { start: 12.78, speaker: 'AI Voice Agent', text: 'Before we begin, would you prefer to continue our conversation in English or in Hindi?' },
                { start: 19.10, speaker: 'Student', text: 'You can continue in English.' },
                { start: 21.02, speaker: 'AI Voice Agent', text: 'How can I help you?' },
                { start: 23.46, speaker: 'Student', text: 'Basically, I wanted to know about the flagship program you guys are providing.' },
                { start: 29.90, speaker: 'AI Voice Agent', text: 'The flagship program of SCMS Pune is the Bachelor of Business Administration, BBA Honours or Honours with Research.' },
                { start: 42.50, speaker: 'AI Voice Agent', text: 'It is a four-year undergraduate management program designed in line with the national education policy offering specializations in various areas.' },
                { start: 53.86, speaker: 'Student', text: 'What are BBA honours exactly? I am new to this but interested in the stream.' },
                { start: 63.26, speaker: 'AI Voice Agent', text: 'Honours emphasises advanced learning in business, while honours with research combines that advanced learning with a substantial research component.' },
                { start: 77.70, speaker: 'Student', text: 'I am actually interested in that, so what is the next step?' },
                { start: 84.66, speaker: 'AI Voice Agent', text: 'Do you need help with anything else regarding the BBA programs or the admission process?' },
                { start: 91.66, speaker: 'Student', text: 'I will be visiting your college or something.' },
                { start: 96.18, speaker: 'AI Voice Agent', text: 'You can visit the campus on all working days except Sundays and holidays. Do you need help with anything else?' },
                { start: 106.91, speaker: 'AI Voice Agent', text: 'Was this conversation helpful? Please share a rating from one to five or brief feedback.' },
                { start: 113.59, speaker: 'Student', text: 'Yeah, I was actually fine. I would rate it around four.' },
                { start: 119.51, speaker: 'AI Voice Agent', text: 'Thank you for your feedback and for choosing SCMS Pune. Have a great day.' }
              ],
              outcome: {
                heading: 'Admission Assistance Completed',
                fields: [['Institute', 'SCMS Pune'], ['Program', 'BBA Honours / Honours with Research'], ['Duration', '4 years'], ['Campus Visit', 'Working days except Sundays and holidays'], ['Feedback', '4/5'], ['Status', 'Enquiry resolved']]
              },
              postCall: { confirmationFields: ['Program', 'Duration', 'Campus Visit', 'Status'], reply: 'SCMS Pune admission information has been shared.', replyDelay: 800 },
              completionCopy: 'The SCMS Pune admission enquiry was resolved.'
            },
            hi: {
              label: 'हिंदी',
              audio: base + 'scms-admission-happy-flow-hindi.mp3',
              duration: 142.85,
              learner: 'Prospective student',
              purpose: 'BBA admission assistance',
              transcript: [
                { start: 0.62, speaker: 'AI Voice Agent', text: 'Hello, I am Diya from SCMS Pune. I can help you with information regarding the SET exam and our BBA and Global BBA admissions process.' },
                { start: 11.56, speaker: 'AI Voice Agent', text: 'Before we begin, would you prefer to continue our conversation in English or in Hindi?' },
                { start: 17.42, speaker: 'Student', text: 'In Hindi.' },
                { start: 20.48, speaker: 'AI Voice Agent', text: 'What is your question?' },
                { start: 23.42, speaker: 'Student', text: 'What difference is dual and honours degree?' },
                { start: 31.74, speaker: 'AI Voice Agent', text: 'BBA honours with research is a single degree program, while Global BBA is an international dual degree program.' },
                { start: 41.06, speaker: 'AI Voice Agent', text: 'BBA honours students complete four years at SCMS Pune and receive a Symbiosis International deemed university degree.' },
                { start: 51.98, speaker: 'AI Voice Agent', text: 'In Global BBA, students study in India, Dubai and Australia and receive degrees from Symbiosis International and Deakin University.' },
                { start: 70.00, speaker: 'Student', text: 'How many semesters total?' },
                { start: 74.76, speaker: 'AI Voice Agent', text: 'BBA honours and honours with research is a four-year full-time undergraduate program with eight semesters.' },
                { start: 83.70, speaker: 'Student', text: 'And which specializations are there?' },
                { start: 90.02, speaker: 'AI Voice Agent', text: 'Majors include human resource management, marketing management, accounting and finance, international business and business analytics.' },
                { start: 105.66, speaker: 'AI Voice Agent', text: 'Minors include sustainability studies and environment management, entrepreneurship and other options.' },
                { start: 114.52, speaker: 'AI Voice Agent', text: 'You can visit campus on all working days, except Sundays and holidays.' },
                { start: 134.40, speaker: 'Student', text: 'No, thank you.' },
                { start: 136.02, speaker: 'AI Voice Agent', text: 'Thank you for your time. Have a good day. Namaste.' }
              ],
              outcome: {
                heading: 'Admission Assistance Completed',
                fields: [['Institute', 'SCMS Pune'], ['Program', 'BBA Honours / Global BBA'], ['Semesters', '8'], ['Specialisations', 'HR, Marketing, Finance, International Business, Business Analytics'], ['Campus Visit', 'Working days except Sundays and holidays'], ['Status', 'Enquiry resolved']]
              },
              postCall: { confirmationFields: ['Program', 'Semesters', 'Campus Visit', 'Status'], reply: 'SCMS Pune BBA details can be sent for follow-up.', replyDelay: 800 },
              completionCopy: 'The SCMS Pune Hindi admission enquiry was resolved.'
            }
          }
        }
      ]
    },
    {
      id: 'snap-registration',
      title: 'Registration Support',
      category: 'registration',
      defaultVariant: 'sibm-registration',
      direction: 'inbound',
      variants: [
        {
          id: 'sibm-registration',
          institute: 'SIBM Bengaluru',
          defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English',
              audio: base + 'sibm-snap-registration-english.mp3',
              duration: 126.68,
              learner: 'Prospective student',
              purpose: 'SNAP registration support',
              transcript: [
                { start: 1.74, speaker: 'AI Voice Agent', text: "Hello, I'm Sia from SIBM Bengaluru. I can help you with information regarding the SNAP test and our admissions process." },
                { start: 9.30, speaker: 'AI Voice Agent', text: 'Before we begin, would you prefer to continue our conversation in English or in Hindi?' },
                { start: 15.96, speaker: 'Student', text: 'English, please.' },
                { start: 20.52, speaker: 'AI Voice Agent', text: 'How can I help you with your SIBM Bengaluru admissions today?' },
                { start: 27.15, speaker: 'Student', text: 'How can I register for SNAP?' },
                { start: 30.19, speaker: 'AI Voice Agent', text: 'You can register for SNAP by visiting the official SNAP test website. The registration for SNAP 2025 was completed in November 2025.' },
                { start: 45.20, speaker: 'Student', text: 'Is the registration online?' },
                { start: 47.32, speaker: 'AI Voice Agent', text: 'Yes, the registration for SNAP is an online process.' },
                { start: 60.54, speaker: 'Student', text: 'Yeah, what is the registration fee?' },
                { start: 60.54, speaker: 'AI Voice Agent', text: 'The SNAP registration fee is Rs 2250 per attempt.' },
                { start: 70.37, speaker: 'Student', text: 'Can I apply for SIBM separately?' },
                { start: 74.37, speaker: 'AI Voice Agent', text: 'Admission to SIBM Bengaluru is exclusively through the SNAP test. There is no separate application outside of the SNAP process.' },
                { start: 88.79, speaker: 'Student', text: 'Can I edit my application?' },
                { start: 92.27, speaker: 'AI Voice Agent', text: 'Once your SNAP application has been submitted, it cannot be edited. Please ensure all details are correct before final submission.' },
                { start: 105.51, speaker: 'Student', text: 'No, thank you. Bye.' },
                { start: 109.03, speaker: 'AI Voice Agent', text: 'Was our conversation helpful to you today? On a scale of 1 to 5, how would you rate your experience?' },
                { start: 118.85, speaker: 'Student', text: '5.' }
              ],
              outcome: {
                heading: 'SNAP Registration Support Completed',
                fields: [['Institute', 'SIBM Bengaluru'], ['Topic', 'SNAP registration'], ['Mode', 'Online'], ['Fee', '₹2,250 per attempt'], ['Separate SIBM Form', 'Not outside SNAP process'], ['Status', 'Questions answered']]
              },
              postCall: { confirmationFields: ['Topic', 'Mode', 'Fee', 'Status'], reply: 'SNAP registration guidance has been shared.', replyDelay: 800 },
              completionCopy: 'The SNAP registration support call was completed.'
            },
            hi: {
              label: 'हिंदी',
              audio: base + 'sibm-snap-registration-hindi.mp3',
              duration: 141.37,
              learner: 'Prospective student',
              purpose: 'SNAP registration support',
              transcript: [
                { start: 1.46, speaker: 'AI Voice Agent', text: 'Hello, I am Sia from SIBM Bengaluru. I can help you with information regarding the SNAP test and our admissions process.' },
                { start: 8.86, speaker: 'AI Voice Agent', text: 'Before we begin, would you prefer to continue our conversation in English or in Hindi?' },
                { start: 16.50, speaker: 'Student', text: 'In Hindi, please.' },
                { start: 18.94, speaker: 'AI Voice Agent', text: 'Ji, ab hum Hindi mein baat karenge. Bataayye, mein SIBM Bengaluru admissions ke liye aapki kaise sahayata kar sakti hoon?' },
                { start: 30.18, speaker: 'Student', text: 'Main SNAP ke liye kaise register karu?' },
                { start: 33.00, speaker: 'AI Voice Agent', text: 'SNAP test ke liye register karne ke liye aapko hamari website par jana hoga.' },
                { start: 45.52, speaker: 'Student', text: 'Registration online hai kya?' },
                { start: 48.90, speaker: 'AI Voice Agent', text: 'Haan, SNAP registration process puri tarah se online hai. Aap hamari website par jaa kar online register kar sakte hain.' },
                { start: 61.54, speaker: 'Student', text: 'Haan, bataiye kitna hai, please.' },
                { start: 63.44, speaker: 'AI Voice Agent', text: 'SNAP test ke liye registration fee har attempt ke liye 2250 rupay hai.' },
                { start: 76.40, speaker: 'Student', text: 'SIBM ke liye separately apply kar sakti hoon?' },
                { start: 81.32, speaker: 'AI Voice Agent', text: 'SNAP test ke madhyam se SIBM Bengaluru admission ke liye, institute registration fee per program 1000 rupay ka bhugtan karna hoga.' },
                { start: 102.36, speaker: 'Student', text: 'Application ko edit karna?' },
                { start: 106.45, speaker: 'AI Voice Agent', text: 'Ek baar jab aap apna SNAP application jama kar dete hain, to usse edit nahi kiya ja sakta hai.' },
                { start: 116.83, speaker: 'AI Voice Agent', text: 'Kya aap SNAP eligibility criteria ke baare mein jana chahenge?' },
                { start: 122.32, speaker: 'Student', text: 'Nahi, bye.' },
                { start: 124.60, speaker: 'AI Voice Agent', text: 'Aapko ye conversation kitni madadgar lagi? One se five ke scale par aap isse kaise rate karenge?' }
              ],
              outcome: {
                heading: 'SNAP Registration Support Completed',
                fields: [['Institute', 'SIBM Bengaluru'], ['Topic', 'SNAP registration'], ['Mode', 'Online'], ['SNAP Fee', '₹2,250 per attempt'], ['Institute Fee', '₹1,000 per program'], ['Status', 'Questions answered']]
              },
              postCall: { confirmationFields: ['Topic', 'Mode', 'SNAP Fee', 'Status'], reply: 'SNAP registration details can be shared with the applicant.', replyDelay: 800 },
              completionCopy: 'The SNAP registration support call was completed.'
            }
          }
        }
      ]
    },
    {
      id: 'counsellor-connect',
      title: 'Counsellor Connect',
      category: 'counsellor',
      defaultVariant: 'sibm-counsellor',
      direction: 'inbound',
      variants: [
        {
          id: 'sibm-counsellor',
          institute: 'SIBM Bengaluru',
          defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English',
              audio: base + 'sibm-counsellor-connect-english.mp3',
              duration: 171.00,
              learner: 'Prospective student',
              purpose: 'Counsellor callback',
              transcript: [
                { start: 0.98, speaker: 'AI Voice Agent', text: "Hello, I'm Sia from SIBM Bengaluru. I can help you with the SNAP test and SIBM related information. How may I help you today?" },
                { start: 10.66, speaker: 'Student', text: 'What about the SNAP test?' },
                { start: 12.94, speaker: 'AI Voice Agent', text: 'The SNAP 2025 exam dates are December 6th, 14th and 20th, 2025. You can apply for one, two or all three dates, and your highest score will be used.' },
                { start: 29.18, speaker: 'Student', text: 'I have a friend who is NRI. He wants an MBA at SIBM. How do we do it?' },
                { start: 37.54, speaker: 'AI Voice Agent', text: 'For NRI students, your friend must apply through the Symbiosis Centre for International Education website under the international or NRI admission category. The SNAP test is not required for them.' },
                { start: 52.26, speaker: 'Student', text: 'He wants to know the fee as well.' },
                { start: 59.69, speaker: 'AI Voice Agent', text: 'For international students pursuing an MBA in Business Analytics at SIBM Bengaluru, the academic fee is 19,000 dollars per annum.' },
                { start: 66.57, speaker: 'AI Voice Agent', text: 'There is also a refundable institute deposit of 275 dollars and a non-refundable administrative fee of 550 dollars.' },
                { start: 94.97, speaker: 'Student', text: 'I want to know if you have good placements for both Indian and foreign students.' },
                { start: 103.58, speaker: 'AI Voice Agent', text: 'SIBM Bengaluru has good placements for all students, with over 125 recruiters. Some companies include Capgemini, ITC and Deloitte.' },
                { start: 127.58, speaker: 'Student', text: 'Is there any eligibility criteria for placements?' },
                { start: 136.97, speaker: 'AI Voice Agent', text: "I don't have that specific information. Our counsellor can help you with those details. Would you like to have a callback for further guidance?" },
                { start: 144.97, speaker: 'Student', text: 'Yes, please.' },
                { start: 149.53, speaker: 'AI Voice Agent', text: "Sure. I'll arrange a callback from our counsellor. Was the conversation helpful?" },
                { start: 157.53, speaker: 'Student', text: 'Around 4.5.' }
              ],
              outcome: {
                heading: 'Counsellor Callback Requested',
                fields: [['Institute', 'SIBM Bengaluru'], ['Topic', 'International / NRI MBA guidance'], ['Program', 'MBA Business Analytics'], ['Need', 'Placement eligibility details'], ['Feedback', '4.5/5'], ['Status', 'Counsellor callback requested']]
              },
              postCall: { confirmationFields: ['Topic', 'Need', 'Status'], reply: 'A counsellor callback request has been captured.', replyDelay: 800 },
              completionCopy: 'A counsellor callback was requested for detailed guidance.'
            }
          }
        }
      ]
    },
    {
      id: 'specialisation-discovery',
      title: 'Program / Specialisation Discovery',
      category: 'program-discovery',
      defaultVariant: 'univo',
      direction: 'inbound',
      variants: [
        {
          id: 'univo',
          institute: 'Univo',
          defaultLanguage: 'en',
          languages: {
            en: {
              label: 'English',
              audio: base + 'univo-direct-specialisation-english.mp4',
              duration: 119.76,
              learner: 'Prospective student',
              purpose: 'Specialisation discovery and enrolment link',
              transcript: [
                { start: 4.24, speaker: 'AI Voice Agent', text: 'Hi there, Admission Buddy, your virtual guide from Amity University Online.' },
                { start: 9.92, speaker: 'AI Voice Agent', text: 'I can share course details, help you explore programs and even assist with enrolment. What may I help you with today?' },
                { start: 17.40, speaker: 'Student', text: 'Hey, I just finished my 12th standard. I am interested in doing courses in data science related field.' },
                { start: 29.55, speaker: 'AI Voice Agent', text: 'It looks like data science is a popular choice and is available in a few programs. You can pursue it in MBA, emerging technologies, or BCA.' },
                { start: 42.07, speaker: 'AI Voice Agent', text: 'Which of these programs sounds most interesting to you?' },
                { start: 46.03, speaker: 'Student', text: 'Let’s go with BCA because I finished 12th standard only.' },
                { start: 51.90, speaker: 'AI Voice Agent', text: 'Great choice. Since you completed 12th standard, BCA in Data Science is a perfect fit.' },
                { start: 58.54, speaker: 'AI Voice Agent', text: 'Would you like to know more about its eligibility, duration or fees, or would you like to enrol?' },
                { start: 64.54, speaker: 'Student', text: 'Can you please tell me the course details like fee and duration?' },
                { start: 74.94, speaker: 'AI Voice Agent', text: 'The BCA in Data Science program has a duration of 36 months and the eligibility is 10 plus 2. The full program fee is Rs. 2,25,000.' },
                { start: 85.54, speaker: 'AI Voice Agent', text: 'Would you like to enrol in this course or know more about it?' },
                { start: 88.74, speaker: 'Student', text: "Actually, let's go with enrolment." },
                { start: 93.93, speaker: 'AI Voice Agent', text: 'To help you send the enrolment link, could you please share your nationality?' },
                { start: 99.17, speaker: 'Student', text: 'I am Indian.' },
                { start: 106.42, speaker: 'AI Voice Agent', text: 'Thank you for your interest. The enrolment link has been sent to your WhatsApp. Is there anything else I can help you with today?' },
                { start: 115.82, speaker: 'Student', text: "No, that's all. Thank you." }
              ],
              outcome: {
                heading: 'Enrolment Link Shared',
                fields: [['Institute', 'Univo'], ['Program', 'BCA Data Science'], ['Eligibility', '10+2'], ['Duration', '36 months'], ['Fee', '₹2,25,000'], ['Status', 'Enrolment link sent on WhatsApp']]
              },
              postCall: { confirmationFields: ['Program', 'Eligibility', 'Fee', 'Status'], reply: 'The enrolment link has been shared on WhatsApp.', replyDelay: 800 },
              completionCopy: 'The data-science programme was identified and the enrolment link was sent.'
            }
          }
        }
      ]
    }
  ];
})();
