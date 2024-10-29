import "@testing-library/react-native/extend-expect";
import checkBetween, * as Utilities from "../checkBetween";
import lotteryBallsResult from "../lotteryBallsResult";
describe('lotteryBallsResult function', () => {
    test('should call checkBetween function', () => {
        const mockCheckBetween = jest.spyOn(Utilities, "default")
        const [min,max,range]=[1,10,5]
        lotteryBallsResult(min, max, range)
        expect(checkBetween).toHaveBeenCalled()
        mockCheckBetween.mockReset()
    })
    test('should return array ', () => {
        const [min,max,range]=[1,10,5]
        const ballsResult = lotteryBallsResult(min,max,range)
        expect(Array.isArray(ballsResult)).toBe(true)
    }),
    test('should return array with length equals range parameter', () => {
        const [min,max,range]=[1,10,5]
        const ballsResult = lotteryBallsResult(min,max,range)
        expect(ballsResult.length).toBe(5)
    }),
    test('should array contains numbers between min and max parameter', () => {
        const [min, max, range] = [1, 10, 5]
        const ballsResult = lotteryBallsResult(min, max, range)
        expect(ballsResult.every(value=> value>=min && value <=max))
    })

    
    
    
})

