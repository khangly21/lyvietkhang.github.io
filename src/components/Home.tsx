import React from 'react';

//make use of the translation with the hook useTranslation
import { useTranslation } from 'react-i18next'; //không phải useTransition from 'react'
import NextButton from './NextButton'; //Nếu ghi {NextButton} thì báo lỗi module NextButton không có exported member NextButton, vì nó mặc định exported 
import Header from './Header';

//transition giữa 2 trang
import { Link } from 'react-router-dom';

//route transition, background-image transition directly on the document.body, instead of App.css
import {useEffect} from 'react';


const Home=()=>{
    //use the translation hook provided from react-i18next
    //global as param to make use of the translation of that file
    //we can pass multiple ones as an array this hook returns
        /// the translation function
           //// to use the translation function, pass the key we wanna access
        /// and the i18next object
    const [t, i18n] = useTranslation("global"); //translation namespace: "global"

    /*
        👉Problem: React, when I route from Route 1 (background image x) to Route 2 (background image y). How to change body's background image from x to y ?
        ️✔ Solution: In React, you can change the background image of the body when navigating between routes by utilizing the useEffect hook along with the history object from react-router-dom.
    */
    
    //now we will see en display as default language
    return(
        <div id="homepage">
            <Header/>
            <br/><br/>
            <strong className="container"  style={{color:"purple"}}>
                {t("home.body")}
            </strong>
            <br/><br/>

            {/* Muốn nút Link tới route khác trong App.jsx , mà không bị refresh trang như thẻ a,  thì dùng Link wrap nút này lại */}
            <Link to='/words'>
               <NextButton/>
            </Link>
            
        </div>
    )
}

export default Home;