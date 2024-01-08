//rafce

import React, {useState} from 'react';

import {Modal} from 'reactstrap';
import {Button, ModalHeader, ModalBody , ModalFooter} from 'reactstrap';
import {useTranslation} from 'react-i18next';

const LoginForm = () => {
    const [t] = useTranslation("global");
    
    //login modal
    const [isLoginModalOpen, setLoginModalOpen]=useState(false);
    const toggleLoginModal=()=>setLoginModalOpen(!isLoginModalOpen);

    console.log("login",isLoginModalOpen);
    

    return (
        <div>
                <Button style={{marginRight:"10px"}} color="primary" onClick={toggleLoginModal}>{t("button.login")}</Button>
                
                <Modal isOpen={isLoginModalOpen} toggle={toggleLoginModal}>
                   <ModalHeader toggle={toggleLoginModal}>{t("button.login")}</ModalHeader>
                   {/*
                       ✍️Ask: <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
the toggle here is the Close button?
                       ⚡️ChatGPT3: Yes, in ReactStrap's ModalHeader component, the toggle prop is used to define the action that occurs when the close button within the modal header is clicked. When you provide the toggle prop with a function (toggleModal in this case), clicking the close button in the modal header triggers that function.

So, toggleModal is the function responsible for toggling the visibility of the modal when the close button in the header is clicked.

                   */}
                   <ModalBody>
                        {/* https://www.w3schools.com/Bootstrap/bootstrap_forms_inputs.asp */}
                        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                           
                           <div>
                                <label htmlFor="email">{t("mail.label")}</label> <br/>
                                <input type="email" id="email" name="email" placeholder='satoshi@gmail.com'/>
                           </div>
                           <br/>
                           
                           <button className="btn btn-warning">{t("button.login")}</button>
                        </div>
                        
                   </ModalBody>
                   <ModalFooter>
                        <Button color="primary" onClick={toggleLoginModal}> {/* tương tự nút X trong ModalHeader */}
                            {t("button.close")}
                        </Button>
                   </ModalFooter>
                </Modal>
        </div>
        
    )
}

export default LoginForm