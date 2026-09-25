window.ECOMMERCE_VOICE_DEMOS = [
  {
    id: 'product-discovery',
    title: 'Product Discovery & Enquiry',
    direction: 'inbound',
    defaultVariant: 'indiamart',
    variants: [
      {
        id: 'indiamart',
        brand: 'IndiaMart',
        direction: 'inbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/indiamart-product-discovery-enquiry.mp3',
            duration: 61.128,
            direction: 'inbound',
            prospect: 'Customer',
            purpose: 'Product discovery enquiry',
            completionCopy: 'The customer reviewed available ceiling panel variants and chose to call back after checking requirements.',
            transcript: [
              { start: 1.94, end: 7.94, speaker: 'AI Voice Agent', text: 'Hello, I am Charles from SMDI. What material are you looking for today?' },
              { start: 7.94, end: 10.94, speaker: 'Customer', text: 'I am looking for some ceiling panels.' },
              { start: 10.94, end: 17.50, speaker: 'AI Voice Agent', text: 'Okay, we have PVC ceiling panels. What type or size are you looking for?' },
              { start: 17.50, end: 21.50, speaker: 'Customer', text: 'Can you please share the available options?' },
              { start: 21.50, end: 28.81, speaker: 'AI Voice Agent', text: 'We have 8 mm PVC brown glue ceiling panels for 18 rupees per square feet.' },
              { start: 28.81, end: 34.81, speaker: 'AI Voice Agent', text: 'And 5 mm PVC wooden finish ceiling panels for 21 rupees per square feet.' },
              { start: 34.81, end: 41.28, speaker: 'AI Voice Agent', text: 'We also have PVC white ceiling panels for 25 rupees per square feet.' },
              { start: 41.28, end: 45.28, speaker: 'Customer', text: 'Okay, I am not sure what I need. Let me check and call you later.' },
              { start: 45.28, end: 51.61, speaker: 'AI Voice Agent', text: 'Is there anything else I can help you with today?' },
              { start: 51.61, end: 55.75, speaker: 'Customer', text: "That's it for now. Thank you." },
              { start: 55.75, end: 57.75, speaker: 'AI Voice Agent', text: 'Thank you for calling SMDI.' }
            ],
            outcome: {
              heading: 'Product Enquiry Captured',
              fields: [
                ['Brand', 'IndiaMart'],
                ['Requirement', 'PVC ceiling panels'],
                ['Options Shared', '8 mm brown glue, 5 mm wooden finish, white ceiling panels'],
                ['Status', 'Customer will review and call back']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Requirement', 'Status'],
              reply: 'Product options were shared. The enquiry is ready for follow-up.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'product-recommendation',
    title: 'Product Recommendation & Callback',
    direction: 'inbound',
    defaultVariant: 'indiamart',
    variants: [
      {
        id: 'indiamart',
        brand: 'IndiaMart',
        direction: 'inbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/indiamart-product-recommendation-callback.mp3',
            duration: 68.904,
            direction: 'inbound',
            prospect: 'Customer',
            purpose: 'Unavailable product recommendation and callback',
            completionCopy: 'The requested smart panel was unavailable, alternatives were suggested, and a callback was requested.',
            transcript: [
              { start: 1.39, end: 7.39, speaker: 'AI Voice Agent', text: 'Hello, I am Anshar from SMDI. What material are you looking for today?' },
              { start: 7.39, end: 12.39, speaker: 'Customer', text: "Oh yeah, I am looking for those smart panels with LED's built-in." },
              { start: 12.39, end: 25.47, speaker: 'AI Voice Agent', text: "I am sorry, but we do not have smart panels with built-in LED's. However, we do have a variety of PVC and WPC wall panels. Would you be interested in those?" },
              { start: 25.47, end: 28.47, speaker: 'Customer', text: 'Alright, can you please ask your team to call me?' },
              { start: 28.47, end: 38.55, speaker: 'AI Voice Agent', text: 'Certainly, I have a team member getting in touch with you. May I please have your location for the quotation?' },
              { start: 38.55, end: 41.55, speaker: 'Customer', text: 'I am from HSR Layout Bangalore.' },
              { start: 41.55, end: 52.02, speaker: 'AI Voice Agent', text: 'Thank you. So to confirm, you would like a call back from our team regarding smart panels and you are located in HSR Layout Bangalore. Is that correct?' },
              { start: 52.02, end: 55.66, speaker: 'Customer', text: "Yeah, that's correct." },
              { start: 55.66, end: 58.66, speaker: 'AI Voice Agent', text: 'Perfect. Is there anything else I can help you with today?' },
              { start: 58.66, end: 60.66, speaker: 'Customer', text: "No, that's it. Thank you so much." },
              { start: 60.66, end: 66.19, speaker: 'AI Voice Agent', text: 'Thank you for calling SMDI. Have a great day.' }
            ],
            outcome: {
              heading: '✅ Callback Requested',
              fields: [
                ['Brand', 'IndiaMart'],
                ['Requested Product', 'Smart panels with built-in LEDs'],
                ['Suggested Category', 'PVC and WPC wall panels'],
                ['Location', 'HSR Layout, Bangalore'],
                ['Status', 'Team callback requested']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Requested Product', 'Status'],
              reply: 'A callback request has been captured for the product enquiry.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'product-availability',
    title: 'Product Availability & Alternative',
    direction: 'inbound',
    defaultVariant: 'indiamart',
    variants: [
      {
        id: 'indiamart',
        brand: 'IndiaMart',
        direction: 'inbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/indiamart-product-availability-alternative.mp3',
            duration: 141.912,
            direction: 'inbound',
            prospect: 'Customer',
            purpose: 'Availability check and closest alternative',
            completionCopy: 'The requested PVC panel thickness was unavailable and a WPC alternative was discussed.',
            transcript: [
              { start: 1.07, end: 7.07, speaker: 'AI Voice Agent', text: 'Hello, I am Anshu from SMDI. What material are you looking for today?' },
              { start: 7.07, end: 10.07, speaker: 'Customer', text: 'Hi, I am looking for 10 mm PVC wall panels.' },
              { start: 10.07, end: 18.99, speaker: 'AI Voice Agent', text: "I see you are looking for PVC wall panels. Unfortunately, we don't have 10 mm thick PVC wall panels." },
              { start: 18.99, end: 24.99, speaker: 'AI Voice Agent', text: 'Would you be interested in 4 mm, 5 mm or 6 mm thick panels?' },
              { start: 24.99, end: 28.99, speaker: 'Customer', text: 'Oh, 6 mm will be the closest alternative, right?' },
              { start: 28.99, end: 35.94, speaker: 'AI Voice Agent', text: 'Yes, 6 mm would be the closest alternative we have for PVC wall panels.' },
              { start: 35.94, end: 40.94, speaker: 'AI Voice Agent', text: 'We have a few options in that thickness, including printed and polished panels.' },
              { start: 40.94, end: 46.64, speaker: 'Customer', text: 'Sorry, but I need only 10 mm wall panels.' },
              { start: 46.64, end: 52.64, speaker: 'AI Voice Agent', text: "I understand you need 10 mm wall panels. While we don't have PVC wall panels in that thickness," },
              { start: 52.64, end: 57.64, speaker: 'AI Voice Agent', text: 'we do have WPC wall panels that are 10 mm thick priced at 500 rupees per piece.' },
              { start: 57.64, end: 60.64, speaker: 'AI Voice Agent', text: 'Would you like to know more about them?' },
              { start: 60.64, end: 65.64, speaker: 'Customer', text: 'Yeah, I need to know what is the difference between PVC and WPC panels?' },
              { start: 65.64, end: 74.65, speaker: 'AI Voice Agent', text: 'PVC panels are made entirely of polyvinyl chloride, making them lightweight and water resistant.' },
              { start: 74.65, end: 81.65, speaker: 'AI Voice Agent', text: 'WPC panels, on the other hand, are a composite of wood and plastic, offering more durability and a wood-like finish.' },
              { start: 81.65, end: 83.65, speaker: 'AI Voice Agent', text: 'Both are good for walls.' },
              { start: 83.65, end: 86.99, speaker: 'Customer', text: "Okay, then I'll take that alternative." },
              { start: 86.99, end: 94.46, speaker: 'AI Voice Agent', text: "Great. You'd like the 10 mm WPC wall panels, correct?" },
              { start: 95.46, end: 98.46, speaker: 'Customer', text: 'I need the order of the PVC wall panels.' },
              { start: 98.46, end: 105.42, speaker: 'AI Voice Agent', text: "To confirm, you'd like the WPC wall panels 10 mm thick for 50 square feet." },
              { start: 105.42, end: 108.42, speaker: 'AI Voice Agent', text: 'Can you please provide your location?' },
              { start: 108.42, end: 111.42, speaker: 'Customer', text: 'My location is HSR Layout.' },
              { start: 111.42, end: 119.23, speaker: 'AI Voice Agent', text: "So, to summarize, you're interested in 10 mm WPC wall panels for 50 square feet," },
              { start: 119.23, end: 125.23, speaker: 'AI Voice Agent', text: 'and your location is HSR Layout. Is that all correct?' },
              { start: 125.23, end: 129.22, speaker: 'Customer', text: "Yeah, that's correct." },
              { start: 129.22, end: 132.22, speaker: 'AI Voice Agent', text: 'Is there anything else I can help you with today?' },
              { start: 132.22, end: 134.22, speaker: 'Customer', text: "No, that's all. Thank you so much." },
              { start: 134.22, end: 138.88, speaker: 'AI Voice Agent', text: 'Thank you for calling SMDI.' }
            ],
            outcome: {
              heading: 'Product Alternative Shared',
              fields: [
                ['Brand', 'IndiaMart'],
                ['Requested Product', '10 mm PVC wall panels'],
                ['Alternative', '10 mm WPC wall panels'],
                ['Quantity', '50 square feet'],
                ['Location', 'HSR Layout'],
                ['Status', 'Alternative accepted for enquiry']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Alternative', 'Quantity', 'Status'],
              reply: 'The alternative product enquiry has been captured.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'order-placement',
    title: 'Order Placement',
    direction: 'inbound',
    defaultVariant: 'indiamart',
    variants: [
      {
        id: 'indiamart',
        brand: 'IndiaMart',
        direction: 'inbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/indiamart-order-placement.mp3',
            duration: 76.032,
            direction: 'inbound',
            prospect: 'Customer',
            purpose: 'Material order placement',
            completionCopy: 'The TMT bar order details were captured and sent to the team for follow-up.',
            transcript: [
              { start: 1.14, end: 8.14, speaker: 'AI Voice Agent', text: 'So, I am Anshal from SMBI. How may I help you today? What material are you looking for?' },
              { start: 9.14, end: 13.14, speaker: 'Customer', text: 'I need the TMT bars. Do you have any TMT bars available?' },
              { start: 13.14, end: 21.74, speaker: 'AI Voice Agent', text: 'Yes, we do have TMT bars which are excellent for construction reinforcement. What sizes are you looking for?' },
              { start: 22.74, end: 24.74, speaker: 'Customer', text: 'I need 12 mm TMT bars.' },
              { start: 27.56, end: 32.56, speaker: 'AI Voice Agent', text: 'We have 12 mm TMT bars available. How much quantity do we need?' },
              { start: 33.56, end: 36.56, speaker: 'Customer', text: 'I need 500 kgs.' },
              { start: 36.56, end: 46.09, speaker: 'AI Voice Agent', text: 'Understood. You need 500 kgs of 12 mm TMT bars. Could you please share the delivery location?' },
              { start: 46.09, end: 49.09, speaker: 'Customer', text: 'Yes, it is in MG Road Bangalore.' },
              { start: 49.09, end: 57.50, speaker: 'AI Voice Agent', text: "Alright, so that's 500 kgs of 12 mm TMT bars for MG Road Bangalore. Is there anything else I can help you with today?" },
              { start: 58.50, end: 60.50, speaker: 'Customer', text: 'No, that will be all. Thank you.' },
              { start: 60.50, end: 67.26, speaker: 'AI Voice Agent', text: 'Thank you. These details have been sent to the team and they will get back to you shortly.' },
              { start: 68.26, end: 72.30, speaker: 'Customer', text: 'Okay, thank you.' },
              { start: 72.30, end: 74.30, speaker: 'AI Voice Agent', text: 'Thank you. Goodbye.' }
            ],
            outcome: {
              heading: '✅ Order Details Captured',
              fields: [
                ['Brand', 'IndiaMart'],
                ['Product', '12 mm TMT bars'],
                ['Quantity', '500 kgs'],
                ['Location', 'MG Road, Bangalore'],
                ['Status', 'Details sent to team']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Product', 'Quantity', 'Status'],
              reply: 'Order details have been sent to the team for follow-up.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'abandoned-cart',
    title: 'Abandoned Cart Recovery',
    direction: 'outbound',
    defaultVariant: 'pc-chandra',
    variants: [
      {
        id: 'pc-chandra',
        brand: 'PC Chandra',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/pc-chandra-cart-recovery.mp3',
            duration: 60.192,
            direction: 'outbound',
            prospect: 'Swaroop',
            purpose: 'Abandoned cart payment assistance',
            completionCopy: 'The payment issue was captured and the support team callback was requested.',
            transcript: [
              { start: 1.33, end: 4.33, speaker: 'AI Voice Agent', text: 'Hello, am I speaking with Swaroop?' },
              { start: 4.33, end: 8.06, speaker: 'Customer', text: 'Yeah, tell me.' },
              { start: 8.06, end: 10.06, speaker: 'AI Voice Agent', text: 'I am calling from PC Chandra Jewelers.' },
              { start: 10.06, end: 13.06, speaker: 'AI Voice Agent', text: 'We noticed that you were checking a product on our website and added it to your cart.' },
              { start: 13.06, end: 18.06, speaker: 'AI Voice Agent', text: 'May I know if you were facing any issues while completing the order? I would be happy to help you with that.' },
              { start: 18.06, end: 22.40, speaker: 'Customer', text: "Actually, I'm facing an issue with payment." },
              { start: 22.40, end: 27.61, speaker: 'AI Voice Agent', text: 'I am sorry for the inconvenience.' },
              { start: 27.61, end: 35.61, speaker: 'AI Voice Agent', text: 'Please try using a different payment method or refresh the page. If required, I can ask our team to reach out to you.' },
              { start: 35.61, end: 38.61, speaker: 'Customer', text: "Yeah, I'm still facing the same issue." },
              { start: 38.61, end: 43.94, speaker: 'AI Voice Agent', text: 'We have noted your request and our team will reach out to you soon.' },
              { start: 43.94, end: 52.94, speaker: 'AI Voice Agent', text: 'Thank you for your time. If you need any further details regarding the product, payment or delivery, please feel free to contact our customer care team anytime.' },
              { start: 52.94, end: 57.94, speaker: 'AI Voice Agent', text: 'Have a wonderful day. Thank you for your time. Have a great day. Goodbye.' }
            ],
            outcome: {
              heading: 'Cart Recovery Support Requested',
              fields: [
                ['Brand', 'PC Chandra'],
                ['Issue', 'Payment problem during checkout'],
                ['Customer', 'Swaroop'],
                ['Status', 'Support team callback requested']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Issue', 'Status'],
              reply: 'The payment support request has been noted for callback.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'purchase-follow-up',
    title: 'Purchase Follow-up',
    direction: 'outbound',
    defaultVariant: 'pc-chandra',
    variants: [
      {
        id: 'pc-chandra',
        brand: 'PC Chandra',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/pc-chandra-jewellers-purchase-followup.mp3',
            duration: 71.172,
            direction: 'outbound',
            prospect: 'Customer',
            purpose: 'Purchase satisfaction follow-up',
            completionCopy: 'The customer shared positive feedback and said they would consider buying again.',
            transcript: [
              { start: 1.36, end: 7.38, speaker: 'AI Voice Agent', text: 'Hi, I am Kiara from PC Chandra Jewelers. I hope you are having a wonderful day. Is this a good time to speak for a minute?' },
              { start: 8.36, end: 9.36, speaker: 'Customer', text: 'Yes.' },
              { start: 9.36, end: 18.13, speaker: 'AI Voice Agent', text: 'To start on a scale of 1 to 5, where 5 is the highest, how would you rate your overall satisfaction with your recent purchase?' },
              { start: 19.13, end: 20.93, speaker: 'Customer', text: 'I would give it a 4.' },
              { start: 20.93, end: 29.11, speaker: 'AI Voice Agent', text: 'That is fantastic to hear. We love making our customers happy. Since you enjoyed it, did the piece feel premium and comfortable to wear?' },
              { start: 30.19, end: 34.03, speaker: 'Customer', text: 'Yes, it was very good. I was very comfortable wearing it throughout my day.' },
              { start: 34.31, end: 41.54, speaker: 'AI Voice Agent', text: 'That is wonderful to hear. Is there anything else about the product or your shopping experience that we could improve for you?' },
              { start: 42.14, end: 44.58, speaker: 'Customer', text: 'No, everything is fine. All good.' },
              { start: 47.03, end: 53.27, speaker: 'AI Voice Agent', text: 'Finally, would you consider purchasing from PC Chandra Jewelers again? We truly look forward to seeing you at our store for your next purchase.' },
              { start: 54.03, end: 57.59, speaker: 'Customer', text: 'Yes, yes, I would actually think. I am actually thinking of buying it again.' },
              { start: 59.80, end: 67.72, speaker: 'AI Voice Agent', text: 'Thank you for your time and for choosing PC Chandra Jewelers. Thank you for your time. Have a great day. Goodbye.' }
            ],
            outcome: {
              heading: '✅ Purchase Follow-up Completed',
              fields: [
                ['Brand', 'PC Chandra'],
                ['Satisfaction Rating', '4 out of 5'],
                ['Feedback', 'Positive comfort and product experience'],
                ['Status', 'Likely repeat purchase']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Satisfaction Rating', 'Status'],
              reply: 'Customer feedback has been recorded.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'cost-objection',
    title: 'Cost Objection Handling',
    direction: 'outbound',
    defaultVariant: 'pc-chandra',
    variants: [
      {
        id: 'pc-chandra',
        brand: 'PC Chandra',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/pc-chandra-cost-concern.mp3',
            duration: 78.624,
            direction: 'outbound',
            prospect: 'Customer',
            purpose: 'Cost concern follow-up',
            completionCopy: 'The customer shared pricing concerns and requested follow-up on the price range.',
            transcript: [
              { start: 1.42, end: 7.46, speaker: 'AI Voice Agent', text: 'Hi, I am Kiara from PC Chandra Jewelers. I hope you are having a wonderful day. Is this a good time to speak for a minute?' },
              { start: 8.46, end: 17.64, speaker: 'AI Voice Agent', text: 'Yes. To start on a scale of 1 to 5, where 5 is the highest, how would you rate your overall satisfaction with your recent purchase?' },
              { start: 18.64, end: 27.02, speaker: 'Customer', text: 'I would give it a 3.' },
              { start: 27.06, end: 31.18, speaker: 'AI Voice Agent', text: 'I am truly sorry to hear that your experience was not perfect. Did the jewelry match what you saw on our website or was there an issue with the design?' },
              { start: 32.18, end: 35.18, speaker: 'Customer', text: "No, actually I found it expensive. So that's why." },
              { start: 36.18, end: 43.19, speaker: 'AI Voice Agent', text: 'I have recorded your concerns. I will make sure a member of our customer care team gets back to you shortly to address this.' },
              { start: 44.19, end: 48.19, speaker: 'AI Voice Agent', text: 'Is there anything else about the product or your shopping experience that we could improve for you?' },
              { start: 49.19, end: 51.19, speaker: 'Customer', text: 'Yeah, like the price range, please.' },
              { start: 52.19, end: 57.73, speaker: 'AI Voice Agent', text: 'I have noted that down and I will have someone from our team get back to you regarding this.' },
              { start: 57.73, end: 64.73, speaker: 'AI Voice Agent', text: 'Finally, would you consider purchasing from PC Chandra Jewelers again? We truly look forward to seeing you at our store for your next purchase.' },
              { start: 65.73, end: 66.73, speaker: 'Customer', text: 'I will think about it.' },
              { start: 67.73, end: 74.10, speaker: 'AI Voice Agent', text: 'Thank you for your time and for choosing PC Chandra Jewelers. Thank you for your time. Have a great day. Goodbye.' }
            ],
            outcome: {
              heading: 'Cost Concern Captured',
              fields: [
                ['Brand', 'PC Chandra'],
                ['Satisfaction Rating', '3 out of 5'],
                ['Concern', 'Price range felt expensive'],
                ['Status', 'Customer care follow-up requested']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Concern', 'Status'],
              reply: 'The pricing concern has been recorded for follow-up.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  },
  {
    id: 'customer-callback',
    title: 'Customer Callback',
    direction: 'outbound',
    defaultVariant: 'pc-chandra',
    variants: [
      {
        id: 'pc-chandra',
        brand: 'PC Chandra',
        direction: 'outbound',
        defaultLanguage: 'en',
        languages: {
          en: {
            label: 'English',
            audio: '../../assets/voice-demos/ecommerce/pc-chandra-busy-callback.mp3',
            duration: 45.756,
            direction: 'outbound',
            prospect: 'Customer',
            purpose: 'Busy customer callback scheduling',
            completionCopy: 'The customer was busy and requested a 3 PM callback.',
            transcript: [
              { start: 1.23, end: 7.35, speaker: 'AI Voice Agent', text: 'Hi, I am Kiara from PC Chandra Jewelers. I hope you are having a wonderful day. Is this a good time to speak for a minute?' },
              { start: 8.55, end: 11.72, speaker: 'Customer', text: 'Yes.' },
              { start: 11.72, end: 18.34, speaker: 'AI Voice Agent', text: 'To start on a scale of one to five where five is the highest, how would you rate your overall satisfaction with your recent purchase?' },
              { start: 19.98, end: 24.50, speaker: 'Customer', text: 'Can you call me back later?' },
              { start: 24.50, end: 29.16, speaker: 'AI Voice Agent', text: 'I understand perfectly. When would be a more convenient time for us to call you back for a quick two-minute feedback chat?' },
              { start: 30.16, end: 36.42, speaker: 'Customer', text: 'Call me at some 3 p.m. Or something.' },
              { start: 36.54, end: 41.26, speaker: 'AI Voice Agent', text: 'Thank you. I have noted that down. We will call you back at 3 p.m. Thank you for your time. Have a great day. Goodbye.' }
            ],
            outcome: {
              heading: '✅ Callback Scheduled',
              fields: [
                ['Brand', 'PC Chandra'],
                ['Reason', 'Customer busy'],
                ['Callback Time', '3:00 PM'],
                ['Status', 'Callback noted']
              ]
            },
            postCall: {
              confirmationFields: ['Brand', 'Callback Time', 'Status'],
              reply: 'Callback time has been noted.',
              replyDelay: 600
            }
          }
        }
      }
    ]
  }
];
