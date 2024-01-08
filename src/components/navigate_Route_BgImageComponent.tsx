import React from 'react';
import {useNavigate, Route} from 'react-router-dom';

const navigate_Route_BgImageComponent = ({children}) => {
    const navigate= useNavigate();

    const handleRouteChange = () =>{
        const currentPath = window.location.pathname;

        if(currentPath==='/'){
            //tuân thủ CSS
            document.body.style.backgroundImage= 'url("https://media.giphy.com/media/3ROGCp62zakRW/giphy.gif")';
            document.body.style.backgroundRepeat='no-repeat';
        }else if(currentPath=== '/words'){
            document.body.style.backgroundImage= 'url("https://media.discordapp.net/attachments/1109305814914699435/1190274044893872218/funiximage_924909624509992960_the_flat_earth__not_globular__wit_2b56b953-7865-4adf-925a-34ffffa953db.png?ex=65aa6e96&is=6597f996&hm=b502918a9f64c03cfa6d9274a35cb9e5026675733ac860642a3c50aca52ff428&=&format=webp&quality=lossless&width=542&height=542")'; 
            document.body.style.backgroundRepeat='no-repeat';
            document.body.style.backgroundSize='1300px 550px';
            document.body.style.backgroundPosition='center';
        }
    }

    // Change background image on initial render
    handleRouteChange();

    return (
        <div>
          {React.Children.map(children, (child) =>
             React.cloneElement(child, { navigate, handleRouteChange })
          )}
        </div>
    )
}

export default navigate_Route_BgImageComponent;
