const checkBetween = (min:number, max:number) => {
    if (typeof min !== "number" || typeof max !== "number") throw new Error("les paramètres doivent être de type number")
        if (min >= max) throw new Error("le paramètre min doit être inférieur au paramètre max")
        if(min<0 || max<0) throw new Error("les deux paramètres doivent être positifs")
};

export default checkBetween