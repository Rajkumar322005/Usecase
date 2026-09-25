window.REALESTATE_VOICE_DEMOS = [
  {
    id: 'site-visit-scheduling',
    title: 'Site Visit Scheduling',
    direction: 'outbound',
    defaultVariant: 'property-station',
    variants: [
      {
        id: 'property-station',
        project: 'Property Station',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/realestate/property-station-mansi-july-16.mp3',
            duration: 92.844,
            direction: 'outbound',
            prospect: 'prospect',
            purpose: 'Site visit scheduling',
            completionCopy: 'The site visit request was captured and the details are ready to be shared on WhatsApp.',
            transcript: [
              { start: 1.04, end: 5.18, speaker: 'AI Voice Agent', text: 'Hello, I’m calling from Eldeco Terra and Soul. Is this a good time to speak?' },
              { start: 6.26, end: 9.02, speaker: 'Prospect', text: 'Yeah.' },
              { start: 9.02, end: 14.78, speaker: 'AI Voice Agent', text: 'Great. I’m calling about Eldeco Terra and Soul, a luxury residential project in Sector 80, Gurugram.' },
              { start: 14.78, end: 19.94, speaker: 'AI Voice Agent', text: 'It offers spacious 3 BHK residences. Would you be interested in exploring this further?' },
              { start: 22.16, end: 24.16, speaker: 'Prospect', text: 'Yeah, sure.' },
              { start: 24.68, end: 30.88, speaker: 'AI Voice Agent', text: 'All right, are you looking for a home for yourself and your family, or are you exploring an investment opportunity?' },
              { start: 32.92, end: 34.92, speaker: 'Prospect', text: 'I’m looking for my family.' },
              { start: 37.70, end: 42.66, speaker: 'AI Voice Agent', text: 'That’s wonderful. This project is ideal for families looking for a luxurious and private living experience.' },
              { start: 42.82, end: 48.18, speaker: 'AI Voice Agent', text: 'Would you like to explore the project through a site visit, or would you prefer to have a discussion with a senior advisor first?' },
              { start: 49.94, end: 52.34, speaker: 'Prospect', text: 'I would like to visit the site first.' },
              { start: 55.42, end: 59.98, speaker: 'AI Voice Agent', text: 'Excellent. How about this weekend? Do you have a preferred day and time for the site visit?' },
              { start: 63.02, end: 66.62, speaker: 'Prospect', text: 'Yes, yes, 20th July, 5 p.m. works for me.' },
              { start: 67.02, end: 77.28, speaker: 'AI Voice Agent', text: 'All right, so that’s July 20th at 5 p.m. Could you please confirm if this number is active on WhatsApp so we can share the site visit details?' },
              { start: 79.36, end: 83.79, speaker: 'Prospect', text: 'You can use this number.' },
              { start: 83.91, end: 88.97, speaker: 'AI Voice Agent', text: 'Perfect. We’ll share all the details for your site visit on WhatsApp. Thank you for your time today.' },
              { start: 88.97, end: 90.97, speaker: 'AI Voice Agent', text: 'We look forward to seeing you.' }
            ],
            outcome: {
              heading: '✅ Site Visit Scheduled',
              fields: [
                ['Project', 'Eldeco Terra & Soul'],
                ['Date', '20 July'],
                ['Time', '5:00 PM'],
                ['Lead Type', 'Family home buyer'],
                ['Status', 'Site visit details to be shared on WhatsApp']
              ]
            },
            postCall: {
              confirmationFields: ['Project', 'Date', 'Time', 'Status'],
              reply: 'Your site visit details will be shared on WhatsApp.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification',
    direction: 'outbound',
    defaultVariant: 'property-station',
    variants: [
      {
        id: 'property-station',
        project: 'Property Station',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/realestate/property-station-given-sample.mp3',
            duration: 230.508,
            direction: 'outbound',
            prospect: 'prospect',
            purpose: 'Project enquiry and qualification',
            completionCopy: 'The project enquiry was captured and a senior advisor callback was requested.',
            transcript: [
              { start: 0.98, end: 4.98, speaker: 'AI Voice Agent', text: 'Hello, I’m calling from Eldeco Terra and Soul.' },
              { start: 4.98, end: 6.98, speaker: 'AI Voice Agent', text: 'Is this a good time to speak?' },
              { start: 7.98, end: 10.98, speaker: 'Prospect', text: 'Yes, please. What is this regarding about?' },
              { start: 10.98, end: 20.50, speaker: 'AI Voice Agent', text: 'Thank you. I’m calling about Eldeco Terra and Soul, a luxury residential project in Sector 80, Gurugram.' },
              { start: 20.50, end: 26.50, speaker: 'AI Voice Agent', text: 'We offer spacious 3 BHK residences. Would you be interested in exploring this project further?' },
              { start: 26.50, end: 33.10, speaker: 'Prospect', text: 'Yeah. Where exactly is this located?' },
              { start: 33.10, end: 44.10, speaker: 'AI Voice Agent', text: 'It’s located in Sector 80, Gurugram, right on the Southern Peripheral Road, also known as the SPR corridor. This area offers excellent connectivity to NH48 and the Dwarka Expressway.' },
              { start: 44.10, end: 48.10, speaker: 'AI Voice Agent', text: 'Would you like to know more about the project itself or the connectivity?' },
              { start: 48.10, end: 50.10, speaker: 'Prospect', text: 'Yes, what is the price?' },
              { start: 50.10, end: 67.94, speaker: 'AI Voice Agent', text: 'The starting price for a residence at Eldeco Terra and Soul is approximately 2.90 crores onwards. This is based on the current pre-launch price of 13,500 rupees per square foot, PLC and GST.' },
              { start: 67.94, end: 73.94, speaker: 'AI Voice Agent', text: 'Would you like a senior advisor to discuss the current pricing and any potential pre-launch benefits in more detail?' },
              { start: 73.94, end: 81.20, speaker: 'Prospect', text: 'Actually, do you have 2 BHK or 1 BHK?' },
              { start: 81.20, end: 94.20, speaker: 'AI Voice Agent', text: 'Eldeco Terra and Soul only offers 3 BHK residences. The flat sizes are 2,150 square feet for 3 BHK and 2,450 square feet for 3 BHK plus servant.' },
              { start: 94.20, end: 99.20, speaker: 'AI Voice Agent', text: 'Are you looking for a home for yourself and your family, or exploring investment opportunities?' },
              { start: 99.20, end: 105.94, speaker: 'Prospect', text: 'Do you have only flat-room apartments, or do you also have villas?' },
              { start: 105.94, end: 115.94, speaker: 'AI Voice Agent', text: 'This project offers only luxury apartments. It’s a low-density residential development with only 224 residences spread across 2.70 acres.' },
              { start: 115.94, end: 120.94, speaker: 'AI Voice Agent', text: 'Would you like to know more about the amenities or perhaps the unique features?' },
              { start: 120.94, end: 132.54, speaker: 'Prospect', text: 'Sorry, there are only 224 residences in total within the project. This low-density planning offers more privacy. Is it a low-rise or high-rise apartment?' },
              { start: 132.54, end: 147.41, speaker: 'AI Voice Agent', text: 'It’s a high-rise apartment complex with two towers, each G plus 30 floors. The residences start from the third floor, elevated above two levels of clubhouse.' },
              { start: 147.41, end: 151.41, speaker: 'AI Voice Agent', text: 'Would you be interested in knowing more about the amenities we offer?' },
              { start: 151.41, end: 158.41, speaker: 'Prospect', text: 'Do you guys have any parking, track, swimming pool or party halls?' },
              { start: 158.41, end: 172.67, speaker: 'AI Voice Agent', text: 'Yes, we have a variety of amenities including a swimming pool, kids pool, gymnasium and a party hall. There’s also a jogging track, a multi-purpose court and landscaped greens.' },
              { start: 172.67, end: 177.67, speaker: 'AI Voice Agent', text: 'Would you like to schedule a site visit to experience the project firsthand this weekend?' },
              { start: 177.67, end: 186.67, speaker: 'Prospect', text: 'Maybe I would like to know more about pricing. Can I have any senior representative call me before I schedule a site visit?' },
              { start: 186.67, end: 198.33, speaker: 'AI Voice Agent', text: 'Certainly. I can arrange for a senior advisor to call you to discuss the pricing and other details. What would be a good time for them to call you?' },
              { start: 198.33, end: 201.33, speaker: 'Prospect', text: 'Maybe tomorrow in the morning.' },
              { start: 201.33, end: 214.08, speaker: 'AI Voice Agent', text: 'All right, so a call tomorrow morning would be good. And just to confirm, is this the active WhatsApp number where we can share the details of the project and the senior advisor’s contact information?' },
              { start: 214.08, end: 222.51, speaker: 'Prospect', text: 'Yes, yes, we’ll get the one.' },
              { start: 222.51, end: 230.51, speaker: 'AI Voice Agent', text: 'I’ve noted that down. Thank you for your time today. Our senior advisor will connect with you tomorrow morning to discuss Eldeco Terra and Soul. Have a great day.' }
            ],
            outcome: {
              heading: 'Lead Interest Captured',
              fields: [
                ['Project', 'Eldeco Terra & Soul'],
                ['Interest', 'Pricing and amenities enquiry'],
                ['Callback', 'Tomorrow morning'],
                ['Status', 'Senior advisor callback requested']
              ]
            },
            postCall: {
              confirmationFields: ['Project', 'Callback', 'Status'],
              reply: 'A senior advisor callback has been requested for tomorrow morning.',
              replyDelay: 650
            }
          }
        }
      }
    ]
  },
  {
    id: 'callback-nurture',
    title: 'Callback / Lead Nurture',
    direction: 'outbound',
    defaultVariant: 'property-station',
    variants: [
      {
        id: 'property-station',
        project: 'Property Station',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/realestate/property-station-updated-recording.mp3',
            duration: 178.236,
            direction: 'outbound',
            prospect: 'prospect',
            purpose: 'Advisor callback scheduling',
            completionCopy: 'The buyer asked for pricing and payment-plan guidance, and a callback was scheduled.',
            transcript: [
              { start: 0.78, end: 5.78, speaker: 'AI Voice Agent', text: 'Hello, I am Arushi calling from Eldeco Terra and Soul. Is this a good time to speak?' },
              { start: 5.78, end: 6.78, speaker: 'Prospect', text: 'Yeah.' },
              { start: 6.78, end: 17.15, speaker: 'AI Voice Agent', text: 'Great. Eldeco Terra and Soul is a luxury residential development in Sector 80, Gurugram, offering spacious 3 BHK residences.' },
              { start: 17.15, end: 24.15, speaker: 'AI Voice Agent', text: 'Prices start from just 2.90 crores onwards. Would you be interested in exploring this project further?' },
              { start: 24.15, end: 26.62, speaker: 'Prospect', text: 'Yeah, yeah, sure.' },
              { start: 26.62, end: 37.98, speaker: 'AI Voice Agent', text: 'Are you looking for a home for yourself and your family, or are you exploring this as an investment opportunity?' },
              { start: 37.98, end: 43.32, speaker: 'Prospect', text: 'I am looking for a family.' },
              { start: 43.32, end: 52.32, speaker: 'AI Voice Agent', text: 'That’s wonderful. This project is known for its low-density planning with only 224 residences, offering a more private and exclusive living experience.' },
              { start: 52.32, end: 58.32, speaker: 'AI Voice Agent', text: 'Would you like to explore the project through a site visit or have a detailed discussion with our advisor?' },
              { start: 60.18, end: 68.22, speaker: 'Prospect', text: 'Can you please tell me where exactly the project is located?' },
              { start: 68.22, end: 79.22, speaker: 'AI Voice Agent', text: 'The project is located in Sector 80, Gurugram, right on the Southern Peripheral Road, also known as the SPR corridor. It offers excellent connectivity to NH48 and Dwarka Expressway.' },
              { start: 79.22, end: 84.22, speaker: 'AI Voice Agent', text: 'Would you like to know more about the connectivity or the project features?' },
              { start: 84.22, end: 86.22, speaker: 'Prospect', text: 'Yeah, sure.' },
              { start: 86.22, end: 98.22, speaker: 'AI Voice Agent', text: 'It’s a low-density project spread across 2.70 acres with only two towers of G plus 30 floors and just four apartments per core. This ensures more privacy and openness for residents.' },
              { start: 98.22, end: 102.22, speaker: 'AI Voice Agent', text: 'Would you be interested in knowing about the amenities offered here?' },
              { start: 102.22, end: 109.97, speaker: 'Prospect', text: 'Do you have any amenities for kids because they have a crib?' },
              { start: 109.97, end: 119.97, speaker: 'AI Voice Agent', text: 'Yes, absolutely. The project offers a kids pool, a kids play area and a toddler play zone among many other amenities. There’s also a forest garden and landscaped green for everyone to enjoy.' },
              { start: 119.97, end: 126.97, speaker: 'AI Voice Agent', text: 'Would you like to know more about the other facilities, or would you prefer to discuss pricing and floor plans?' },
              { start: 126.97, end: 131.97, speaker: 'Prospect', text: 'Yeah, yeah. I want to discuss about the price. How much is it?' },
              { start: 131.97, end: 145.41, speaker: 'AI Voice Agent', text: 'The starting price for a 3 BHK residence is approximately 2.90 crores onwards. This is based on the current pre-launch price of rupees 13,500 per square foot plus PLC and GST.' },
              { start: 145.41, end: 152.41, speaker: 'AI Voice Agent', text: 'Would you like a senior advisor to provide you with the most current pricing, payment plans and any available pre-launch benefits?' },
              { start: 152.41, end: 155.78, speaker: 'Prospect', text: 'Yeah, sure.' },
              { start: 155.78, end: 164.77, speaker: 'AI Voice Agent', text: 'Great. Our senior advisor can help you with all the details. What would be a good time for them to call you back?' },
              { start: 164.77, end: 169.78, speaker: 'Prospect', text: 'Today evening at 5 p.m.' },
              { start: 169.78, end: 176.78, speaker: 'AI Voice Agent', text: 'Perfect. So our senior advisor will call you today evening at 5 p.m. Thank you for your time and we look forward to assisting you further.' }
            ],
            outcome: {
              heading: '✅ Callback Scheduled',
              fields: [
                ['Project', 'Eldeco Terra & Soul'],
                ['Need', 'Pricing and payment plan discussion'],
                ['Callback', 'Today evening at 5:00 PM'],
                ['Status', 'Senior advisor callback scheduled']
              ]
            },
            postCall: {
              confirmationFields: ['Project', 'Callback', 'Status'],
              reply: 'A senior advisor callback has been scheduled for today evening at 5:00 PM.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  }
];
