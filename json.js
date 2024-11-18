const json = {
  "title": "Research Survey",
  "description": "San Diego Mesa College Student Research Team",
  "logoPosition": "right",
  "completedHtml": "<h4>Thank you for your participation!</h4>\n<p>Please close the tab.</p>",
  "pages": [
    {
      "name": "consent",
      "title": "Research Information Page (Consent Form)",
      "elements": [
        {
          "type": "html",
          "name": "question10",
          "html": "<h4>Study Title</h4>\n            <p>AI Technology in Mental Healthcare</p>\n            <h4>Principal Investigator</h4>\n            <p>Jaye Van Kirk, M.A. (Phone: (619) 388-2290) (Email: jvankirk@sdccd.edu)</p>\n            <h4>Student Researcher</h4>\n            <p>Introduction to Research Methods students (phone: 619 388-2290, email: sdmesachatbotresearch@gmail.com) (A. Berry, E. Kofman, I. Xiao, and M. Yabe)</p>\n            <h4>Description of the Research</h4>\n            <p>\n                You are invited to participate in a research study about mental healthcare.<br>\n                You have been asked to participate because this study aims to understand the options of San Diego Mesa College students.<br>\n                The purpose of the research is to explore students' views on AI technology.<br>\n                This study will include San Diego Mesa College students who are 18 or older.<br>\n                This research will be conducted online on this website.\n            </p>\n            <h4>What will my participation involve?</h4>\n            <p>\n                If you decide to participate in this research, you will be asked to complete an anonymous online survey.<br>\n                Your participation will last approximately 5-10 minutes.\n            </p>\n            <h4>What are the benefits for me?</h4>\n            <b>There is a chance to win a $5 Starbucks Gift Card!</b>\n            <p>\n                By completing this survey, you will obtain the right to participate in an opportunity drawing. Four participants will be selected to receive a gift code. Drawing participation is optional, and asks you to provide your email address to let you know the results of the drawing.\n            </p>\n            <p>\n                In addition, participation in this research provides educational experience being a part of student research. You will have the opportunity to learn about related studies done by professional researchers on the last page of this survey website.\n            </p>\n            <h4>Are there any risks for me?</h4>\n            <p>Participation in this online survey involves minimal risk, with no expected harm beyond that of normal daily activities.</p>\n            <h4>How will my confidentiality be protected?</h4>\n            <p>\n                This study is confidential. Neither your name nor any other identifiable information will be published.<br>\n                This study follows the Ethical Principles of Psychologists and Code of Conduct (<a href=\"https://www.apa.org/ethics/code\">https://www.apa.org/ethics/code</a>).\n            </p>\n            <h4>Whom should I contact if I have questions?</h4>\n            <p>\n                You may ask any questions about the research at any time. If you have questions, concerns, or complaints, contact the Principal Investigator Jaye Van Kirk, M.A. at (619) 388-2290 or the Introduction to Research Methods student team at 619 388-2290 or sdmesachatbotresearch@gmail.com.\n            </p>\n            <p>\n                If you are not satisfied with the response of the research team, have more questions, or want to talk with someone about your rights as a research participant, you should contact the district IRB Office Natalia Córdoba-Velásquez Alarcón, M.B.A. (Director of Institutional Research and Planning) at (619) 388-6723.\n            </p>\n            <p>\n                If you decide not to participate or to withdraw from the study, you may do so without penalty.\n            </p>\n\n            <p><b>\n                Clicking the checkboxes indicates that you have read this consent form, had an opportunity to ask any questions about your participation in this research, and voluntarily consented to participate, and you are 18 or older.\n            </b></p>"
        },
        {
          "type": "checkbox",
          "name": "consent-participation",
          "title": "I have read this consent form, had an opportunity to ask questions about my participation in this research and voluntarily consent to participate in this survey",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "consent-age",
          "title": "I am 18 years old or older",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            }
          ]
        },
        {
          "type": "html",
          "name": "panel1",
          "html": "<p>Before continuing, please take a <b>screenshot</b> of this page.</p>"
        }
      ]
    },
    {
      "name": "demographic",
      "elements": [
        {
          "type": "text",
          "name": "demographic-age",
          "title": "What is your age in years?",
          "isRequired": true,
          "inputType": "number",
          "step": 1
        },
        {
          "type": "radiogroup",
          "name": "demographic-gender",
          "title": "How do you currently describe your gender?",
          "isRequired": true,
          "choices": [
            {
              "value": "male",
              "text": "Male"
            },
            {
              "value": "female",
              "text": "Female"
            },
            {
              "value": "non-binary",
              "text": "Non-binary"
            },
            {
              "value": "prefer-no-answer",
              "text": "I prefer not to answer"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "checkbox",
          "name": "demographic-ethnicity",
          "title": "What labels best describe your ethnicity? (mark ALL that apply)",
          "isRequired": true,
          "choices": [
            {
              "value": "african",
              "text": "African American/Black"
            },
            {
              "value": "native",
              "text": "Native American"
            },
            {
              "value": "asian",
              "text": "Asian/Filipino/Pacific Islander"
            },
            {
              "value": "latinx",
              "text": "Latinx"
            },
            {
              "value": "white",
              "text": "White"
            }
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "demographic-mesa",
          "title": "Are you a San Diego Mesa College student?",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "prefer-no-answer",
              "text": "I prefer not to answer"
            }
          ]
        }
      ]
    },
    {
      "name": "AI",
      "elements": [
        {
          "type": "html",
          "name": "question5",
          "html": "<p>Large language models (LLMs) are artificial intelligence (AI) <b>systems that can create text in everyday human language.</b> Some well-known services that use this technology include OpenAI's ChatGPT, Google Gemini, and Microsoft Copilot.</p>"
        },
        {
          "type": "html",
          "name": "question6",
          "html": "<p>In this survey, we call these services “<b>AI</b> (artificial intelligence)”</p>"
        },
        {
          "type": "html",
          "name": "question7",
          "html": "<p>Do you agree or disagree with each statement?</p>"
        },
        {
          "type": "radiogroup",
          "name": "AI-0",
          "title": "I know what AI (e.g., ChatGPT, Gemini, Copilot) is",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "unsure",
              "text": "Unsure"
            },
            {
              "value": "prefer-no-answer",
              "text": "I prefer not to answer"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "AI-1",
          "visibleIf": "(({AI-0} = 'yes') or ({AI-0} = 'unsure')) or ({AI-0} = 'prefer-no-answer')",
          "title": "I have used AI (e.g., ChatGPT, Gemini, Copilot) for any purpose",
          "isRequired": true,
          "choicesFromQuestion": "AI-0",
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "unsure",
              "text": "Unsure"
            },
            {
              "value": "prefer-no-answer",
              "text": "I prefer not to answer"
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "AI-2",
          "visibleIf": "(({AI-1} = 'yes') or ({AI-1} = 'unsure')) or ({AI-1} = 'prefer-no-answer')",
          "title": "For what purpose do you use AI? (Mark ALL that apply)",
          "choices": [
            {
              "value": "school",
              "text": "For schoolwork"
            },
            {
              "value": "work",
              "text": "For work-related tasks"
            },
            {
              "value": "personal",
              "text": "For personal use"
            }
          ],
          "showOtherItem": true
        }
      ]
    },
    {
      "name": "counseling",
      "elements": [
        {
          "type": "radiogroup",
          "name": "counseling-0",
          "title": "Have you seen a counselor for your mental health problems?",
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "prefer-no-answer",
              "text": "I prefer not to answer"
            }
          ]
        },
        {
          "type": "matrix",
          "name": "counseling-1",
          "title": "What factors are important when considering getting mental health counseling?",
          "isRequired": true,
          "validators": [
            {
              "type": "expression"
            }
          ],
          "columns": [
            {
              "value": "0",
              "text": "Not important"
            },
            {
              "value": "1",
              "text": "Not very important"
            },
            {
              "value": "2",
              "text": "Neutral"
            },
            {
              "value": "3",
              "text": "Important"
            },
            {
              "value": "4",
              "text": "Very important"
            }
          ],
          "rows": [
            {
              "value": "cost",
              "text": "Cost"
            },
            {
              "value": "access",
              "text": "Accessibility/Schedule availability"
            },
            {
              "value": "privacy",
              "text": "Consideration for privacy"
            }
          ],
          "rowsOrder": "random",
          "isAllRowRequired": true
        },
        {
          "type": "text",
          "name": "counseling-2",
          "title": "If any, what other factors are important to you?"
        }
      ]
    },
    {
      "name": "preference",
      "questionsOrder": "initial",
      "elements": [
        {
          "type": "html",
          "name": "question3",
          "html": "<p>Mental healthcare chatbots are digital tools designed to provide support for mental health issues through automated conversations. These chatbots use human language to engage users in dialogue to help them.</p>"
        },
        {
          "type": "html",
          "name": "question4",
          "html": "<p>The following section asks you questions to compare <b>human counselors</b> (non-robot) and <b>mental healthcare chatbots</b>.</p>"
        }
      ]
    },
    {
      "name": "page1",
      "title": "For each mental health topic, which of human counselors and mental healthcare chatbots would you prefer to discuss your problem with?",
      "questionsOrder": "random",
      "elements": [
        {
          "type": "radiogroup",
          "name": "pref-depression",
          "title": "Depression, anxiety, panic",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-OCD",
          "title": "Obsessive compulsive behavioral issues, eating problems",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-trauma",
          "title": "Traumas",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-personal",
          "title": "Personality-related challenges in everyday life",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-family",
          "title": "Family/relationship problems",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-gender",
          "title": "Gender and identity",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral",
              "text": "Unsure/Neutral"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "pref-addiction",
          "title": "Addition, alcohol, gambling problems",
          "isRequired": true,
          "choices": [
            {
              "value": "human",
              "text": "Human counselor"
            },
            {
              "value": "bot",
              "text": "Chatbot"
            },
            {
              "value": "either",
              "text": "Either is fine"
            },
            {
              "value": "neither",
              "text": "I prefer neither"
            },
            {
              "value": "neutral ",
              "text": "Unsure/Neutral"
            }
          ]
        }
      ]
    },
    {
      "name": "email",
      "title": "Starbucks Gift Card Opportunity Drawing Participation",
      "description": "If you wish to participate in the opportunity drawing, please enter your email. This information will be used only for the drawing and not tied to your survey response.",
      "elements": [
        {
          "type": "text",
          "name": "email-address",
          "title": "Email address",
          "inputType": "email"
        }
      ]
    },
    {
      "name": "debriefing",
      "title": "Debriefing Form",
      "description": "Understanding Students’ Preferences for Mental Health Support: A Comparative Study of Chatbots and Human Counselors  ",
      "elements": [
        {
          "type": "html",
          "name": "question1",
          "html": "<h4>Purpose</h4>\n<p>The purpose of this study is to understand student patients' preferences for mental healthcare therapies and the relationship between the preference and familiarity with AI technology. These are our hypotheses:</p>\n<ol>\n<li>There is a difference in preference between mental healthcare chatbots and human counselors.</li>\n<li>There is a relationship between the level of AI familiarity and mental healthcare chatbot preference.</li>\n</ol>\n<h4>Background</h4>\n<p>Since COVID-19, many college students have been seeking mental healthcare, but access in the U.S. is still limited (Charles et al., 2021; Sun et al., 2023). This situation calls for new treatment options. One emerging solution is mental healthcare chatbots, which are gaining attention from researchers. Some of these applications are in the early stages or only offer limited access via the App Store and Google Play. However, there are still challenges to its practical use, including more information about users' perceptions and opinions on chatbot services.</p>\n<h4>Confidentiality</h4>\n<p>The surveys are completely anonymous, and no identifiable information will be published.</p>\n<h4>Final Report</h4>\n<p>If you are interested in obtaining a copy of the final report of this study, contact the student researcher team at sdmesachatbotresearch@gmail.com or the principal investigator, Jaye Van Kirk, M.A., at jvankirk@sdccd.edu or (619) 388-2290.</p>\n<h4>Contact</h4>\n<p>If you have any questions regarding this study, its purpose or procedures, please feel free to contact us the student researcher team at sdmesachatbotresearch@gmail.com, the principal investigator, Jaye Van Kirk, M.A., at jvankirk@sdccd.edu or (619) 388-2290, or the district IRB Office Natalia C&oacute;rdoba-Vel&aacute;squez Alarc&oacute;n, M.B.A. (Director of Institutional Research and Planning) at (619) 388-6723. Thank you!</p>\n<h4>For Further Reading &amp; Reference</h4>\n<p><a href=\"https://doi.org/10.1016/j.psychres.2021.113706\" target=\"_blank\" rel=\"noopener\">Increased mood disorder symptoms, perceived stress, and alcohol use among college students during the COVID-19 pandemic</a></p>\n<p style=\"padding-left: 30px;\">Charles, N. E., Strong, S. J., Burns, L. C., Bullerjahn, M. R., &amp; Serafine, K. M. (2021). Increased&nbsp;mood disorder symptoms, perceived stress, and alcohol use among college students during the COVID-19 pandemic. Psychiatry Research, 296, 113706. https://doi.org/10.1016/j.psychres.2021.113706</p>\n<p><a href=\"https://doi.org/10.2196/mental.7785\" target=\"_blank\" rel=\"noopener\">Delivering cognitive behavior therapy to young adults with symptoms of depression and anxiety using a fully automated conversational agent (WoeBot): a randomized controlled trial</a></p>\n<p style=\"padding-left: 30px;\"><span dir=\"ltr\">Fitzpatrick, K. K., Darcy, A., &amp; Vierhile, M. (2017). Delivering cognitive behavior therapy to&nbsp;</span>young adults with symptoms of depression and anxiety using a fully automated conversational agent (WoeBot): a randomized controlled trial. JMIR Mental Health, 4(2), e19. https://doi.org/10.2196/mental.7785</p>\n<p><a href=\"https://doi.org/10.1016/j.genhosppsych.2023.05.012\" target=\"_blank\" rel=\"noopener\">Low availability, long wait times, and high geographic disparity of psychiatric outpatient care in the US</a></p>\n<p style=\"padding-left: 30px;\"><span dir=\"ltr\">Sun, C., Correll, C. U., Trestman, R. L., Lin, Y., Xie, H., Hankey, M. S., Uymatiao, R. P., Patel, R. T.,&nbsp;</span>Metsutnan, V. L., McDaid, E. C., Saha, A., Kuo, C., LeBhatt, S. H., Lipphard, L. E., &amp; Kablinger, A. S. (2023). Low availability, long wait times, and high geographic disparity of psychiatric outpatient care in the US. General Hospital Psychiatry, 84, 12&ndash;17. https://doi.org/10.1016/j.genhosppsych.2023.05.012</p>"
        }
      ]
    }
  ],
  "cookieName": "surveyCompleted",
  "showPrevButton": false,
  "showProgressBar": "auto",
  "checkErrorsMode": "onValueChanged"
}
