//rafce

import React,{useState} from 'react';
import {Modal, ModalHeader, ModalBody,ModalFooter} from 'reactstrap';
import {Button} from 'reactstrap';
import {useTranslation} from 'react-i18next';

const SignUpForm = () => {
    const [t]= useTranslation("global");
    //signup modal
    const [isSignUpModalOpen, setSignUpModalOpen]=useState(false);
    const toggleSignUpModal=()=>setSignUpModalOpen(!isSignUpModalOpen);

    console.log("signup",isSignUpModalOpen)

    return (
        <div>
            <Button style={{marginLeft:"10px", marginRight:"10px"}}  color="primary" onClick={toggleSignUpModal}>{t("button.signup")}</Button>
            {/* So, the isOpen prop manages the visibility of the modal, and the toggle prop is a function that toggles this visibility state, allowing you to control when the modal appears or disappears. */}
            <Modal isOpen={isSignUpModalOpen} toggle={toggleSignUpModal}>
                   <ModalHeader toggle={toggleSignUpModal}>{t("button.signup")}</ModalHeader>
                   {/*
                       ✍️Ask: <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
the toggle here is the Close button?
                       ⚡️ChatGPT3: Yes, in ReactStrap's ModalHeader component, the toggle prop is used to define the action that occurs when the close button within the modal header is clicked. When you provide the toggle prop with a function (toggleModal in this case), clicking the close button in the modal header triggers that function.

So, toggleModal is the function responsible for toggling the visibility of the modal when the close button in the header is clicked.

                   */}
                   <ModalBody>
                        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                           
                           <div>
                                <label htmlFor="email">{t("mail.label")}</label> <br/>
                                <input type="email" id="email" name="email" placeholder='satoshi@gmail.com'/>
                           </div>
                           <br/>
                           <div>
                                <label className="checkbox-inline">
                                    <input type="checkbox" value=""/> {t("service.agree")}
                                </label>
                           </div>

                           <br/>
                           <button className="btn btn-warning">{t("button.signup")}</button>
                        </div>
                   </ModalBody>
                   <ModalFooter>
                        <Button color="primary" onClick={toggleSignUpModal}> {/* tương tự nút X trong ModalHeader */}
                            Close
                        </Button>
                   </ModalFooter>
            </Modal>
        </div>
    )
}

export default SignUpForm