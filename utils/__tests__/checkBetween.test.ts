import checkBetween from "../checkBetween";

describe(`${checkBetween.name} function`, () => {

    test("should return error with wrong type parameter",() => {
        expect(()=>checkBetween(1,"10")).toThrow("les paramètres doivent être de type number")
    }
    )
    test("should throw error with min parameter less or equal than max paramter",() => {
        expect(() => 
            checkBetween(50,5)).toThrow("le paramètre min doit être inférieur au paramètre max")
        }
    )
    test("should throw error if at least one parameter is negative",() => {
        expect(() =>  checkBetween(-1,5)).toThrow("les deux paramètres doivent être positifs")
        expect(() =>  checkBetween(-10,-5)).toThrow("les deux paramètres doivent être positifs")
    }
    )
}
   
    )
    