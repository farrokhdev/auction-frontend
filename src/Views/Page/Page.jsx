import React from 'react';
import { useTranslation } from 'react-i18next';
import changeLang from '../../changeLang';


const Page = () => {

    const { t, i18n } = useTranslation()
    return (
        <div>
           <h1>{t("appName")}</h1>
           <button onClick={()=>changeLang()}>{t("translate")}</button>
        </div>
    );
}

export default Page;
