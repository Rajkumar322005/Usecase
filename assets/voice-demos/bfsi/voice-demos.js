window.BFSI_VOICE_DEMOS = [
  {
    id: 'motor-insurance-booking',
    title: 'Motor Insurance Quote',
    direction: 'outbound',
    defaultVariant: 'royal-sundaram',
    variants: [
      {
        id: 'royal-sundaram',
        provider: 'Royal Sundaram',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/bfsi/royal-sundaram-car-insurance-booking.mp3',
            duration: 99.0,
            direction: 'outbound',
            prospect: 'Customer',
            purpose: 'Standalone own-damage motor insurance quote',
            completionCopy: 'The car details, coverage preference and quote confirmation were captured from the original Royal Sundaram recording.',
            transcript: [
              { start: 0.69, end: 4.19, speaker: 'AI Voice Agent', text: "Hi, I'm Ria, your Royal Sundaram Insurance Assistant." },
              { start: 4.19, end: 10.69, speaker: 'AI Voice Agent', text: 'This call is recorded for quality and assurance. To start, please confirm your preferred language, English or Tamil.' },
              { start: 11.99, end: 13.69, speaker: 'Customer', text: 'I would prefer English.' },
              { start: 15.09, end: 20.49, speaker: 'AI Voice Agent', text: 'Great. To help you get a car insurance quote, could you please tell me your car registration number?' },
              { start: 21.29, end: 26.29, speaker: 'Customer', text: "Yeah, it's TN37 DK3812." },
              { start: 28.54, end: 38.04, speaker: 'AI Voice Agent', text: 'Thank you. I have TN37 DK3812. A Maruti Suzuki Ertiga ZXI Plus BSVI registered in 2021. Is this correct?' },
              { start: 39.54, end: 40.64, speaker: 'Customer', text: "Yeah, that's correct." },
              { start: 42.81, end: 48.71, speaker: 'AI Voice Agent', text: 'Great. What type of policy are you looking for? Comprehensive, standalone own damage or third party liability?' },
              { start: 50.21, end: 53.01, speaker: 'Customer', text: "It's only for me. So I'll go with standalone." },
              { start: 55.14, end: 61.24, speaker: 'AI Voice Agent', text: 'Okay. You would like a standalone own damage policy. Is this policy for an individual or a corporate entity?' },
              { start: 62.04, end: 63.34, speaker: 'Customer', text: "It's for an individual." },
              { start: 65.54, end: 75.84, speaker: 'AI Voice Agent', text: 'Your standalone own damage policy quote for the Maruti Suzuki Ertiga ZXI Plus BSVI is ₹2,938. Would you like to confirm and receive this quote?' },
              { start: 77.44, end: 78.54, speaker: 'Customer', text: 'Oh yeah, please.' },
              { start: 80.52, end: 89.92, speaker: 'AI Voice Agent', text: 'Your quote reference number is QVPC 32291341. An official quote will be shared with you shortly. Thank you for choosing Royal Sundaram.' },
              { start: 91.96, end: 96.92, speaker: 'Customer', text: 'Okay. Thank you.' }
            ],
            outcome: {
              heading: '✅ Insurance Quote Confirmed',
              fields: [
                ['Provider', 'Royal Sundaram'],
                ['Vehicle', 'Maruti Suzuki Ertiga ZXI Plus BSVI'],
                ['Registration', 'TN37 DK3812'],
                ['Policy Type', 'Standalone own damage'],
                ['Quote', '₹2,938'],
                ['Reference', 'QVPC 32291341']
              ]
            },
            postCall: {
              confirmationFields: ['Provider', 'Policy Type', 'Quote', 'Reference'],
              reply: 'The motor insurance quote was confirmed and queued for official sharing.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'policy-renewal',
    title: 'Policy Renewal Quote',
    direction: 'outbound',
    defaultVariant: 'royal-sundaram',
    variants: [
      {
        id: 'royal-sundaram',
        provider: 'Royal Sundaram',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/bfsi/royal-sundaram-policy-renewal-english.mp3',
            duration: 178.992,
            direction: 'outbound',
            prospect: 'Policyholder',
            purpose: 'Car insurance renewal quote and add-on selection',
            completionCopy: 'The renewal coverage preference and WhatsApp quote delivery were captured from the original recording.',
            transcript: [
              { start: 1.49, end: 10.49, speaker: 'AI Voice Agent', text: 'Hi, this is Ria calling from Royal Sundaram car insurance. This call is to help you renew your car insurance. Am I speaking with Mr. Sharma?' },
              { start: 11.49, end: 15.06, speaker: 'Customer', text: 'Yes.' },
              { start: 15.06, end: 22.06, speaker: 'AI Voice Agent', text: 'Great. Thank you. This call may be recorded for quality and training purposes. Would you like to continue in English?' },
              { start: 23.06, end: 26.78, speaker: 'Customer', text: 'Take my space.' },
              { start: 26.78, end: 39.78, speaker: 'AI Voice Agent', text: "Okay. No worries. I'll keep this fixed. Can I confirm the mobile number you're calling from for renewal updates?" },
              { start: 38.78, end: 39.78, speaker: 'Customer', text: "Yeah, that's okay." },
              { start: 39.78, end: 50.22, speaker: 'AI Voice Agent', text: 'I show that you drive a Toyota Camry 2021 model with registration number PN11AD1436. Is that correct?' },
              { start: 51.22, end: 54.22, speaker: 'Customer', text: "Can you repeat the number again? It's so fast." },
              { start: 56.56, end: 65.56, speaker: 'AI Voice Agent', text: 'Of course. The registration number is PN11AD1436. Is that correct?' },
              { start: 63.56, end: 65.56, speaker: 'Customer', text: "Yeah, that's correct." },
              { start: 65.56, end: 84.03, speaker: 'AI Voice Agent', text: 'Great. Third party covers damage costs to others. The comprehensive package protects your own vehicle from accidents, theft and floods. Would you like me to help you choose?' },
              { start: 86.03, end: 88.03, speaker: 'Customer', text: "I'll just go with the comprehensive package." },
              { start: 88.03, end: 108.89, speaker: 'AI Voice Agent', text: 'Excellent choice. With the comprehensive package, we also have helpful add-ons. Zero depreciation keeps parts covered at full value, and engine protect is helpful in flood areas. Would you like these add-ons?' },
              { start: 108.89, end: 112.89, speaker: 'Customer', text: "Let's also add the engine protection." },
              { start: 112.89, end: 126.49, speaker: 'AI Voice Agent', text: 'So you would like to include engine protect with your comprehensive package. How about zero depreciation? Would you like to add that as well?' },
              { start: 126.49, end: 129.49, speaker: 'Customer', text: "I'll just go with the quote with engine protection." },
              { start: 129.49, end: 140.73, speaker: 'AI Voice Agent', text: 'Okay. I can send your quote on WhatsApp or email. What do you prefer?' },
              { start: 140.73, end: 145.49, speaker: 'Customer', text: 'WhatsApp is okay.' },
              { start: 145.49, end: 159.49, speaker: 'AI Voice Agent', text: 'Sure. I will send that quote to you on WhatsApp. Confirming Toyota Camry 2021, PN11AD1436, comprehensive package with engine protect. Is that correct?' },
              { start: 159.49, end: 161.49, speaker: 'Customer', text: "That's all correct." },
              { start: 161.49, end: 174.92, speaker: 'AI Voice Agent', text: 'Excellent. Your quote will be sent to your WhatsApp shortly. Thank you so much for speaking with me today. Have a wonderful day.' }
            ],
            outcome: {
              heading: '✅ Renewal Quote Requested',
              fields: [
                ['Provider', 'Royal Sundaram'],
                ['Vehicle', 'Toyota Camry 2021'],
                ['Registration', 'PN11AD1436'],
                ['Coverage', 'Comprehensive'],
                ['Add-on', 'Engine Protect'],
                ['Delivery', 'WhatsApp quote']
              ]
            },
            postCall: {
              confirmationFields: ['Provider', 'Coverage', 'Add-on', 'Delivery'],
              reply: 'The renewal quote preference was captured for WhatsApp delivery.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'claim-guidance',
    title: 'Claim Information Guidance',
    direction: 'outbound',
    defaultVariant: 'royal-sundaram',
    variants: [
      {
        id: 'royal-sundaram',
        provider: 'Royal Sundaram',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/bfsi/royal-sundaram-claim-information.mp3',
            duration: 47.016,
            direction: 'outbound',
            prospect: 'Policyholder',
            purpose: 'Adverse claim guidance',
            completionCopy: 'The customer was informed that online issuance cannot proceed because of the adverse claim record.',
            transcript: [
              { start: 1.39, end: 9.91, speaker: 'AI Voice Agent', text: "Hi, I'm Ria from Royal Sundaram. This call is recorded for quality. What is your preferred language, English or Tamil?" },
              { start: 11.43, end: 12.43, speaker: 'Customer', text: 'English please.' },
              { start: 12.73, end: 27.10, speaker: 'AI Voice Agent', text: 'Okay, I will proceed in English. I see that your previous policy had an adverse claim. Due to this, we cannot issue a new policy online. Please visit your nearest branch or connect with our representative.' },
              { start: 29.91, end: 31.91, speaker: 'Customer', text: 'Okay, noted. Thank you.' },
              { start: 32.91, end: 35.91, speaker: 'AI Voice Agent', text: 'You are welcome. Is there anything else I can help you with today?' },
              { start: 36.91, end: 37.91, speaker: 'Customer', text: 'No, thank you.' },
              { start: 38.91, end: 42.86, speaker: 'AI Voice Agent', text: 'You are welcome. Have a great day.' }
            ],
            outcome: {
              heading: 'Claim Guidance Shared',
              fields: [
                ['Provider', 'Royal Sundaram'],
                ['Issue', 'Previous policy has an adverse claim'],
                ['Online Status', 'Cannot issue new policy online'],
                ['Next Step', 'Branch or representative assistance']
              ]
            },
            postCall: {
              confirmationFields: ['Provider', 'Issue', 'Next Step'],
              reply: 'The customer was guided to branch or representative support for the adverse claim case.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'address-verification',
    title: 'Loan Address Verification',
    direction: 'outbound',
    defaultVariant: 'tyger-capital',
    variants: [
      {
        id: 'tyger-capital',
        provider: 'Tyger Capital',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/bfsi/tyger-capital-address-verified.mp3',
            duration: 73.8,
            direction: 'outbound',
            prospect: 'Loan applicant',
            purpose: 'Loan record address verification',
            completionCopy: 'The residential and office addresses were verified in the original Tyger Capital recording.',
            transcript: [
              { start: 0.00, end: 6.00, speaker: 'AI Voice Agent', text: 'Hello, I am Monica from Tyger Capital. Can I speak to Rashmi?' },
              { start: 6.00, end: 9.38, speaker: 'Customer', text: 'Yes, please tell me.' },
              { start: 9.38, end: 17.38, speaker: 'AI Voice Agent', text: 'Thank you for your time. This call is for your loan record address verification. It will take just a few minutes. Can I proceed?' },
              { start: 17.38, end: 21.55, speaker: 'Customer', text: 'Yes, please tell me.' },
              { start: 21.55, end: 29.41, speaker: 'AI Voice Agent', text: 'According to the record, you are a loan applicant. Is this correct?' },
              { start: 25.55, end: 29.41, speaker: 'Customer', text: 'Yes.' },
              { start: 29.41, end: 39.41, speaker: 'AI Voice Agent', text: 'Your residential, permanent and office address needs to be verified. Your residential address is D. Unity Byte Green Park. Is this correct?' },
              { start: 39.41, end: 43.81, speaker: 'Customer', text: 'Yes, it is.' },
              { start: 43.81, end: 51.81, speaker: 'AI Voice Agent', text: 'Your office address is Satya Park Avenue, HSR Layout, Bangalore.' },
              { start: 51.81, end: 57.87, speaker: 'Customer', text: 'Yes, it is.' },
              { start: 57.87, end: 61.87, speaker: 'AI Voice Agent', text: 'Thank you. Your addresses have been successfully verified. Can I help you with anything else?' },
              { start: 61.87, end: 63.87, speaker: 'Customer', text: 'No, thank you so much.' },
              { start: 63.87, end: 70.37, speaker: 'AI Voice Agent', text: 'Thank you for your time. Good day.' }
            ],
            outcome: {
              heading: '✅ Address Verification Completed',
              fields: [
                ['Provider', 'Tyger Capital'],
                ['Customer', 'Rashmi'],
                ['Record Type', 'Loan applicant'],
                ['Residential Address', 'Verified'],
                ['Office Address', 'Verified'],
                ['Status', 'Addresses verified']
              ]
            },
            postCall: {
              confirmationFields: ['Provider', 'Customer', 'Status'],
              reply: 'The loan record address verification was completed successfully.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'financial-advisory-callback',
    title: 'Financial Advisory Callback',
    direction: 'outbound',
    defaultVariant: 'onefinance',
    variants: [
      {
        id: 'onefinance',
        provider: '1Finance',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/bfsi/onefinance-advisory-english.mp3',
            duration: 112.176,
            direction: 'outbound',
            prospect: 'Customer',
            purpose: 'Tax filing advisory callback',
            completionCopy: 'The customer asked for a follow-up call after hearing the tax filing options.',
            transcript: [
              { start: 0.21, end: 7.71, speaker: 'AI Voice Agent', text: 'Hello Shreya, I am Arjun from Plan My Tax, powered by 1Finance. You had signed up on our app for tax and financial planning.' },
              { start: 7.71, end: 10.21, speaker: 'AI Voice Agent', text: 'Would you be comfortable speaking in English or Hindi?' },
              { start: 10.21, end: 14.08, speaker: 'Customer', text: 'Yeah, you can continue in English.' },
              { start: 14.08, end: 19.58, speaker: 'AI Voice Agent', text: 'That is great. Is it a good time to talk for a few minutes?' },
              { start: 17.58, end: 19.58, speaker: 'Customer', text: 'Yeah, sure, tell me.' },
              { start: 19.58, end: 25.58, speaker: 'AI Voice Agent', text: 'Since the ITR filing season is approaching, have you already filed your return this year or are you still planning to?' },
              { start: 25.58, end: 27.58, speaker: 'Customer', text: 'I am still planning to.' },
              { start: 27.58, end: 39.83, speaker: 'AI Voice Agent', text: 'For simpler returns like ITR1 or ITR4, we offer AI assisted filing. You file yourself with step-by-step guidance at ₹999. Would you like to hear more about this?' },
              { start: 39.83, end: 43.27, speaker: 'Customer', text: 'What is the other option?' },
              { start: 43.27, end: 56.27, speaker: 'AI Voice Agent', text: 'Our other option is CA assisted filing. A dedicated qualified CA handles everything for you. The price is ₹2,499. Would you like to know about the cashback?' },
              { start: 56.27, end: 59.27, speaker: 'Customer', text: 'Is this monthly or yearly payment?' },
              { start: 60.27, end: 71.27, speaker: 'AI Voice Agent', text: 'The payment is a one-time upfront amount. After your ITR is successfully filed, the full amount is credited back to you as cashback. Does that make sense?' },
              { start: 71.27, end: 76.27, speaker: 'Customer', text: 'Sure. Then, yeah, I might give it a second thought.' },
              { start: 76.27, end: 82.27, speaker: 'AI Voice Agent', text: 'I understand. Would you prefer that I call you back at a later time to discuss this further?' },
              { start: 82.27, end: 89.27, speaker: 'Customer', text: 'Yeah, you can call me tomorrow at 3 PM. I would like to discuss about it.' },
              { start: 89.27, end: 96.27, speaker: 'AI Voice Agent', text: 'Sure. I can schedule a call back for tomorrow at 3 PM. Is there anything else I can help you with before we end the call?' },
              { start: 96.27, end: 98.27, speaker: 'Customer', text: 'No, no, thank you.' },
              { start: 98.27, end: 108.27, speaker: 'AI Voice Agent', text: 'Thank you so much for your time, Shreya. We will speak with you tomorrow at 3 PM. Have a wonderful day and take care.' }
            ],
            outcome: {
              heading: '✅ Callback Scheduled',
              fields: [
                ['Provider', '1Finance'],
                ['Customer', 'Shreya'],
                ['Service', 'ITR filing assistance'],
                ['Options Shared', 'AI assisted and CA assisted filing'],
                ['Callback', 'Tomorrow at 3 PM'],
                ['Status', 'Follow-up scheduled']
              ]
            },
            postCall: {
              confirmationFields: ['Provider', 'Service', 'Callback', 'Status'],
              reply: 'The financial advisory callback was scheduled for tomorrow at 3 PM.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  }
];
