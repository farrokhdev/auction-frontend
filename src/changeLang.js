import i18n from "./i18n"

const changeLang = () => {
    if(i18n.language === "fa"){
        i18n.changeLanguage("en")
    }else{
        i18n.changeLanguage("fa")
    }
}

export default changeLang;