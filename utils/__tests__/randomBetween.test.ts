import * as Factory from "../checkBetween";
import randomBetween from "../randomBetween";


describe("randomBetween component",() => {
    test("should return a result to be max parameter",() => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.99),
            expect(randomBetween(1, 10)).toBe(10)
        jest.spyOn(global.Math,"random").mockRestore()
    }
    )
    test("should return a result to be  min parameter", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.01)
        expect(randomBetween(2,20)).toBe(2)
    })
    test("checkBetween function should be called",() => {
        const mockCheckBetween = jest.spyOn(Factory, "default")
        randomBetween(1,10)
        
  
        expect(mockCheckBetween).toHaveBeenCalled()
    }
    )
    test("checkBeween function should be called with min and max parameters",() => {
        const mockCheckBetween = jest.spyOn(Factory, "default")
        const min = 1
        const max = 10
        randomBetween(min, max)
        expect(mockCheckBetween).toHaveBeenCalledWith(min,max)
    }
    )
}
)