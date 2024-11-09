import { ToastAndroid } from "react-native";
import * as LOTOVALUES from "@/constants/loto"

const updateBallInputFromUser = (inputUser: number, range: number, currentArray: number[]) => {

    const isInvalidTypesPArameters = typeof inputUser !== "number" || typeof range !== "number"
    const isCurrentArrayParameterInvalid = (!Array.isArray(currentArray)) ||(!currentArray.every(value=>typeof value==="number"))
    if ( isInvalidTypesPArameters|| isCurrentArrayParameterInvalid) {
        throw new Error("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    else if (currentArray.includes(inputUser)) {
        return currentArray.filter(value=>value!==inputUser)
    }
    else if (currentArray.length >= range) {
        if (currentArray.length >= LOTOVALUES.MAIN_RANGE) ToastAndroid.show("5 étoiles maximum sélectionnables", ToastAndroid.SHORT)
        if (currentArray.length >=LOTOVALUES.STAR_RANGE) ToastAndroid.show("Une étoile maximum sélectonnable",ToastAndroid.SHORT)
        return currentArray
    } 
        
    else {
        currentArray.push(inputUser)
        return currentArray
    }
};

export default updateBallInputFromUser