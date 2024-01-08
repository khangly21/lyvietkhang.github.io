import React from 'react'; //không có là báo lỗi thẻ "a"
/*
    React, when used in a module-based system like ES modules, requires explicit import statements to access its functionalities. 
    If you're trying to render a JSX element or use React components without importing the React library, it won't work as expected, resulting in errors.
    For instance, when working with JSX in a React component file, you need to import React EXplicitly
    The import React from 'react' line is essential to ensure that JSX elements are properly transpiled and understood by React.

    The error message you mentioned, "React refers to UMD global, but the current file is a module, consider adding an import instead," suggests that React is being used without being explicitly imported in a modular JavaScript file. 
    To fix this issue, import React at the beginning of your file where you're using JSX or React components.
*/

import {useTranslation} from 'react-i18next';

const NextButton=()=>{
    const [t,i18n] = useTranslation("global");
    return(
        /* Trong App.css, class nextLink sẽ giúp a có hình dạng button */
        <button className="nextLink round"> {t("next_button.btnContent")} &#8250;</button>
    )
}

export default NextButton;