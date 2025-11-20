import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
   const languages=[
   { code:"en",lang:"English"},
   { code:"bn",lang:"Bangla"}
    ]
    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng);
        console.log(lng);
    }
const LanguageSelector = () => {
   const {i18n} = useTranslation();
    return (
        <div className=' text-black border-2'>
            {
                languages.map((lng)=>{
                    return(   
                    <button className={lng.code === i18n.language?"selected":""} key={lng.code} onClick={()=>changeLanguage(lng.code)}>{lng.lang}</button>);

                })
            }
         
        </div>
    );
};

export default LanguageSelector;