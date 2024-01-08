import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//use different suffix for each language
import global_en from "./translations/en/global.json";
import global_kor from "./translations/kor/global.json";
import global_vie from './translations/vie/global.json';

//đa ngôn ngữ international
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

//React Router
import { BrowserRouter } from 'react-router-dom';

i18next.init({
    // Configuration options for i18next
    interpolation: {escapeValue: false}, //should be "true" to mitigate XSS attack //// React already escapes by default; excape passed in value to avoid XSS attack
 
    lng:"en", // Default language
    //associate json file to each lang
    resources:{
        //global chính là translation namespace
        //Now, when using useTranslation("global") in your components, you'll have access to translations within the "global" namespace:
        //Quesion for ChatGPT:  if you have translations organized into namespace such as "global", please give code example
        en:{
            global:global_en
        },
        kor:{
            global:global_kor
        },
        vie:{
            global:global_vie
        }
    }
})

/*
    Để có BrowserRouter:
       ✔️Bước 1: npm install react-router-dom
       ✔️✔️Bước 2: import {BrowserRouter } from 'react-router-dom'
       ✔️✔️✔️Bước 3: wrap BrowserRouter around I18nextProvider . This structure will wrap your App component with both BrowserRouter for routing and I18nextProvider for internationalization.
       ✔️✔️✔️✔️Bước 4: in your App component, you can define your routes using react-router-dom: 
*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <I18nextProvider i18n={i18next}>
            <App /> 
        </I18nextProvider>
    </BrowserRouter>
)

/*
    ✍️Ask: import i18next from 'i18next';
                <I18nextProvider i18n={i18next}>
                    <App /> 
                </I18nextProvider>
            Where is I18nextProvider?
    ⚡️ChatGPT3: The I18nextProvider component is usually provided by the react-i18next library, which serves as a context provider for managing internationalization (i18n) features in React applications.

          To use I18nextProvider, you need to have the react-i18next package installed in your project. It's used to wrap your main App component, allowing access to the i18n functionality throughout the component tree.

          In this example, the I18nextProvider wraps the App component, making the 🍀i18n instance🍀 available to all components within App or its descendants, allowing them to access internationalization features like translations and formatting.
*/