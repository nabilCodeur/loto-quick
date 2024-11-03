import updateBallInputFromUser from "../updateBallFromUser";

describe(`${updateBallInputFromUser.name} function`, () => {
    test("should throw Error because parameter inputUser is not valid", () => {
        const [inputUSer, range] = ["1", 10]
        const currentAray=[1,2,3] 
        expect(() => {
            updateBallInputFromUser(inputUSer,range,currentAray)
        }
        ).toThrow("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    )
    test("should throw Error because parameter range is not valid", () => {
        const [inputUSer, wrongRange] = [1, "5"]
        const currentAray=[1,2,3] 
        expect(() => {
            updateBallInputFromUser(inputUSer,wrongRange,currentAray)
        }
        ).toThrow("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    )
    test("should throw Error because parameter currentArray is not an array", () => {
        const [inputUSer, range , randomNumber] = [1, 5,2]
        const wrongArray = new Set<number>()
        wrongArray.add(randomNumber)
        expect(() => {
            updateBallInputFromUser(inputUSer,range,wrongArray)
        }
        ).toThrow("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    )
    test("should throw Error because parameter currentArray contains not only number", () => {
        const [inputUSer, range] = [1, 5]
        const wrongArray= [5,"3"]
        expect(() => {
            updateBallInputFromUser(inputUSer,range,wrongArray)
        }
        ).toThrow("Vérifier les types des paramètres de la fonction addBallFromUser")
    }
    )
    test('should return currentArray parameter because currentArray is maximum size', () => {
        const [inputUser, range]: [number, number] = [8, 5]
        const currentArray = [1,2,3,4,5]
        const result = updateBallInputFromUser(inputUser, range, currentArray)
        expect(result).toEqual(currentArray)
    })
    test("should remove inputUSer equals 8 from currentArray because already present", () => {
        const [inputUser, range]: [number, number] = [8, 5]
        const currentArray = [6, 8, 10]
        const result = updateBallInputFromUser(inputUser, range, currentArray)
        expect(result).not.toContain(inputUser)
    })
    test("should returns array with new value inputUSer equals 8" , () => {
        const [inputUser, range]: [number, number] = [8, 5]
        const currentArray = [6, 10]
        const result = updateBallInputFromUser(inputUser, range, currentArray)
        expect(result).toContain(inputUser)
    }
    )
    
})
