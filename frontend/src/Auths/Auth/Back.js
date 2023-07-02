import { createContext, useContext } from "react";

//create a context
const BauthContext = createContext();


export function Bauth( {children} ){





    //the Bauth function will return the Context provider ..
    return <BauthContext.Provider></BauthContext.Provider>

}