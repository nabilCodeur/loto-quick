import * as Factory from "@/utils/checkBetween";
import gridLotteryBalls from "../gridLotteryBalls";

describe("gridLoterryBalls function", () => {

  
    test("should calls checkBetween function", () => {
        const mockCheckBetween = jest.spyOn(Factory, "default");
        const min = 1;
        const max = 10;
      
        gridLotteryBalls(min, max);
        expect(mockCheckBetween).toHaveBeenCalledTimes(1);
        mockCheckBetween.mockClear();
        gridLotteryBalls(min, max);
        expect(mockCheckBetween).toHaveBeenCalledWith(min, max);
 
    }
    );
    test("should contains min number in array", () => {
        const min = 1;
        const max = 10;
        const result = gridLotteryBalls(min, max);
        expect(result.includes(min)).toBe(true);
    }
    );
    test("should contains max number in array", () => {
        const min = 1;
        const max = 10;
        const result = gridLotteryBalls(min, max);
        expect(result.includes(max)).toBe(true);
    }
    );
    test("should contains values 1,2,3,4,5", () => {
        const min = 1;
        const max = 5;
        const result = gridLotteryBalls(min, max);
        expect(result.includes(1));
        expect(result.includes(2));
        expect(result.includes(3));
        expect(result.includes(4));
        expect(result.includes(5));
    }
    );
})
 