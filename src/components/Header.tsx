//rafce

import React from 'react';   //thử bỏ dòng này sẽ bị báo lỗi ở JSX div
import {useTranslation} from 'react-i18next';

const Header = () => {
  const [t,i18n] = useTranslation("global");

  //now make button to switch between languages
  //oh, we can use Typescript now!!
  const handleChangeLanguage=(lang:string)=>{
      i18n.changeLanguage(lang);
  };
  //next, return a button that has onClick as param

  return (
    <div>
        <h1 style={{color:"green"}}>{t("header.message")}</h1>
        <div style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center", height:"50vh"}}>
           <h3 id="author" >{t("author.content")}</h3>

           <button onClick={()=>handleChangeLanguage("en")}>EN</button>
           <button onClick={()=>handleChangeLanguage("kor")}>KOR</button>  
           <button onClick={()=>handleChangeLanguage("vie")}>VIE</button>  
        </div>
        {/*
           To center flex items on a page, you can use a combination of flexbox properties
              .container {
                 display: flex;
                 justify-content: center;  Horizontally center the flex items 
                 align-items: center;      Vertically center the flex items 
                 height: 100vh;            Set the container height to occupy the full viewport height 
               }
        */}
        
        {/* vậy dùng 3 nút cũng tương tự 1 flex canh giữa grid 1fr 1fr 1fr */}
    </div>
  )
}

export default Header