const updateBallInputFromUser = (inputUser: number, range: number, currentArray: number[]) => {

    const isInvalidTypesPArameters = typeof inputUser !== "number" || typeof range !== "number"
    const isCurrentArrayParameterInvalid = (!Array.isArray(currentArray)) ||(!currentArray.every(value=>typeof value==="number"))
    if ( isInvalidTypesPArameters|| isCurrentArrayParameterInvalid) {
        throw new Error("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    else if (currentArray.includes(inputUser)) {
        return currentArray.filter(value=>value!==inputUser)
    }
    else if (currentArray.length >= range) return currentArray
    else {
        currentArray.push(inputUser)
        return currentArray
    }
};

export default updateBallInputFromUser