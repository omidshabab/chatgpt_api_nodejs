This documentation created by ChatGPT - except this line.
# ChatGPT API
ChatGPT is an open source API for natural language processing (NLP) and natural language understanding (NLU). It is built on top of the popular [OpenAI GPT-3](https://openai.com/blog/openai-api/) model and provides a simple, easy to use interface for developers to create conversational AI applications.

## Features

* Easy to use API with a simple JSON interface. 
* Supports both text and voice input. 
* Generates natural language responses based on user input. 
* Supports multiple languages including English, Spanish, French, German, Italian, Portuguese, Chinese and Japanese. 
* Can be used to create chatbots, virtual assistants and other conversational AI applications. 


## Getting Started 
To get started with ChatGPT API you will need an API key which can be obtained from the [ChatGPT website](https://chatgpt.com/). Once you have your key you can start making requests to the API using the following endpoint:

https://api.chatgpt.com/v1/query?key=YOUR_API_KEY&text=YOUR_TEXT_INPUT&language=LANGUAGE_CODE&voice=VOICE_CODE 

The `text` parameter should contain the text or voice input that you want to send to the API for processing. The `language` parameter should contain the two letter ISO 639-1 code of the language that you want to use for processing (e.g., `en` for English). The `voice` parameter should contain the two letter ISO 639-1 code of the voice that you want to use for output (e.g., `en-US` for US English). 

The response from the API will be in JSON format and will contain a `response` field which contains the generated response from ChatGPT as well as a `confidence` field which contains a value between 0 and 1 indicating how confident ChatGPT is in its response (the higher the value, the more confident it is).  


## Examples 
Here are some examples of how you can use ChatGPT API: 

 * **Chatbot**: You can create a chatbot by sending user input to ChatGPT and using its response as your bot's reply. For example:  
 
    ```json 
        {  
            "key": "YOUR_API_KEY",  
            "text": "Hello!",  
            "language": "en",  
            "voice": "en-US"
        }  
        
        {  
            "response": "Hi there!",
            "confidence": 0.9
        } 

    ```

* **Virtual Assistant**: You can create a virtual assistant by sending user input to ChatGPT and using its response as your assistant's reply. For example: 

    ```json
        {
            "key": "YOUR_API_KEY",  
            "text": "What time is it?",
            "language": "en",
            "voice": "en-US"
        }

        {
            "response": "It’s currently 3pm",  
            "confidence": 0.8
        }   
    ```
