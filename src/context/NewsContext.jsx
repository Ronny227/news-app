import { Children, createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({children}) => {

    const initialState = {
        allNews : [
            {
            "source": {
            "id": "handelsblatt",
            "name": "Handelsblatt"
            },
            "author": "Frank Wiebe",
            "title": "Strategie: Der Zinsgipfel steht bevor – Wie Anleger ihr Depot vorbereiten können",
            "description": "Viele hoffen, dass die US-Notenbank in dieser Woche zum letzten Mal für eine lange Zeit die Zinsen erhöht. Was Fidelity-Experte Carsten Roemheld Anlegern nun rät.",
            "url": "https://www.handelsblatt.com/finanzen/anlagestrategie/trends/letzte-zinserhoehung-erwartet-wie-anleger-ihr-depot-vorbereiten-koennen/29273940.html",
            "urlToImage": "https://www.handelsblatt.com/images/fed-chef-jerome-powell/29275238/3-format2003.jpg",
            "publishedAt": "2023-07-26T06:17:59Z",
            "content": "Fed-Chef Jerome PowellIn dieser Woche stehen Zinsenscheidungen der Fed und der EZB an.\r\n(Foto: AP)\r\nFrankfurt Die Stimmung hat sich aufgehellt. In dieser Woche, so hoffen viele Anleger und Anlegerinn… [+7211 chars]"
            }
        ]
    }
    
    const [state,dispatch]=useReducer(NewsReducer,initialState);


        return (
            <NewsContext.Provider value={{ ...state, dispatch }}>
                {children}
            </NewsContext.Provider>  
        )

}

export default NewsContext