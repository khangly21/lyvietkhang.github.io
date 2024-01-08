//rafce

import React from 'react'
import handleButtonClick from '../js/handleButtonClick_Words';
import {Link} from 'react-router-dom';
import BackButton from './BackButton';

const Words = () => {
    const buttonValues = ["NFT", "Ordinal", "Meme", "Blockchain", "Testnet", "Mainnet", "Web3", "Gas", "Wallet", "dApps"];
    
    return (
      <>
           <div id="words" className="button-container">
              {buttonValues.map((value, index) => (
                 <button id={value} onClick={handleButtonClick} key={index} className="btn btn-success moving-button"> {/* id sẽ có mặt trên URL */}
                   {value}
                 </button>
              ))}
            
            
           </div>

            {/* khi cho Link tag nằm trong div thì trong mobile view không tìm ra nút này */}
            <Link to='/' >
               <BackButton/>
            </Link>
      </>
       

       
    )
}

export default Words