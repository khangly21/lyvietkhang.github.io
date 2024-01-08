import React from 'react'; 

import {useTranslation} from 'react-i18next';

const BackButton=()=>{
    const [t,i18n] = useTranslation("global");
    return(
        //phải là button, nếu là a là có hình dạng khác
        <div style={{display:"Flex", justifyContent:"Center"}}>
            <button className="backLink round"> {t("back_button.btnContent")} &#8250;</button> 
        </div>
    )
}

export default BackButton;