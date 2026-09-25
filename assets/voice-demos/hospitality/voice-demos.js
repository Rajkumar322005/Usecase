window.HOSPITALITY_VOICE_DEMOS = [
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    direction: 'inbound',
    defaultVariant: 'hyatt',
    variants: [
      {
        id: 'hyatt',
        provider: 'Hyatt',
        direction: 'inbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/hospitality/hyatt-hotel-booking.mp3',
            duration: 151.524,
            direction: 'inbound',
            prospect: 'Guest',
            purpose: 'Grand Hyatt Mumbai table booking',
            completionCopy: 'The guest booked a table at Soma for a birthday dinner and was told the team would contact them shortly.',
            transcript: [
              { start: 3.47, end: 10.47, speaker: 'AI Voice Agent', text: "Hello, I'm Priya, your assistant for Grand Hyatt Mumbai. I'd be happy to help you book a table at one of our restaurants. May I have your name please?" },
              { start: 12.47, end: 17.47, speaker: 'Guest', text: "My name is Rajesh and I would like to book a table for one of my friend's birthday." },
              { start: 19.78, end: 24.78, speaker: 'AI Voice Agent', text: 'Nice to meet you, Rajesh. Happy early birthday to your friend. What date would you like to book for?' },
              { start: 25.78, end: 29.78, speaker: 'Guest', text: 'We were planning to come around tomorrow night for dinner.' },
              { start: 33.60, end: 38.60, speaker: 'AI Voice Agent', text: 'That sounds lovely. Tomorrow, the 26th of September 2025. What time would you prefer to dine in?' },
              { start: 39.60, end: 43.60, speaker: 'Guest', text: "Yeah, it's around the night, 7 to 10 PM." },
              { start: 45.91, end: 48.91, speaker: 'AI Voice Agent', text: 'Understood. And how many guests will be joining you?' },
              { start: 49.91, end: 52.91, speaker: 'Guest', text: 'Yeah, I think we have got around 15 people.' },
              { start: 53.91, end: 60.91, speaker: 'AI Voice Agent', text: 'That sounds like a wonderful group. We have several wonderful options like Celini, Soma and China House Restaurant. Which restaurant would you like to book for your group?' },
              { start: 61.91, end: 71.91, speaker: 'Guest', text: 'I am not sure about the restaurant available, but I would like to book a restaurant which has more North Indian, South Indian foods, which my friends like most.' },
              { start: 74.32, end: 82.32, speaker: 'AI Voice Agent', text: "Soma is an excellent choice. It specializes in authentic North Indian cuisine, which I'm sure your friends will love for the celebration. Would you like me to book a table for you at Soma?" },
              { start: 85.11, end: 88.11, speaker: 'Guest', text: 'Yeah, Soma is a good idea.' },
              { start: 90.46, end: 97.46, speaker: 'AI Voice Agent', text: 'Yes, Soma is perfect for that, with its wonderful selection of traditional North Indian dishes. I would like to book a table for your group of 15 at Soma for tomorrow night.' },
              { start: 98.46, end: 101.46, speaker: 'AI Voice Agent', text: 'Also, do you have any special requests or dietary notes I should include?' },
              { start: 104.09, end: 116.09, speaker: 'Guest', text: 'Yeah, please have a cake for my friend who is there, and out of 15 people, two people are vegetarian. And on top of it, what is the average price per person?' },
              { start: 121.09, end: 128.09, speaker: 'AI Voice Agent', text: 'The set menu at Soma is approximately 3,600 INR per person. I have noted your request for a birthday cake and the two vegetarian guests.' },
              { start: 128.09, end: 136.09, speaker: 'AI Voice Agent', text: "Just to confirm, you'd like a table for 15 guests at Soma on the 26th of September 2025 at 7 PM. Is that correct?" },
              { start: 137.09, end: 139.09, speaker: 'Guest', text: "Yeah, that's correct. Yeah, that's in the book." },
              { start: 146.42, end: 151.42, speaker: 'AI Voice Agent', text: 'Perfect. Thank you for sharing the details. Your booking is confirmed. Our team will contact you shortly.' }
            ],
            outcome: {
              heading: '✅ Table Booking Confirmed',
              fields: [
                ['Source', 'Hyatt'],
                ['Guest', 'Rajesh'],
                ['Hotel', 'Grand Hyatt Mumbai'],
                ['Restaurant', 'Soma'],
                ['Date', '26 September 2025'],
                ['Time', '7 PM'],
                ['Guests', '15'],
                ['Special Request', 'Birthday cake; two vegetarian guests'],
                ['Price Shared', '₹3,600 per person'],
                ['Status', 'Booking confirmed; team will contact guest shortly']
              ]
            },
            postCall: {
              confirmationFields: ['Guest', 'Hotel', 'Restaurant', 'Date', 'Time', 'Guests', 'Status'],
              reply: 'The Soma table booking was confirmed. The Hyatt team will contact the guest shortly.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  }
];
