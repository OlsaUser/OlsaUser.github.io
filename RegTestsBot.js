{
  "bot": {
    "conversations": [
      {
        "type": "question",
        "left": -232,
        "top": 46,
        "w": 206.50563596306674,
        "h": 51.23463106316862,
        "name": "Question. Custom. Buttons",
        "id": "00ec0960-8698-11e8-adac-93bcd7481b23",
        "answers": {
          "uiType": "button",
          "responses": [
            {
              "id": "0f5b41f0-8698-11e8-adac-93bcd7481b23",
              "type": "answer",
              "parent": "00ec0960-8698-11e8-adac-93bcd7481b23",
              "display": "yes",
              "name": "",
              "left": -370,
              "top": 192,
              "h": 40,
              "w": 120,
              "next": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9"
            },
            {
              "id": "3224f040-8699-11e8-adac-93bcd7481b23",
              "type": "answer",
              "parent": "00ec0960-8698-11e8-adac-93bcd7481b23",
              "display": "no",
              "name": "",
              "left": -23,
              "top": 190,
              "h": 40,
              "w": 120,
              "next": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "value": "exit"
            },
            {
              "id": "7ef4a980-b720-11e8-bc4d-f9600f8aeb85",
              "type": "answer",
              "parent": "00ec0960-8698-11e8-adac-93bcd7481b23",
              "display": "wait",
              "name": "",
              "left": -191,
              "top": 188,
              "h": 40,
              "w": 120,
              "next": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9"
            }
          ],
          "isSatisfaction": true
        },
        "intention_id": null,
        "text": "Select options :",
        "next": null,
        "delay": null,
        "valueFormat": "CUSTOM",
        "when": "Question. Custom. Buttons",
        "variableName": ""
      },
      {
        "type": "message",
        "left": -197,
        "top": -20,
        "w": 120,
        "h": 40,
        "name": "Welcome",
        "id": "f2229200-9952-11e8-abdd-059a844d8b37",
        "buttons": [],
        "buttonUiType": "button",
        "text": "Welcome!",
        "when": "",
        "next": "00ec0960-8698-11e8-adac-93bcd7481b23",
        "delay": null,
        "d_top": null,
        "d_left": null,
        "intention_id": "8f01dfac-86d5-49ec-bb6d-f6f0ba2e24ab",
        "transactionEnd": false,
        "transactionTag": "Conv"
      },
      {
        "type": "question",
        "left": -238,
        "top": 852,
        "w": 217.1046803957409,
        "h": 52.09605916484708,
        "name": "Question. Any answer",
        "id": "e6bf5a70-9ad2-11e8-9cbd-9f2a52b892d9",
        "answers": {
          "responses": []
        },
        "text": "Question. Any answer",
        "intention_id": null,
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "ff2e4870-b047-11e8-a765-3d73680139bb",
        "when": "{QuestionCustomArray}",
        "delay": null,
        "variableName": "QuestionAnyAnswer"
      },
      {
        "type": "question",
        "left": -257,
        "top": 335,
        "w": 251.53787553064373,
        "h": 48.695759660388035,
        "name": "Question. Custom. Quick reply",
        "id": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
        "answers": {
          "responses": [
            {
              "id": "0ed558c0-9ad3-11e8-9cbd-9f2a52b892d9",
              "type": "answer",
              "parent": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "display": "man",
              "name": "",
              "left": -349,
              "top": 512,
              "h": 40,
              "w": 120,
              "next": "680eda50-ad21-11e8-a00d-9b2d287b8daa",
              "url": "https://converse-qa-iad.ces.pitneycloud.com/pb-circle-mark.png"
            },
            {
              "id": "112deec0-9ad3-11e8-9cbd-9f2a52b892d9",
              "type": "answer",
              "parent": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "display": "woman",
              "name": "",
              "left": -191,
              "top": 514,
              "h": 40,
              "w": 120,
              "next": "680eda50-ad21-11e8-a00d-9b2d287b8daa",
              "url": "https://converse-qa-iad.ces.pitneycloud.com/pb-circle-mark.png",
              "expect": "woman"
            },
            {
              "id": "4209fb60-b72a-11e8-b7be-8761ac9a3541",
              "type": "answer",
              "parent": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "display": "child",
              "name": "",
              "left": 81,
              "top": 401,
              "h": 40,
              "w": 120,
              "next": "680eda50-ad21-11e8-a00d-9b2d287b8daa"
            },
            {
              "id": "470e2960-b72a-11e8-b7be-8761ac9a3541",
              "type": "answer",
              "parent": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "display": "older",
              "name": "",
              "left": -431,
              "top": 395,
              "h": 40,
              "w": 120,
              "next": "680eda50-ad21-11e8-a00d-9b2d287b8daa"
            },
            {
              "id": "4c51aa50-b72a-11e8-b7be-8761ac9a3541",
              "type": "answer",
              "parent": "fbe3cc60-9ad2-11e8-9cbd-9f2a52b892d9",
              "display": "adult",
              "name": "",
              "left": -28,
              "top": 514,
              "h": 40,
              "w": 120,
              "next": "680eda50-ad21-11e8-a00d-9b2d287b8daa"
            }
          ],
          "uiType": "quick_replies",
          "trackAnswer": false
        },
        "text": "Question. Custom. Quick reply",
        "intention_id": null,
        "valueFormat": "CUSTOM",
        "transactionEnd": false,
        "transactionTag": "",
        "variableName": "QuestionCustomQuickReply",
        "when": "no,yes,wait"
      },
      {
        "type": "message",
        "left": -2869,
        "top": 1716,
        "w": 244.38091240527456,
        "h": 65,
        "name": "Message.Cards.No buttons",
        "id": "f0657cc0-9ad3-11e8-9cbd-9f2a52b892d9",
        "buttons": [],
        "buttonUiType": "card",
        "intention_id": "91cccdfd-0f59-4940-9872-dff50e21eb5f",
        "text": "We are ready to help you. What a problem do you have?",
        "next": "45854340-ad15-11e8-b696-99ee3821c00e",
        "delay": null,
        "d_top": null,
        "d_left": null,
        "transactionTag": "Help",
        "subtitle": "Subtitle",
        "image_url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg"
      },
      {
        "type": "message",
        "left": -1885,
        "top": 1700,
        "w": 216.87556396362902,
        "h": 62,
        "name": "Message. No buttons #2",
        "id": "dfe21b50-9b01-11e8-b6e7-8b479035b3fc",
        "buttons": [],
        "buttonUiType": "button",
        "when": "Message. No buttons :",
        "text": "Message. No buttons :",
        "transactionTag": "",
        "tagsVariableName": "",
        "action": null,
        "next": "57cbc390-ad0a-11e8-b032-01c2c7d45328",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "action",
        "left": -3189,
        "top": 1165,
        "w": 178.57543231201817,
        "h": 69.09078711700681,
        "name": "REST. GET: cards",
        "id": "11a8e640-ad0a-11e8-b032-01c2c7d45328",
        "action_type": "rest_data",
        "endpoint": "https://OlsaUser.github.io/card_buttons.json",
        "method": "GET",
        "variableName": "MList",
        "set_value": "dW5kZWZpbmVk",
        "next": null,
        "delay": null,
        "d_left": -1502.4245676879818,
        "d_top": 340.0907871170068
      },
      {
        "type": "card",
        "left": -2867,
        "top": 1148,
        "w": 131.87000062416473,
        "h": 64.46200162282821,
        "name": "Cards #2",
        "id": "57cbc390-ad0a-11e8-b032-01c2c7d45328",
        "items": [],
        "action": "11a8e640-ad0a-11e8-b032-01c2c7d45328",
        "listVariableName": "MList",
        "next": null,
        "delay": null,
        "d_left": -1262,
        "d_top": 323,
        "text": "Cards:"
      },
      {
        "type": "message",
        "left": -1893,
        "top": 1243.7698268666095,
        "w": 221.62830447776832,
        "h": 62.23017313339051,
        "name": "Message. Quick reply: array",
        "id": "2b18c810-ad0b-11e8-b032-01c2c7d45328",
        "buttons": [],
        "buttonUiType": "quick_replies",
        "when": "Quick reply, array",
        "text": "Array of quick replies buttons:",
        "tagsVariableName": "ArrayList",
        "action": "40ee88a0-ad0b-11e8-b032-01c2c7d45328",
        "next": "a61d2260-b803-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "action",
        "left": -2163,
        "top": 1267,
        "w": 182.3945289344672,
        "h": 65.42456768798189,
        "name": "Set Variable: buttons",
        "id": "40ee88a0-ad0b-11e8-b032-01c2c7d45328",
        "action_type": "set_variable",
        "set_value": "Y29udGV4dC5BcnJheUxpc3QgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgClsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAp7ICAgIAoidHlwZSIgOiAicG9zdGJhY2siLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKInRpdGxlIiA6ICJZRVMiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiJwYXlsb2FkIiA6ICJidXR0b24xIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCn0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKeyAgCiJ0eXBlIiA6ICJwb3N0YmFjayIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKInRpdGxlIiA6ICJOTyIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKInBheWxvYWQiIDogImJ1dHRvbjIiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAp7ICAgIAoidHlwZSIgOiAicG9zdGJhY2siLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoidGl0bGUiIDogIkVYSVQiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiJwYXlsb2FkIiA6ICJidXR0b24zIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIApd",
        "next": null,
        "delay": null
      },
      {
        "type": "question",
        "left": -595,
        "top": 2003,
        "w": 254.89259557109722,
        "h": 77.50488201949565,
        "name": "Question. Multiple random reply",
        "id": "5dd341b0-ad13-11e8-b696-99ee3821c00e",
        "answers": {
          "responses": []
        },
        "when": "MultiReply",
        "text": "Question. Multiple random reply",
        "valueFormat": "ANY",
        "matchAny": true,
        "textVariations": [
          "1. any answer",
          "2. any answer",
          "3. any answer"
        ],
        "requireslink": false,
        "next": "9d1ba6f0-b290-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "message",
        "left": -3547,
        "top": 1551,
        "w": 281.7528637764294,
        "h": 65.85299810666459,
        "name": "Message. Multiple random reply",
        "id": "4d402240-ad14-11e8-b696-99ee3821c00e",
        "buttons": [],
        "buttonUiType": "button",
        "when": "1, 2, 3, message1, message2, message3, a1, a2, a3, Postback",
        "text": "Message. Multiple random reply",
        "textVariations": [
          "1 - random message",
          "2 - random message",
          "3 - random message",
          "4 - random message",
          "5 - random message",
          "6 - random message",
          "7 - random message",
          "8 - random message",
          "9 - random message",
          "10 - random message",
          "11 - random message",
          "12 - random message",
          "13 - random message",
          "14 - random message",
          "15 - random message"
        ],
        "requireslink": false,
        "next": "2f9e5e70-b807-11e8-a0d0-c70c7d91a32f",
        "delay": 1,
        "d_top": 1624,
        "d_left": -3417
      },
      {
        "type": "action",
        "left": -3866,
        "top": 1347,
        "w": 183.27303220748308,
        "h": 64.06074836349208,
        "name": "Set Variable: cards",
        "id": "38c2a940-ad15-11e8-b696-99ee3821c00e",
        "action_type": "set_variable",
        "set_value": "Y29udGV4dC5teWNhcmQgPSAKWwogICAgewogICAgICAgICAgICAgICAgInRpdGxlIjogIlRpdGxlIENhcmQgMSIsCiAgICAgICAgICAgICAgICAic3VidGl0bGUiOiAiVGhpcyBpcyBjYXJkIDEiLAogICAgICAgICAgICAgICAgIml0ZW1fdXJsIjogImh0dHA6Ly96aXB6YXBtZS5jb20vc3BlY2lhbC1vZmZlcnMiLAogICAgICAgICAgICAgICAgImltYWdlX3VybCI6ICJodHRwczovL2ZyZWUtaW1hZ2VzLmNvbS9zbS8zNzg2L2ljZV9jcmVhbV9mcnVpdHNfZGVzc2VydC5qcGciLAogICAgICAgICAiYnV0dG9ucyI6IFsgCiAgICAgICAgICAgIHsidHlwZSI6InBvc3RiYWNrIiwgInRpdGxlIjoiWWVzIiwgInBheWxvYWQiOiJ5ZXMxIn0sCiAgICAgICAgICAgIHsidHlwZSI6InBvc3RiYWNrIiwgInRpdGxlIjoiTm8iLCAicGF5bG9hZCI6Im5vMSJ9LAogICAgICAgICAgICB7InR5cGUiOiJwb3N0YmFjayIsICJ0aXRsZSI6Ik1heWJlIiwgInBheWxvYWQiOiJtYXliZTEifQogICAgICAgIF0KICAgIH0sCiAgICB7CiAgICAgICAgICAgICAgICAidGl0bGUiOiAiVGl0bGUgQ2FyZCAyIiwKICAgICAgICAgICAgICAgICJzdWJ0aXRsZSI6ICJUaGlzIGlzIGNhcmQgMiIsCiAgICAgICAgICAgICAgICAiaXRlbV91cmwiOiAiaHR0cDovL3ppcHphcG1lLmNvbS9zcGVjaWFsLW9mZmVycyIsCiAgICAgICAgICAgICAgICAiaW1hZ2VfdXJsIjogImh0dHBzOi8vZnJlZS1pbWFnZXMuY29tL3NtLzY0NzIvaWNlX2NyZWFtX2ljZV9jcmVhbV8wLmpwZyIsCiAgICAgICAgImJ1dHRvbnMiOiBbIAogICAgICAgICAgICB7InR5cGUiOiJwb3N0YmFjayIsICJ0aXRsZSI6IlllcyIsICJwYXlsb2FkIjoieWVzMSJ9LAogICAgICAgICAgICB7InR5cGUiOiJwb3N0YmFjayIsICJ0aXRsZSI6Ik5vIiwgInBheWxvYWQiOiJubzEifSwKICAgICAgICAgICAgeyJ0eXBlIjoicG9zdGJhY2siLCAidGl0bGUiOiJNYXliZSIsICJwYXlsb2FkIjoibWF5YmUxIn0KICAgICAgICBdCiAgICB9Cl0=",
        "next": null
      },
      {
        "type": "card",
        "left": -3574,
        "top": 1298,
        "w": 149.81153383117135,
        "h": 64.6492270649369,
        "name": "Cards #1",
        "id": "45854340-ad15-11e8-b696-99ee3821c00e",
        "items": [],
        "action": "38c2a940-ad15-11e8-b696-99ee3821c00e",
        "listVariableName": "mycard",
        "when": "Help me",
        "text": "Cards. Please, look at our offers:",
        "next": null,
        "delay": null
      },
      {
        "type": "message",
        "left": -3268,
        "top": 2130,
        "w": 194.90743645560633,
        "h": 43.833071899545075,
        "name": "Message. No buttons #1",
        "id": "92afff10-ad1b-11e8-8a10-6501631c5230",
        "buttons": [],
        "buttonUiType": "button",
        "when": "linked bot",
        "text": "We show you a linked bot ^",
        "action": "9c895bd0-ad1b-11e8-8a10-6501631c5230",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "action",
        "left": -2989,
        "top": 2169,
        "w": 189.54628177219683,
        "h": 44.28679012734801,
        "name": "Action. LinkedBot",
        "id": "9c895bd0-ad1b-11e8-8a10-6501631c5230",
        "action_type": "link_bot",
        "linked_bot": "f379258b-55a8-4fe9-a54b-89ccac28b9f6",
        "linked_bot_interaction": "269c0d50-bcd4-11e8-bf08-c1b3c0012e7e",
        "set_value": "dW5kZWZpbmVk"
      },
      {
        "type": "action",
        "left": -1638,
        "top": 1029,
        "w": 160.66118216936226,
        "h": 50.983082317973754,
        "name": "ConditionsAction",
        "id": "e9d34720-ad1b-11e8-bdec-2912683ab58d",
        "action_type": "conditional",
        "conditions": [
          {
            "id": "46f326f0-ad1c-11e8-bdec-2912683ab58d",
            "varname": "{GenderType}",
            "operator": "=",
            "value": "men",
            "next": "e2ffbae0-ad1c-11e8-aad3-e35bb9ad2da4",
            "left": -1828,
            "top": 1011,
            "w": 120,
            "h": 40
          },
          {
            "id": "b6e003a0-b28c-11e8-a28a-09ee745e099a",
            "varname": "{GenderType}",
            "operator": "=",
            "value": "women",
            "next": "e2ffbae0-ad1c-11e8-aad3-e35bb9ad2da4",
            "left": -1829,
            "top": 1059,
            "w": 120,
            "h": 40
          }
        ],
        "set_value": "dW5kZWZpbmVk",
        "intention_id": null,
        "when": ""
      },
      {
        "type": "question",
        "left": -1119,
        "top": 1038,
        "w": 215.7379370818129,
        "h": 37.825331157954906,
        "name": "Question. VariableName",
        "id": "71798900-ad1c-11e8-aad3-e35bb9ad2da4",
        "answers": {
          "responses": [
            {
              "id": "68e464b0-ad1f-11e8-a00d-9b2d287b8daa",
              "type": "answer",
              "parent": "71798900-ad1c-11e8-aad3-e35bb9ad2da4",
              "display": "men",
              "name": "",
              "left": -1346,
              "top": 1009,
              "h": 40,
              "w": 120,
              "value": "men",
              "next": "e9d34720-ad1b-11e8-bdec-2912683ab58d",
              "expect": "men,man,boy,he"
            },
            {
              "id": "6ed51590-ad1f-11e8-a00d-9b2d287b8daa",
              "type": "answer",
              "parent": "71798900-ad1c-11e8-aad3-e35bb9ad2da4",
              "display": "women",
              "name": "",
              "left": -1341,
              "top": 1054,
              "h": 40,
              "w": 120,
              "value": "women",
              "next": "e9d34720-ad1b-11e8-bdec-2912683ab58d",
              "expect": "women,woman,girl,she"
            }
          ],
          "uiType": "button"
        },
        "when": "gender",
        "text": "Question. VariableName. Please, select gender:",
        "valueFormat": "CUSTOM",
        "variableName": "GenderType",
        "action": null,
        "intention_id": null
      },
      {
        "type": "message",
        "left": -2031,
        "top": 1034,
        "w": 120,
        "h": 40,
        "name": "Gender",
        "id": "e2ffbae0-ad1c-11e8-aad3-e35bb9ad2da4",
        "buttons": [],
        "buttonUiType": "button",
        "text": "You selected a gender : \"{(GenderType)}\"",
        "next": "2b18c810-ad0b-11e8-b032-01c2c7d45328",
        "when": "{GenderType}"
      },
      {
        "type": "question",
        "left": -284,
        "top": 722,
        "w": 302.1056911619908,
        "h": 53.20296166121534,
        "name": "Question. Custom. Quick reply: array",
        "id": "680eda50-ad21-11e8-a00d-9b2d287b8daa",
        "answers": {
          "responses": [],
          "uiType": "quick_replies",
          "tagsVariableName": "answers"
        },
        "when": "{QuestionCustomQuickReply}",
        "text": "Question. Custom. Quick reply (array)",
        "valueFormat": "CUSTOM",
        "action": "aa45b060-ad21-11e8-a00d-9b2d287b8daa",
        "next": "e6bf5a70-9ad2-11e8-9cbd-9f2a52b892d9",
        "delay": null,
        "variableName": "QuestionCustomArray"
      },
      {
        "type": "action",
        "left": 146,
        "top": 715,
        "w": 184.0307096099773,
        "h": 66.9092128829932,
        "name": "Set Variable: quick Reply",
        "id": "aa45b060-ad21-11e8-a00d-9b2d287b8daa",
        "action_type": "set_variable",
        "set_value": "Y29udGV4dC5hbnN3ZXJzID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIApbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKewogICJjb250ZW50X3R5cGUiOiJ0ZXh0IiwKICAidGl0bGUiOiJyZXF1aXJlZCAxIiwKICAiaW1hZ2VfdXJsIjoiaHR0cHM6Ly9jb252ZXJzZS1xYS1pYWQuY2VzLnBpdG5leWNsb3VkLmNvbS9wYi1jaXJjbGUtbWFyay5wbmciLCAKICAicGF5bG9hZCI6Im1lc3NhZ2UxIgp9LAp7CiAgImNvbnRlbnRfdHlwZSI6InRleHQiLAogICJ0aXRsZSI6InJlcXVpcmVkIDIiLAogICJpbWFnZV91cmwiOiJodHRwczovL2NvbnZlcnNlLXFhLWlhZC5jZXMucGl0bmV5Y2xvdWQuY29tL3BiLWNpcmNsZS1tYXJrLnBuZyIsIAogICJwYXlsb2FkIjoibWVzc2FnZTIiCn0sCnsKICAiY29udGVudF90eXBlIjoidGV4dCIsCiAgInRpdGxlIjoicmVxdWlyZWQgMyIsCiAgImltYWdlX3VybCI6Imh0dHBzOi8vY29udmVyc2UtcWEtaWFkLmNlcy5waXRuZXljbG91ZC5jb20vcGItY2lyY2xlLW1hcmsucG5nIiwgCiAgInBheWxvYWQiOiJtZXNzYWdlMyIKfQpd",
        "next": null,
        "delay": null
      },
      {
        "type": "question",
        "left": -254,
        "top": 964,
        "w": 286.56150000291115,
        "h": 34.54470885958028,
        "name": "Question. Regular expression #1. Email",
        "id": "ff2e4870-b047-11e8-a765-3d73680139bb",
        "answers": {
          "responses": []
        },
        "text": "Regular expression #1. Email",
        "when": "{QuestionAnyAnswer}",
        "valueFormat": "REGEXP",
        "valMessage": "Invalid email. Try again",
        "valRegExp": "(\\W|^)[\\w.\\-]{0,25}@(yahoo|hotmail|gmail)\\.com(\\W|$)",
        "next": "1a85a100-b290-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "message",
        "left": -4290,
        "top": 342,
        "w": 160.21199952495544,
        "h": 62.527069524395756,
        "name": "Excellent! Great!",
        "id": "251817f0-b048-11e8-a765-3d73680139bb",
        "buttons": [
          {
            "type": "postback",
            "title": "1",
            "id": "57c6c3a0-b272-11e8-ac0c-e92d5a4bb8e3",
            "payload": "1",
            "url": "https://converse.ces.pitneycloud.com/pb-circle-mark.png"
          },
          {
            "type": "postback",
            "title": "2",
            "id": "5eddf320-b272-11e8-ac0c-e92d5a4bb8e3",
            "payload": "2",
            "url": "https://converse.ces.pitneycloud.com/pb-circle-mark.png"
          }
        ],
        "buttonUiType": "quick_replies",
        "text": "Excellent! Great!"
      },
      {
        "type": "message",
        "left": -1890,
        "top": 1522,
        "w": 219.7814849848453,
        "h": 61.843703003030896,
        "name": "Message.Buttons.URL http",
        "id": "65a3a110-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "web_url",
            "title": "URL http",
            "id": "6811e1f0-b28f-11e8-85b6-a7743994445e",
            "url": "http://seleniumparadise.blogspot.com"
          }
        ],
        "buttonUiType": "button",
        "when": "http",
        "text": "Message.Buttons.URL http",
        "next": "edd7ddc0-b803-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -1892,
        "top": 1612,
        "w": 219.5629699696908,
        "h": 66,
        "name": "Message.Buttons.URL https",
        "id": "7dcd15a0-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "web_url",
            "title": "URL https",
            "id": "872a3d80-b28f-11e8-85b6-a7743994445e",
            "url": "https://www.youtube.com/watch?v=0OSx0oQZzz4"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons.URL https",
        "when": "https",
        "next": "fa49e6c0-b803-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -1890,
        "top": 1426,
        "w": 217.7814849848453,
        "h": 60.843703003030896,
        "name": "Message.Buttons.URL www",
        "id": "8f7f6b40-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "web_url",
            "title": "URL www",
            "id": "9770a710-b28f-11e8-85b6-a7743994445e",
            "url": "https://www.wikipedia.org/"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons.URL www",
        "when": "www",
        "next": "dfea7f60-b803-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -2878,
        "top": 1319,
        "w": 251.57543283347673,
        "h": 54.628304477768324,
        "name": "Message.Buttons.Account Link http",
        "id": "acc529b0-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "account_link",
            "title": "Link http",
            "id": "b50bff90-b28f-11e8-85b6-a7743994445e",
            "instance": "log in",
            "url": "http://seleniumparadise.blogspot.com"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons.Account Link http",
        "when": "Link http, Yes Learn More, Remind Me Later, No Thanks",
        "next": "59d54850-b804-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -2877,
        "top": 1396,
        "w": 249.57543283347673,
        "h": 55.25660895553642,
        "name": "Message.Buttons.Account Link https",
        "id": "d5dbcf20-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "account_link",
            "title": "Link https",
            "id": "e1200680-b28f-11e8-85b6-a7743994445e",
            "url": "https://www.messenger.com",
            "instance": "login"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons.Account Link https",
        "when": "Link https",
        "next": "64c34960-b804-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -2877,
        "top": 1472,
        "w": 252.3188238779403,
        "h": 52.14152238884117,
        "name": "Message.Buttons.Account Link www",
        "id": "e86264b0-b28f-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "account_link",
            "title": "Link www",
            "id": "f25f7610-b28f-11e8-85b6-a7743994445e",
            "url": "https://www.messenger.com",
            "instance": "login"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Link www",
        "when": "Link www",
        "next": "6f0b1f60-b804-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "question",
        "left": -285,
        "top": 1071,
        "w": 337.9513783416194,
        "h": 43.03518892683974,
        "name": "Question. Regular expression #2. street address",
        "id": "1a85a100-b290-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question. Regular expression #2. street address",
        "valueFormat": "REGEXP",
        "valMessage": "For example, 123 West Main St",
        "valRegExp": "\\d{1,6}\\040([A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,})$|\\d{1,6}\\040([A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,})$|^\\d{1,6}\\040([A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,}\\040[A-Z]{1}[a-z]{1,})$",
        "next": "4d88dd10-b290-11e8-85b6-a7743994445e",
        "when": "street address",
        "variableName": "address",
        "delay": null
      },
      {
        "type": "question",
        "left": -269,
        "top": 1223,
        "w": 314.9513783416194,
        "h": 32.929622146320526,
        "name": "Question. Regular expression #3. URL",
        "id": "4d88dd10-b290-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question. Regular expression #3. URL",
        "when": "button1, button2, button3",
        "valueFormat": "REGEXP",
        "valMessage": "For example: http://regex101.com/Documents/pageBot.html",
        "valRegExp": "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-])",
        "next": "34a889b0-b292-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "message",
        "left": -773,
        "top": 793,
        "w": 351.65741747516586,
        "h": 65.27274841689473,
        "name": "Message.Buttons.Phone format #1: local",
        "id": "9d1ba6f0-b290-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "phone_number",
            "title": "local: 54-3010",
            "id": "a734a4c0-b290-11e8-85b6-a7743994445e",
            "payload": "54-3010"
          }
        ],
        "buttonUiType": "button",
        "text": "Message. Phone format #1",
        "intention_id": "ae47737d-b9df-4e69-99d8-0ba4bfcb589a",
        "next": "dd3a7270-b290-11e8-85b6-a7743994445e",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -1216,
        "top": 793,
        "w": 363.5454968337894,
        "h": 62.43357619241294,
        "name": "Message.Buttons.Phone format #2. International",
        "id": "dd3a7270-b290-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "phone_number",
            "title": "International: +1-541-754-3010",
            "id": "e29795e0-b290-11e8-85b6-a7743994445e",
            "payload": "+1-541-754-3010"
          }
        ],
        "buttonUiType": "button",
        "text": "Message. Phone format #2",
        "intention_id": "ae47737d-b9df-4e69-99d8-0ba4bfcb589a",
        "next": "f7be78d0-b290-11e8-85b6-a7743994445e",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -1629,
        "top": 790,
        "w": 374.7622849299959,
        "h": 66.05596032068831,
        "name": "Message.Buttons.Phone format #3. Dialed in the US",
        "id": "f7be78d0-b290-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "phone_number",
            "title": "the US: 1-541-754-3010",
            "id": "fc560250-b290-11e8-85b6-a7743994445e",
            "payload": "1-541-754-3010"
          }
        ],
        "buttonUiType": "button",
        "text": "Message. Phone format #3",
        "intention_id": "ae47737d-b9df-4e69-99d8-0ba4bfcb589a",
        "next": "71798900-ad1c-11e8-aad3-e35bb9ad2da4",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -267,
        "top": 2015,
        "w": 392.20484164014283,
        "h": 66.40259795324732,
        "name": "Message.Buttons.Phone format #4. Dialed from Germany",
        "id": "2731d760-b291-11e8-85b6-a7743994445e",
        "buttons": [
          {
            "type": "phone_number",
            "title": "Dialed from Germany : 001-541-754-3010",
            "id": "297ed4a0-b291-11e8-85b6-a7743994445e",
            "payload": "001-541-754-3010"
          }
        ],
        "buttonUiType": "button",
        "text": "Message. Phone format #4",
        "intention_id": "ae47737d-b9df-4e69-99d8-0ba4bfcb589a",
        "next": "5dd341b0-ad13-11e8-b696-99ee3821c00e",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "question",
        "left": -260,
        "top": 1917,
        "w": 364.17857569137254,
        "h": 33.871987772050545,
        "name": "Question.Predefined answer.Month",
        "id": "7c67ce60-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Month",
        "valueFormat": "PREDEFINED",
        "matchType": "validMonth",
        "next": "2731d760-b291-11e8-85b6-a7743994445e",
        "when": "month",
        "delay": null
      },
      {
        "type": "question",
        "left": -264,
        "top": 1832,
        "w": 371.4128701399079,
        "h": 32.42512888234347,
        "name": "Question.Predefined answer.Phone",
        "id": "92e95f50-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Phone",
        "valueFormat": "PREDEFINED",
        "matchType": "validPhoneNumber",
        "next": "7c67ce60-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -276,
        "top": 1752,
        "w": 365.93717779414123,
        "h": 30.9359938860253,
        "name": "Question.Predefined answer.Email",
        "id": "9f408d50-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Email",
        "valueFormat": "PREDEFINED",
        "matchType": "validEmail",
        "next": "92e95f50-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -275,
        "top": 1686,
        "w": 367.07229347078646,
        "h": 28.807981658075846,
        "name": "Question.Predefined answer.Number",
        "id": "a876f350-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Number",
        "valueFormat": "PREDEFINED",
        "matchType": "validNumber",
        "next": "9f408d50-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -279,
        "top": 1601,
        "w": 366.11682669822903,
        "h": 37.791876238506944,
        "name": "Question.Predefined answer.Year",
        "id": "b1afca50-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Year",
        "valueFormat": "PREDEFINED",
        "matchType": "validYear",
        "next": "a876f350-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -274,
        "top": 1525,
        "w": 364.20812376149297,
        "h": 40.93062541283564,
        "name": "Question.Predefined answer.Post code",
        "id": "bbfa1150-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "text": "Question.Predefined answer.Post code",
        "valueFormat": "PREDEFINED",
        "matchType": "validZipCode",
        "next": "b1afca50-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -277,
        "top": 1447,
        "w": 359.9405673358342,
        "h": 39.52162373703953,
        "name": "Question.Predefined answer. Year range",
        "id": "f5cd13a0-b291-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "valueFormat": "PREDEFINED",
        "matchType": "validYearOrRange",
        "text": "Question.Predefined answer. Year range",
        "next": "bbfa1150-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -282,
        "top": 1367,
        "w": 359.3515487903571,
        "h": 41.47837626296047,
        "name": "Question.Predefined answer. Month range",
        "id": "190dbc20-b292-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "valueFormat": "PREDEFINED",
        "matchType": "validMonthOrRange",
        "text": "Question.Predefined answer. Month range",
        "next": "f5cd13a0-b291-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -287,
        "top": 1293,
        "w": 358.0084685577201,
        "h": 38.1975535277698,
        "name": "Question.Predefined answer.Date",
        "id": "34a889b0-b292-11e8-85b6-a7743994445e",
        "answers": {
          "responses": []
        },
        "valueFormat": "PREDEFINED",
        "matchType": "validDate",
        "text": "Question.Predefined answer.Date",
        "next": "190dbc20-b292-11e8-85b6-a7743994445e",
        "delay": null
      },
      {
        "type": "question",
        "left": -3721,
        "top": -239,
        "w": 120,
        "h": 40,
        "name": "6.Any answer",
        "id": "8dea8840-b5a1-11e8-8e75-b31e327a5db9",
        "answers": {
          "responses": []
        },
        "when": "",
        "text": "Any question",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": null,
        "variableName": "test",
        "delay": null,
        "intention_id": null
      },
      {
        "type": "message",
        "left": -3546,
        "top": -318,
        "w": 120,
        "h": 40,
        "name": "2",
        "id": "95b99610-b5a1-11e8-8e75-b31e327a5db9",
        "buttons": [
          {
            "type": "web_url",
            "title": "url",
            "id": "09da3f90-cbb4-11e8-bac5-8107fbdc6902",
            "url": "https://www.youtube.com/watch?v=0OSx0oQZzz4"
          }
        ],
        "buttonUiType": "button",
        "when": "test 1",
        "text": "Next message",
        "action": null,
        "tagsVariableName": "tget",
        "intention_id": null,
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "action",
        "left": -3544,
        "top": -269,
        "w": 120,
        "h": 40,
        "name": "3",
        "id": "9a49cc90-b5a1-11e8-8e75-b31e327a5db9",
        "action_type": "link_bot",
        "when": "",
        "linked_bot": "eb407a81-c00e-4162-8223-8f67dbe86bef",
        "linked_bot_interaction": "ebd0e200-58ff-11e8-a717-adf672c2ce83",
        "set_value": "dW5kZWZpbmVk",
        "conditions": [],
        "intention_id": null
      },
      {
        "type": "question",
        "left": -3544,
        "top": -218,
        "w": 120,
        "h": 40,
        "name": "4",
        "id": "b17e32c0-b5a1-11e8-8e75-b31e327a5db9",
        "answers": {
          "responses": []
        },
        "text": "Next question",
        "valueFormat": "ANY",
        "matchAny": true,
        "when": "",
        "intention_id": null,
        "next": null,
        "delay": null
      },
      {
        "type": "card",
        "left": -3542,
        "top": -165,
        "w": 120,
        "h": 40,
        "name": "Card 5.0",
        "id": "be2ad3c0-b5a1-11e8-8e75-b31e327a5db9",
        "items": [],
        "text": "Cards with phone number:",
        "action": "cc7f5860-b5a1-11e8-8e75-b31e327a5db9",
        "listVariableName": "abc",
        "when": "",
        "intention_id": null
      },
      {
        "type": "action",
        "left": -3388,
        "top": -164,
        "w": 259.256759397495,
        "h": 36.48573558902805,
        "name": "Action REST. Cards. Phone number",
        "id": "cc7f5860-b5a1-11e8-8e75-b31e327a5db9",
        "action_type": "set_variable",
        "endpoint": "https://OlsaUser.github.io/card_buttons_PhoneNumber.json",
        "variableName": "test",
        "method": "GET",
        "set_value": "Y29udGV4dC5hYmMgPQpbCiAgICB7CiAgICAgICAgInRpdGxlIjogIllvdSBhcmUgZWxpZ2libGUgZm9yIGFuIHVwZ3JhZGUgdG8gdGhlIGlQaG9uZSA3LiIsCiAgICAgICAgIml0ZW1fdXJsIjogImh0dHA6Ly96aXB6YXBtZS5jb20vc3BlY2lhbC1vZmZlcnMiLAogICAgICAgICJpbWFnZV91cmwiOiAiaHR0cDovL3ppcHphcG1lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kZW1vLXByb21vLWlwaG9uZS03MDB4MzAwLmpwZyIsCiAgICAgICAgInN1YnRpdGxlIjogIldvdWxkIHlvdSBsaWtlIHRvIGhlYXIgbW9yZT8iLAogICAgICAgICJidXR0b25zIjogWwogICAgICAgICAgICAiWWVzIExlYXJuIE1vcmUiLAogICAgICAgICAgICAiUmVtaW5kIE1lIExhdGVyIiwKICAgICAgICAgICAgIk5vIFRoYW5rcyIKICAgICAgICBdCiAgICB9LAp7CiAgICAgICAgInRpdGxlIjogIllvdSBhcmUgZWxpZ2libGUgZm9yIGFuIHVwZ3JhZGUgdG8gdGhlIGlQaG9uZSA3LiIsCiAgICAgICAgIml0ZW1fdXJsIjogImh0dHA6Ly96aXB6YXBtZS5jb20vc3BlY2lhbC1vZmZlcnMiLAogICAgICAgICJpbWFnZV91cmwiOiAiaHR0cDovL3ppcHphcG1lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kZW1vLXByb21vLWlwaG9uZS03MDB4MzAwLmpwZyIsCiAgICAgICAgInN1YnRpdGxlIjogIldvdWxkIHlvdSBsaWtlIHRvIGhlYXIgbW9yZT8iLAogICAgICAgICJidXR0b25zIjogWwogICAgICAgICAgICAiWWVzIExlYXJuIE1vcmUiLAogICAgICAgICAgICAiUmVtaW5kIE1lIExhdGVyIiwKICAgICAgICAgICAgIk5vIFRoYW5rcyIKICAgICAgICBdCiAgICB9LAogewogICAgICAgICJ0aXRsZSI6ICJZb3UgYXJlIGFsc28gZWxpZ2libGUgZm9yIGEgYmV0dGVyIGRhdGEgcGxhbiIsCiAgICAgICAgIml0ZW1fdXJsIjogImh0dHA6Ly96aXB6YXBtZS5jb20vc3BlY2lhbC1vZmZlcnMiLAogICAgICAgICJpbWFnZV91cmwiOiAiaHR0cDovL3ppcHphcG1lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kZW1vLXByb21vLWlwaG9uZS03MDB4MzAwLmpwZyIsCiAgICAgICAgInN1YnRpdGxlIjogIldvdWxkIHlvdSBsaWtlIHRvIGhlYXIgbW9yZT8iLAogICAgICAgICJidXR0b25zIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAidHlwZSI6ICJ3ZWJfdXJsIiwKICAgICAgICAgICAgICAgICJ0aXRsZSI6ICJZZXMsIExlYXJuIE1vcmUiLAogICAgICAgICAgICAgICAgInVybCI6ICJodHRwOi8vemlwemFwbWUuY29tL3NwZWNpYWwtb2ZmZXJzIgogICAgICAgICAgICB9CiAgICAgICAgXQogICAgfQpd"
      },
      {
        "type": "question",
        "left": -3715,
        "top": -69,
        "w": 120,
        "h": 40,
        "name": "7.Button",
        "id": "532a5f70-b5a4-11e8-922c-8f78ae446f79",
        "answers": {
          "uiType": "button",
          "responses": [
            {
              "id": "64399740-b5a4-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "532a5f70-b5a4-11e8-922c-8f78ae446f79",
              "display": "3",
              "name": "",
              "left": -3566,
              "top": 56,
              "h": 40,
              "w": 120,
              "next": "60405ab0-b5d2-11e8-9e51-33c661585f56",
              "value": "bye",
              "expect": "bye, good bye"
            },
            {
              "id": "62a90c30-b5a4-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "532a5f70-b5a4-11e8-922c-8f78ae446f79",
              "display": "2",
              "name": "",
              "left": -3724,
              "top": 54,
              "h": 40,
              "w": 120,
              "next": "df0c07a0-b5d1-11e8-9e51-33c661585f56",
              "value": "",
              "expect": ""
            },
            {
              "id": "60697c70-b5a4-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "532a5f70-b5a4-11e8-922c-8f78ae446f79",
              "display": "no",
              "name": "",
              "left": -3881,
              "top": 55,
              "h": 40,
              "w": 120,
              "next": "e2b05880-b5c6-11e8-a776-fbf24e65e706",
              "expect": "n, no, nope, never",
              "value": "no"
            }
          ]
        },
        "text": "Select buttons",
        "valueFormat": "CUSTOM",
        "next": null,
        "when": "",
        "delay": null,
        "variableName": "var1"
      },
      {
        "type": "question",
        "left": -3747,
        "top": 225,
        "w": 120,
        "h": 40,
        "name": "8.Quick Reply",
        "id": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
        "answers": {
          "uiType": "quick_replies",
          "responses": [
            {
              "id": "8586b7b0-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "1",
              "name": "",
              "left": -3651,
              "top": 324,
              "h": 40,
              "w": 120,
              "next": null,
              "url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg",
              "expect": "1, one, first"
            },
            {
              "id": "873949b0-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "2",
              "name": "",
              "left": -3510,
              "top": 324,
              "h": 40,
              "w": 120,
              "next": null,
              "value": "2"
            },
            {
              "id": "88de9540-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "3",
              "name": "",
              "left": -3370,
              "top": 324,
              "h": 40,
              "w": 120,
              "next": null,
              "url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg",
              "expect": "good, ok, normal",
              "value": "good"
            },
            {
              "id": "8a8603b0-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "4",
              "name": "",
              "left": -3228,
              "top": 324,
              "h": 40,
              "w": 120,
              "next": null
            },
            {
              "id": "8c218b40-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "5",
              "name": "",
              "left": -3090.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            },
            {
              "id": "8daa7530-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "6",
              "name": "",
              "left": -2950.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            },
            {
              "id": "8f643320-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "7",
              "name": "",
              "left": -2810.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            },
            {
              "id": "9148d1a0-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "8",
              "name": "",
              "left": -2670.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            },
            {
              "id": "933bef10-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "9",
              "name": "",
              "left": -2518,
              "top": 322,
              "h": 40,
              "w": 120
            },
            {
              "id": "954553a0-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "10",
              "name": "",
              "left": -2390.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            },
            {
              "id": "975d1010-b5a5-11e8-922c-8f78ae446f79",
              "type": "answer",
              "parent": "7a3512d0-b5a5-11e8-922c-8f78ae446f79",
              "display": "11",
              "name": "",
              "left": -2250.712155022677,
              "top": 323.625215333244,
              "h": 40,
              "w": 120
            }
          ]
        },
        "when": "test 3",
        "text": "Quick Reply",
        "valueFormat": "CUSTOM"
      },
      {
        "type": "question",
        "left": -3754,
        "top": 388,
        "w": 165.72144909708004,
        "h": 42.71626310470526,
        "name": "11.Reg expression",
        "id": "1a30c900-b5ab-11e8-a520-f5cf59a02446",
        "answers": {
          "responses": []
        },
        "when": "test 4",
        "text": "abc",
        "valueFormat": "REGEXP",
        "valRegExp": "[abc]",
        "valMessage": "Wrong answer!",
        "next": null,
        "delay": null,
        "action": null
      },
      {
        "type": "message",
        "left": -3754,
        "top": 465,
        "w": 120,
        "h": 40,
        "name": "13.Postback",
        "id": "b0e01270-b5ab-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "postback",
            "title": "a",
            "id": "bed16870-b5ab-11e8-a520-f5cf59a02446",
            "payload": "a"
          },
          {
            "type": "postback",
            "title": "b",
            "id": "c2ba1450-b5ab-11e8-a520-f5cf59a02446",
            "payload": "b"
          },
          {
            "type": "postback",
            "title": "q",
            "id": "c5cc5d60-b5ab-11e8-a520-f5cf59a02446",
            "payload": "q"
          }
        ],
        "buttonUiType": "button",
        "text": "postback buttons:",
        "when": "test 5",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -1890,
        "top": 1338.156296996969,
        "w": 218.6251879878762,
        "h": 58.843703003030896,
        "name": "Message.Buttons.Postback",
        "id": "56e1a170-b5ac-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "postback",
            "title": "a1",
            "id": "62b3c0f0-b5ac-11e8-a520-f5cf59a02446",
            "payload": "a1"
          },
          {
            "type": "postback",
            "title": "a2",
            "id": "66e6e350-b5ac-11e8-a520-f5cf59a02446",
            "payload": "a2"
          },
          {
            "type": "postback",
            "title": "a3",
            "id": "6c085d50-b5ac-11e8-a520-f5cf59a02446",
            "payload": "a3"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons",
        "when": "",
        "next": "b52e8e60-b803-11e8-a0d0-c70c7d91a32f"
      },
      {
        "type": "message",
        "left": -3756,
        "top": 532,
        "w": 164.96795942836343,
        "h": 41.43950253572723,
        "name": "15.Account link",
        "id": "8be6d290-b5ad-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "account_link",
            "title": "link http",
            "id": "96df5af0-b5ad-11e8-a520-f5cf59a02446",
            "url": "http://test.com",
            "instance": "demo"
          },
          {
            "type": "account_link",
            "title": "link https",
            "id": "ad683ee0-b5ad-11e8-a520-f5cf59a02446",
            "url": "https://www.messenger.com",
            "instance": "gdfgd"
          },
          {
            "type": "account_link",
            "title": "link www",
            "id": "bc22ff60-b5ad-11e8-a520-f5cf59a02446",
            "instance": "gdfgd",
            "url": "https://www.wikipedia.org/"
          }
        ],
        "buttonUiType": "button",
        "when": "test 6",
        "text": "Press Account link",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -2877,
        "top": 1543,
        "w": 247.57543283347673,
        "h": 56.6283044777681,
        "name": "Message.Buttons.Account unlink",
        "id": "46b0d0d0-b5ae-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "account_unlink",
            "title": "log out/ unlink",
            "id": "50981040-b5ae-11e8-a520-f5cf59a02446"
          }
        ],
        "buttonUiType": "button",
        "text": "Message.Buttons.Account unlink",
        "when": "logout",
        "next": "7aa14750-b804-11e8-a0d0-c70c7d91a32f",
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -3751,
        "top": 593,
        "w": 152.8197555297793,
        "h": 51.518197094725,
        "name": "17.Phone number",
        "id": "b2b6aa60-b5af-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "phone_number",
            "title": "54-3010",
            "id": "bd07cf30-b5af-11e8-a520-f5cf59a02446",
            "payload": "54-3010"
          },
          {
            "type": "phone_number",
            "title": "+1-541-754-3010",
            "id": "c60746b0-b5af-11e8-a520-f5cf59a02446",
            "payload": "+1-541-754-3010"
          },
          {
            "type": "phone_number",
            "title": "demo",
            "id": "cd244290-b5af-11e8-a520-f5cf59a02446",
            "payload": "demo"
          }
        ],
        "buttonUiType": "button",
        "when": "test 7",
        "text": "Phone numbers",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -3747,
        "top": 659,
        "w": 120,
        "h": 40,
        "name": "18.Quick Reply",
        "id": "ebcfdd20-b5b0-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "postback",
            "title": "abc",
            "id": "f836e9a0-b5b0-11e8-a520-f5cf59a02446",
            "payload": "abc"
          },
          {
            "type": "postback",
            "title": "edc",
            "id": "fbca4990-b5b0-11e8-a520-f5cf59a02446",
            "payload": "edc",
            "url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg"
          },
          {
            "type": "postback",
            "title": "zxc",
            "id": "ffa36510-b5b0-11e8-a520-f5cf59a02446",
            "url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg",
            "payload": "zxc"
          },
          {
            "type": "postback",
            "title": "6",
            "id": "04c4b800-b5b1-11e8-a520-f5cf59a02446",
            "payload": "6"
          },
          {
            "type": "postback",
            "title": "7",
            "id": "07273910-b5b1-11e8-a520-f5cf59a02446",
            "payload": "7"
          },
          {
            "type": "postback",
            "title": "8",
            "id": "0902d6e0-b5b1-11e8-a520-f5cf59a02446",
            "payload": "8"
          },
          {
            "type": "postback",
            "title": "9",
            "id": "0ab45770-b5b1-11e8-a520-f5cf59a02446",
            "payload": "9"
          },
          {
            "type": "postback",
            "title": "10",
            "id": "0c5ab470-b5b1-11e8-a520-f5cf59a02446",
            "payload": "10"
          },
          {
            "type": "postback",
            "title": "11",
            "id": "0e99a7f0-b5b1-11e8-a520-f5cf59a02446",
            "payload": "11"
          },
          {
            "type": "postback",
            "title": "12",
            "id": "1081eff0-b5b1-11e8-a520-f5cf59a02446",
            "payload": "12"
          },
          {
            "type": "postback",
            "title": "13",
            "id": "12657d00-b5b1-11e8-a520-f5cf59a02446",
            "payload": "13"
          }
        ],
        "buttonUiType": "quick_replies",
        "when": "test 9",
        "text": "Quick Reply",
        "next": null,
        "tagsVariableName": "",
        "delay": null,
        "d_top": null,
        "d_left": null,
        "action": null
      },
      {
        "type": "message",
        "left": -3756,
        "top": 723,
        "w": 163.52443461269786,
        "h": 42.704116897944346,
        "name": "19.Variable of array",
        "id": "46cb87f0-b5b2-11e8-a520-f5cf59a02446",
        "buttons": [
          {
            "type": "postback",
            "title": "erw",
            "id": "aff4ff10-b5bf-11e8-a776-fbf24e65e706",
            "payload": "ewrw",
            "url": "https://zakupywm1.pl/uploads/shops/banner_224.jpg"
          }
        ],
        "buttonUiType": "quick_replies",
        "when": "test 10",
        "text": "Variable of array",
        "action": "03c73670-b5b7-11e8-a38b-5f06ba3ca13d",
        "tagsVariableName": "fff",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "message",
        "left": -4195,
        "top": 895,
        "w": 120,
        "h": 40,
        "name": "20.Cards",
        "id": "ca1e7fd0-b5b3-11e8-a38b-5f06ba3ca13d",
        "buttons": [
          {
            "type": "phone_number",
            "title": "phone number",
            "id": "342faac0-b5b4-11e8-a38b-5f06ba3ca13d",
            "payload": "46346"
          },
          {
            "type": "postback",
            "title": "postback",
            "id": "15f6d9c0-b5b4-11e8-a38b-5f06ba3ca13d",
            "payload": "rty"
          },
          {
            "type": "web_url",
            "title": "url",
            "id": "1c3c1340-b5b4-11e8-a38b-5f06ba3ca13d",
            "url": "https://www.youtube.com/watch?v=0OSx0oQZzz4"
          },
          {
            "type": "account_link",
            "title": "acc link",
            "id": "258d5440-b5b4-11e8-a38b-5f06ba3ca13d",
            "url": "https://olsauser.github.io/qa_bot.html",
            "instance": "demo"
          },
          {
            "type": "account_unlink",
            "title": "acc unlink",
            "id": "2e8bba50-b5b4-11e8-a38b-5f06ba3ca13d"
          }
        ],
        "buttonUiType": "card",
        "when": "test 11",
        "text": "Cards",
        "subtitle": "subtitle",
        "image_url": "https://converse-qa-iad.ces.pitneycloud.com/pb-circle-mark.png",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      },
      {
        "type": "action",
        "left": -3528,
        "top": 759,
        "w": 191.76825629045197,
        "h": 43.202726396582875,
        "name": "Set variable (quick reply)",
        "id": "03c73670-b5b7-11e8-a38b-5f06ba3ca13d",
        "action_type": "set_variable",
        "endpoint": "https://OlsaUser.github.io/card_buttons.json",
        "variableName": "tget",
        "method": "GET",
        "set_value": "Y29udGV4dC5mZmYgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgClsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAp7CiAgImNvbnRlbnRfdHlwZSI6InRleHQiLAogICJ0aXRsZSI6InJlcXVpcmVkIDEiLAogICJpbWFnZV91cmwiOiJodHRwczovL2NvbnZlcnNlLXFhLWlhZC5jZXMucGl0bmV5Y2xvdWQuY29tL3BiLWNpcmNsZS1tYXJrLnBuZyIsIAogICJwYXlsb2FkIjoibWVzc2FnZTEiCn0sCnsKICAiY29udGVudF90eXBlIjoidGV4dCIsCiAgInRpdGxlIjoicmVxdWlyZWQgMiIsCiAgImltYWdlX3VybCI6Imh0dHBzOi8vY29udmVyc2UtcWEtaWFkLmNlcy5waXRuZXljbG91ZC5jb20vcGItY2lyY2xlLW1hcmsucG5nIiwgCiAgInBheWxvYWQiOiJtZXNzYWdlIgp9LAp7CiAgImNvbnRlbnRfdHlwZSI6InRleHQiLAogICJ0aXRsZSI6InJlcXVpcmVkIDMiLAogICJpbWFnZV91cmwiOiJodHRwczovL2NvbnZlcnNlLXFhLWlhZC5jZXMucGl0bmV5Y2xvdWQuY29tL3BiLWNpcmNsZS1tYXJrLnBuZyIsIAogICJwYXlsb2FkIjoibWVzc2FnZSIKfQpd",
        "next": null,
        "when": "34",
        "delay": null
      },
      {
        "type": "message",
        "left": -4059,
        "top": 1109,
        "w": 120,
        "h": 40,
        "name": "SendToUser",
        "id": "085c5cb0-b5bc-11e8-a3b9-032cfe71cf2f",
        "buttons": [],
        "buttonUiType": "quick_replies",
        "text": "{system.sendToUser(\"This will go to the user's chat window\")} ... {globals.log}",
        "when": "test 12",
        "next": null,
        "tagsVariableName": "{log}"
      },
      {
        "type": "action",
        "left": -3939,
        "top": 890,
        "w": 120,
        "h": 40,
        "name": "21.Conditions",
        "id": "88472680-b5c1-11e8-a776-fbf24e65e706",
        "action_type": "conditional",
        "when": "",
        "conditions": [
          {
            "id": "ab36c8d0-b5c1-11e8-a776-fbf24e65e706",
            "varname": "{testV}",
            "operator": ">",
            "value": "10",
            "next": "251817f0-b048-11e8-a765-3d73680139bb",
            "left": -4052,
            "top": 781,
            "w": 120,
            "h": 40
          },
          {
            "id": "b4642e20-b5c1-11e8-a776-fbf24e65e706",
            "varname": "{testV}",
            "operator": "<",
            "value": "10",
            "next": "085c5cb0-b5bc-11e8-a3b9-032cfe71cf2f",
            "left": -4059,
            "top": 978,
            "w": 120,
            "h": 40
          }
        ],
        "set_value": "dW5kZWZpbmVk",
        "next": "ca1e7fd0-b5b3-11e8-a38b-5f06ba3ca13d"
      },
      {
        "type": "question",
        "left": -3781,
        "top": 894,
        "w": 120,
        "h": 40,
        "name": "num",
        "id": "d5a9a2e0-b5c1-11e8-a776-fbf24e65e706",
        "answers": {
          "responses": []
        },
        "when": "test 21",
        "text": "enter any number",
        "valueFormat": "ANY",
        "variableName": "testV",
        "next": "88472680-b5c1-11e8-a776-fbf24e65e706",
        "matchAny": true
      },
      {
        "type": "action",
        "left": -3889,
        "top": 136,
        "w": 120,
        "h": 40,
        "name": "Conditions",
        "id": "e2b05880-b5c6-11e8-a776-fbf24e65e706",
        "action_type": "conditional",
        "conditions": [
          {
            "id": "7353fef0-b5db-11e8-be7e-0d1e021c9301",
            "varname": "{var1}",
            "operator": "=",
            "value": "no",
            "next": "251817f0-b048-11e8-a765-3d73680139bb",
            "left": -4092,
            "top": 110,
            "w": 120,
            "h": 40
          },
          {
            "id": "c0ca8d70-cbb1-11e8-bac5-8107fbdc6902",
            "varname": "{var1}",
            "operator": "=",
            "value": "yes",
            "next": "56e1a170-b5ac-11e8-a520-f5cf59a02446",
            "left": -3649,
            "top": 216,
            "w": 120,
            "h": 40
          }
        ],
        "set_value": "dW5kZWZpbmVk",
        "when": ""
      },
      {
        "type": "message",
        "left": -3752,
        "top": 129,
        "w": 168.19530982220203,
        "h": 44,
        "name": "but2 (working OK)",
        "id": "df0c07a0-b5d1-11e8-9e51-33c661585f56",
        "buttons": [],
        "buttonUiType": "button",
        "when": "{var1}",
        "text": "test !!! You press button: {var1}"
      },
      {
        "type": "question",
        "left": -3577,
        "top": 129,
        "w": 170.52137876021243,
        "h": 44,
        "name": "but3 (working Ok)",
        "id": "60405ab0-b5d2-11e8-9e51-33c661585f56",
        "answers": {
          "responses": []
        },
        "when": "{var1}",
        "text": "test !!! !!! You press button : {var1}",
        "valueFormat": "ANY",
        "matchAny": true
      },
      {
        "type": "action",
        "left": -3876,
        "top": 1979,
        "w": 236.85154309574318,
        "h": 42.328125287470584,
        "name": "Action REST >GET. Cards",
        "id": "dca4c810-b7f4-11e8-baea-3b0cd435ae2a",
        "action_type": "rest_data",
        "endpoint": "https://OlsaUser.github.io/card_buttons_Postback_MAX.json",
        "method": "GET",
        "authentication": "",
        "set_value": "dW5kZWZpbmVk",
        "variableName": "cards",
        "setData": "title",
        "setErrorDataPredicate": "contains",
        "setErrorData": "title[0]"
      },
      {
        "type": "card",
        "left": -3535,
        "top": 1956,
        "w": 236.01560573947836,
        "h": 40.65625057494094,
        "name": "Card >Action REST >GET. Cards",
        "id": "df0c5cc0-b7f5-11e8-baea-3b0cd435ae2a",
        "items": [],
        "when": "",
        "action": "dca4c810-b7f4-11e8-baea-3b0cd435ae2a",
        "listVariableName": "cards",
        "text": "Card >Action REST >GET. Cards",
        "next": "3a67dad0-ba68-11e8-98d0-5b6023ff2a2a"
      },
      {
        "type": "message",
        "left": -3531,
        "top": 1863,
        "w": 243.5390419458613,
        "h": 39.82031321867612,
        "name": "Message >Card >Action >Cards",
        "id": "33b11040-b7f6-11e8-baea-3b0cd435ae2a",
        "buttons": [],
        "buttonUiType": "button",
        "when": "demo",
        "text": "Message >Card >Action >Cards",
        "next": "df0c5cc0-b7f5-11e8-baea-3b0cd435ae2a"
      },
      {
        "type": "message",
        "left": -2862,
        "top": 1627,
        "w": 236.8331495998459,
        "h": 63.05561680005144,
        "name": "Message.Cards.Buttons",
        "id": "43983740-b800-11e8-9fe4-33ebafcb1c35",
        "buttons": [
          {
            "type": "postback",
            "title": "Postback",
            "id": "5587e400-b800-11e8-9fe4-33ebafcb1c35",
            "payload": "postback"
          },
          {
            "type": "account_link",
            "title": "Account link",
            "id": "62de0b70-b800-11e8-9fe4-33ebafcb1c35",
            "url": "https://www.messenger.com",
            "instance": "login"
          },
          {
            "type": "account_unlink",
            "title": "Account unlink",
            "id": "69b6f970-b800-11e8-9fe4-33ebafcb1c35"
          }
        ],
        "buttonUiType": "card",
        "text": "Message.Cards.Buttons",
        "subtitle": "subtitle",
        "image_url": "https://converse-qa-iad.ces.pitneycloud.com/pb-circle-mark.png",
        "next": "8bff1450-b804-11e8-a0d0-c70c7d91a32f"
      },
      {
        "type": "question",
        "left": -1582.9597778087386,
        "top": 1263.7229632193628,
        "w": 120,
        "h": 40,
        "name": "Question #1",
        "id": "a61d2260-b803-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #1",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "56e1a170-b5ac-11e8-a520-f5cf59a02446"
      },
      {
        "type": "question",
        "left": -1582,
        "top": 1346,
        "w": 120,
        "h": 40,
        "name": "Question #2",
        "id": "b52e8e60-b803-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #2",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "8f7f6b40-b28f-11e8-85b6-a7743994445e"
      },
      {
        "type": "question",
        "left": -1583,
        "top": 1428,
        "w": 120,
        "h": 40,
        "name": "Question #3",
        "id": "dfea7f60-b803-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #3",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "65a3a110-b28f-11e8-85b6-a7743994445e"
      },
      {
        "type": "question",
        "left": -1579,
        "top": 1506,
        "w": 120,
        "h": 40,
        "name": "Question #4",
        "id": "edd7ddc0-b803-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #4",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "7dcd15a0-b28f-11e8-85b6-a7743994445e"
      },
      {
        "type": "question",
        "left": -1583,
        "top": 1595,
        "w": 120,
        "h": 40,
        "name": "Question #5",
        "id": "fa49e6c0-b803-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #5",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "dfe21b50-9b01-11e8-b6e7-8b479035b3fc"
      },
      {
        "type": "question",
        "left": -2529,
        "top": 1336,
        "w": 120,
        "h": 40,
        "name": "Question #6",
        "id": "59d54850-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #6",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "d5dbcf20-b28f-11e8-85b6-a7743994445e"
      },
      {
        "type": "question",
        "left": -2530,
        "top": 1423,
        "w": 120,
        "h": 40,
        "name": "Question #7",
        "id": "64c34960-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #7",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "e86264b0-b28f-11e8-85b6-a7743994445e"
      },
      {
        "type": "question",
        "left": -2530,
        "top": 1518,
        "w": 120,
        "h": 40,
        "name": "Question #8",
        "id": "6f0b1f60-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #8",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "46b0d0d0-b5ae-11e8-a520-f5cf59a02446"
      },
      {
        "type": "question",
        "left": -2531,
        "top": 1599,
        "w": 120,
        "h": 40,
        "name": "Question #9",
        "id": "7aa14750-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #9",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "43983740-b800-11e8-9fe4-33ebafcb1c35"
      },
      {
        "type": "question",
        "left": -2527,
        "top": 1680,
        "w": 120,
        "h": 40,
        "name": "Question #10",
        "id": "8bff1450-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #10",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "f0657cc0-9ad3-11e8-9cbd-9f2a52b892d9"
      },
      {
        "type": "question",
        "left": -3396,
        "top": 1456,
        "w": 120,
        "h": 40,
        "name": "Question #11",
        "id": "f32c8040-b804-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "responses": []
        },
        "text": "Question #11",
        "valueFormat": "ANY",
        "matchAny": true,
        "next": "4d402240-ad14-11e8-b696-99ee3821c00e",
        "when": "yes1, no1, maybe1"
      },
      {
        "type": "action",
        "left": -3891,
        "top": 1794,
        "w": 248.55466608344977,
        "h": 44.835937356264594,
        "name": "Action RESR >GET. Quick reply",
        "id": "dd942bf0-b806-11e8-a0d0-c70c7d91a32f",
        "action_type": "rest_data",
        "endpoint": "https://OlsaUser.github.io/HéritageQ.json",
        "method": "GET",
        "variableName": "quickreply",
        "set_value": "dW5kZWZpbmVk"
      },
      {
        "type": "question",
        "left": -3529,
        "top": 1774,
        "w": 239.5390603439714,
        "h": 40.539060343971414,
        "name": "Question >Action >Quick reply",
        "id": "f0ee8c40-b806-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "uiType": "quick_replies",
          "responses": [],
          "tagsVariableName": "quickreply"
        },
        "valueFormat": "CUSTOM",
        "when": "quickreply, button1, button2, button3",
        "text": "Question >Action >Quick reply",
        "action": "dd942bf0-b806-11e8-a0d0-c70c7d91a32f",
        "next": "33b11040-b7f6-11e8-baea-3b0cd435ae2a"
      },
      {
        "type": "action",
        "left": -3873,
        "top": 1679,
        "w": 227.6562321768306,
        "h": 42.328125287470584,
        "name": "Action REST >GET. Buttons",
        "id": "15d802c0-b807-11e8-a0d0-c70c7d91a32f",
        "action_type": "rest_data",
        "endpoint": "https://OlsaUser.github.io/HéritageB.json",
        "method": "GET",
        "variableName": "button",
        "set_value": "dW5kZWZpbmVk",
        "setErrorDataPredicate": "contains",
        "setErrorData": ""
      },
      {
        "type": "question",
        "left": -3520,
        "top": 1661,
        "w": 209.82031321867635,
        "h": 44.47656379361706,
        "name": "Question >Action> Buttons",
        "id": "2f9e5e70-b807-11e8-a0d0-c70c7d91a32f",
        "answers": {
          "uiType": "quick_replies",
          "responses": [],
          "tagsVariableName": "button"
        },
        "when": "button",
        "text": "Question >Action> Buttons",
        "valueFormat": "CUSTOM",
        "action": "15d802c0-b807-11e8-a0d0-c70c7d91a32f",
        "next": "f0ee8c40-b806-11e8-a0d0-c70c7d91a32f"
      },
      {
        "type": "question",
        "left": -3472,
        "top": 2055,
        "w": 120,
        "h": 40,
        "name": "Question #12",
        "id": "3a67dad0-ba68-11e8-98d0-5b6023ff2a2a",
        "answers": {
          "responses": []
        },
        "valueFormat": "ANY",
        "matchAny": true,
        "text": "Question #12",
        "next": "92afff10-ad1b-11e8-8a10-6501631c5230"
      },
      {
        "type": "action",
        "left": -3839,
        "top": 2245,
        "w": 199,
        "h": 46,
        "name": "Action REST. POST",
        "id": "a4270340-ba6a-11e8-98d0-5b6023ff2a2a",
        "action_type": "rest_data",
        "endpoint": "http://olsauser.serveo.net/api/product/create.php",
        "method": "POST",
        "set_value": "dW5kZWZpbmVk",
        "action_body": "{\n\"category_id\":\"2\",\n\"description\":\"Smoke Test\",\n\"name\":\"Smoke Demo\",\n\"price\":\"300.00\"\n}",
        "authentication": "Basic cmJvd2VuOmRlbW8=",
        "variableName": "create",
        "setData": "message",
        "next": "0660bf20-ba6f-11e8-98d0-5b6023ff2a2a",
        "ttl": 3
      },
      {
        "type": "action",
        "left": -3837,
        "top": 2310,
        "w": 200.5171640075,
        "h": 45,
        "name": "Action REST. GET",
        "id": "0660bf20-ba6f-11e8-98d0-5b6023ff2a2a",
        "action_type": "rest_data",
        "endpoint": "http://olsauser.serveo.net/api/product/read_one.php?id=3",
        "method": "GET",
        "authentication": "Basic cmJvd2VuOmRlbW8=",
        "variableName": "details",
        "setData": "name",
        "set_value": "dW5kZWZpbmVk",
        "next": "31844b90-ba6f-11e8-98d0-5b6023ff2a2a",
        "ttl": 2
      },
      {
        "type": "action",
        "left": -3840,
        "top": 2386,
        "w": 199.31269177250715,
        "h": 44,
        "name": "Action REST. PUT",
        "id": "31844b90-ba6f-11e8-98d0-5b6023ff2a2a",
        "action_type": "rest_data",
        "method": "PUT",
        "endpoint": "http://olsauser.serveo.net/api/product/update.php",
        "action_body": "{\n\"category_id\":\"1\",\n\"description\":\"Update Data\",\n\"id\":\"114\",\n\"name\":\"Update name\",\n\"price\":\"100\"\n}",
        "authentication": "Basic cmJvd2VuOmRlbW8=",
        "variableName": "update",
        "setData": "message",
        "set_value": "dW5kZWZpbmVk",
        "next": "74cd54f0-ba6f-11e8-98d0-5b6023ff2a2a",
        "ttl": 1
      },
      {
        "type": "action",
        "left": -3837,
        "top": 2461,
        "w": 195.17463178500657,
        "h": 43.17238800249993,
        "name": "Action REST. DELETE",
        "id": "74cd54f0-ba6f-11e8-98d0-5b6023ff2a2a",
        "action_type": "rest_data",
        "endpoint": "http://olsauser.serveo.net/api/product/delete.php",
        "method": "DELETE",
        "action_body": "{\n\"id\":114\n}",
        "httpHeaders": {
          "Authorization": "Basic cmJvd2VuOmRlbW8="
        },
        "variableName": "remove",
        "setData": "message",
        "set_value": "dW5kZWZpbmVk",
        "next": "e9fb1590-ba70-11e8-98d0-5b6023ff2a2a"
      },
      {
        "type": "message",
        "left": -3510,
        "top": 2221,
        "w": 192.73180171433387,
        "h": 44.904365812030846,
        "name": "Message >Action.GET",
        "id": "badd4680-ba6f-11e8-98d0-5b6023ff2a2a",
        "buttons": [],
        "buttonUiType": "button",
        "text": "!Attention: make sure server serveo.net running.\nMessage >Action.GET",
        "next": "a4270340-ba6a-11e8-98d0-5b6023ff2a2a",
        "when": "json, info1, info 2"
      },
      {
        "type": "message",
        "left": -3505,
        "top": 2468,
        "w": 194.09753491093852,
        "h": 52.76219186386743,
        "name": "Message >Action result",
        "id": "e9fb1590-ba70-11e8-98d0-5b6023ff2a2a",
        "buttons": [],
        "buttonUiType": "button",
        "text": "Results: \ncreate --> {(create)}, detail info --> \"{(details)}\", update --> {(update)}, remove --> {(remove)}"
      },
      {
        "type": "message",
        "left": -3740,
        "top": 969,
        "w": 297.23056326736514,
        "h": 40.892725322558476,
        "name": "message>card>postback button",
        "id": "31dee920-bca8-11e8-a707-1178b69ec5d1",
        "buttons": [
          {
            "type": "account_unlink",
            "title": "unlink",
            "id": "5de34330-bca9-11e8-a707-1178b69ec5d1"
          },
          {
            "type": "phone_number",
            "title": "phone",
            "id": "873d0c20-bca9-11e8-a707-1178b69ec5d1",
            "payload": "+380999553932"
          },
          {
            "type": "account_link",
            "title": "acc link",
            "id": "8e138920-bca9-11e8-a707-1178b69ec5d1",
            "url": "https://www.messenger.com",
            "instance": "login"
          },
          {
            "type": "postback",
            "title": "1",
            "id": "a26da630-bca9-11e8-a707-1178b69ec5d1",
            "payload": "1"
          }
        ],
        "buttonUiType": "card",
        "text": "message>card>postback button",
        "when": "postback button",
        "subtitle": "subtitle",
        "image_url": "https://converse-qa-iad.ces.pitneycloud.com/pb-circle-mark.png"
      },
      {
        "type": "message",
        "left": -3577,
        "top": 533,
        "w": 120,
        "h": 40,
        "name": "16. Account unlink",
        "id": "904fa290-cbb4-11e8-be9e-8da483ac5142",
        "buttons": [
          {
            "type": "account_unlink",
            "title": "Account Unlink",
            "id": "ab163030-cbb4-11e8-be9e-8da483ac5142"
          }
        ],
        "buttonUiType": "button",
        "text": "16. Account unlink",
        "when": "up",
        "next": null,
        "delay": null,
        "d_top": null,
        "d_left": null
      }
    ],
    "defaultReply": {
      "text": "I don't understand you...",
      "type": "message",
      "next": "34213580-80f3-11e8-a45b-1b6ac9cc9b32"
    },
    "quickReplies": [
      {
        "id": "2b70cfa0-cbb6-11e8-be9e-8da483ac5142",
        "respond": "You are welcome!",
        "when": "thanks"
      }
    ],
    "matchTypeErrors": {
      "validEmail": "",
      "validMonth": "",
      "validMonthOrRange": "",
      "validYear": "",
      "validYearOrRange": "",
      "validPhoneNumber": "",
      "validDate": "",
      "validNumber": "",
      "validZipCode": ""
    },
    "app_secret": "e77a2ea72c4d77f6d0c516b67371c776",
    "name": "7. RegTests - (Olha)",
    "id": "31ee2f3a-d8ad-4b23-b2b8-fdbd7cf43746",
    "createdBy": "Demo Admin",
    "createdDate": "July 04 2018 08:22:32 am",
    "lastModifiedBy": "Demo Admin",
    "lastModifiedDate": "October 15 2018 08:17:57 am",
    "session_timeout_hours": 3889,
    "defaultAnswerReply": "I didn't quite understand that. Please answer the question or type CANCEL.",
    "afterLogin": "34213580-80f3-11e8-a45b-1b6ac9cc9b32",
    "afterLogout": "34213580-80f3-11e8-a45b-1b6ac9cc9b32",
    "cancel": "cancel, quit, stop",
    "globals": {
      "log": "messages will go to the log"
    },
    "errorMessage": "",
    "httpErrorNext": "34213580-80f3-11e8-a45b-1b6ac9cc9b32",
    "timeoutMessage": "",
    "timeoutButtonText": "",
    "page_id": "104395790443386",
    "page_access_token": "EAABe8ooBY3oBABQ6FPydqoE2NJeFPDjhadwR07v556FmCtgmOpFfq3EcNvsHNBNTuzkdWk75tAYBiUgfsqqWf27B3ry9Rtye1ZAVsMz7FvIZCLbGLiToFRpRVAikSlVUZAuKAldUokyzkiZAtZCW3pOh2qZC9QwQtmPigIvey6twZDZD",
    "verify_token": "football",
    "getStartedBtn_on": true,
    "pbanalytics_on": true,
    "app2check_on": false,
    "app2check_apiKey": "",
    "dashbot_on": true,
    "dashbot_FbApiKey": "AHrrICX5yOtLN8Cqu4TCrNlmVZ7i77AIptDE8iwX",
    "dashbot_WebApiKey": "JD3nmVgnczje8z76JWNtaD1c2QH297GrPTGulRFn",
    "liveTakeover": {
      "startAction": "Welcome! How may I help you?",
      "endAction": "251817f0-b048-11e8-a765-3d73680139bb"
    },
    "lock_origin": "",
    "attachments": {
      "recipientEmail": "olga.samotokina@gmail.com"
    },
    "pbSms": {
      "authUser": "demo.user1@mailinator.com"
    },
    "_getStartedBtnInitValue": true
  },
  "intentions": [
    {
      "id": "ae47737d-b9df-4e69-99d8-0ba4bfcb589a",
      "name": "phone",
      "utterances": [
        {
          "id": "c6cd9770-c0dc-11e7-8fa6-a328811a8d5b",
          "text": "phone"
        },
        {
          "id": "c9474a00-c0dc-11e7-8fa6-a328811a8d5b",
          "text": "telly"
        },
        {
          "id": "a5f38330-1324-11e8-a56b-f3b165ba17c0",
          "text": "call me"
        },
        {
          "id": "a811cf50-1324-11e8-a56b-f3b165ba17c0",
          "text": "mobile"
        },
        {
          "id": "ad45e6f0-1324-11e8-a56b-f3b165ba17c0",
          "text": "contact me"
        },
        {
          "id": "b14f8850-1324-11e8-a56b-f3b165ba17c0",
          "text": "ring me"
        },
        {
          "id": "b6dc9560-1324-11e8-a56b-f3b165ba17c0",
          "text": "call"
        }
      ]
    },
    {
      "name": "start",
      "utterances": [
        {
          "id": "7d819660-cba0-11e7-949d-d1afd6e026a9",
          "text": "start"
        },
        {
          "id": "7f710a50-cba0-11e7-949d-d1afd6e026a9",
          "text": "let's go"
        },
        {
          "id": "985df5f0-cba0-11e7-949d-d1afd6e026a9",
          "text": "GET_STARTED_PAYLOAD"
        },
        {
          "id": "b59d7f70-d96d-11e7-8034-41d5716fd965",
          "text": "send message"
        },
        {
          "id": "bd6abf40-d9bf-11e7-8034-41d5716fd965",
          "text": "restart"
        },
        {
          "id": "e2f31260-89ca-11e8-998f-311906beb311",
          "text": "get started"
        },
        {
          "id": "e59c3960-89ca-11e8-998f-311906beb311",
          "text": "get_started"
        },
        {
          "id": "eac77760-89ca-11e8-998f-311906beb311",
          "text": "go"
        },
        {
          "id": "ed4d8600-89ca-11e8-998f-311906beb311",
          "text": "let('?)s go"
        },
        {
          "id": "bd6abf40-d9bf-11e7-8034-41d5716fd965",
          "text": "restart.*"
        },
        {
          "id": "49d92700-58f5-11e8-95b2-65e47a86b1bc",
          "text": "SEND_MESSAGE_PAYLOAD"
        },
        {
          "id": "7bca2260-cba0-11e7-949d-d1afd6e026a9",
          "text": "lass uns starten"
        },
        {
          "id": "7f710a50-cba0-11e7-949d-d1afd6e026a9",
          "text": "anfangen"
        },
        {
          "id": "82614c70-cba0-11e7-949d-d1afd6e026a9",
          "text": "los gehts"
        },
        {
          "id": "b59d7f70-d96d-11e7-8034-41d5716fd965",
          "text": "nachricht sende"
        },
        {
          "id": "bd6abf40-d9bf-11e7-8034-41d5716fd965",
          "text": "neustart"
        },
        {
          "id": "0038b550-42f4-11e8-9565-173e50b2415e",
          "text": "los"
        }
      ],
      "id": "8f01dfac-86d5-49ec-bb6d-f6f0ba2e24ab"
    }
  ]
}