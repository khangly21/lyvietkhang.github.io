//rafce

import React from 'react';
import {Button} from 'reactstrap';
import {useTranslation} from 'react-i18next'

const LogoutButton = () => {
    const [t] = useTranslation("global");

    return (
      <div>
          <Button style={{marginLeft:"10px"}} color='success'>{t("button.logout")}</Button>
      </div>
    )
}

export default LogoutButton