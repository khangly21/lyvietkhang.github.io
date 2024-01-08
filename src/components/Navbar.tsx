//rafce
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

const Navbar = () => {
  const [t] = useTranslation("global");
  return (
    <div style={{display:"flex", justifyContent:"right"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            {/* <div style={{border:"1px solid black"}}>{t("button.login")}</div>
            <div style={{border:"1px solid black"}}>{t("button.signup")}</div>
            <div style={{border:"1px solid black"}}>{t("button.logout")}</div> */}

            <Modal isOpen={isOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
              <ModalBody>
                <p>Modal Content Goes Here</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleModal}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    </div>
  )
}

export default Navbar