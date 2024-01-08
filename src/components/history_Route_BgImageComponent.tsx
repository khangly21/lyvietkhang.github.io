import {useEffect} from 'react';

import { useHistory } from 'react-router-dom';

//instead of manipulate document.body directly in each components, how can I reuse the RouteComponent for all ?
const Route_BgImageComponent= ({children})=>{
    const history = useHistory();
    useEffect(()=>{
        //this component listens to route changes and updates the destination component's background accordingly
        //chạy hàm listen thì sẽ tạo ra hàm unlisten, which is a function that can be called to unsubscribe or remove the listener
        const unlisten = history.listen((location)=>{
            const currentPath= location.pathname;
            let backgroundImage;

            //set value for backgroundImage based on route changes
            switch(currentPath){
                case'/home':
                    backgroundImage='url("https://media.giphy.com/media/3ROGCp62zakRW/giphy.gif")';
                case '/words':
                    backgroundImage='url("./assets/glassOfEarth.jpg")';     
                break;
                //more cases if needed
                default:
                    backgroundImage=''; //default background image
                //Yes, that's correct! The document.body.style.backgroundImage property in JavaScript expects a string value that represents the URL to the background image you want to apply to the body element. This string value needs to follow the CSS syntax for specifying a URL.
                document.body.style.backgroundImage=backgroundImage;
            }
        });

        //clean up by call unlisten() when component unmounts
        return ()=> unlisten();
    }, [history])
    /*
        Exactly! The useEffect hook runs whenever its dependencies change. In this case, the dependency is the history object obtained from useHistory(). When the history object changes (i.e., when route changes happen), the useEffect callback is executed. Inside this callback, the logic to update the body's background image based on the current route is implemented.
    */
}

export default Route_BgImageComponent;