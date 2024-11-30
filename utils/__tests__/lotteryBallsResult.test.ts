import "@testing-library/react-native/extend-expect";
import checkBetween, * as Utilities from "../checkBetween";
import randomBallResult from "../randomBallsResult";
describe(`${randomBallResult.name} function`, () => {
    test('should call checkBetween function', () => {
        const mockCheckBetween = jest.spyOn(Utilities, "default")
        const [min, max, range] = [1, 10, 5]
        const currentAray= [1,2,3]
        randomBallResult(min, max, range, currentAray)
        expect(checkBetween).toHaveBeenCalled()
        mockCheckBetween.mockReset()
    })
    test('should return array ', () => {
        const [min, max, range] = [1, 10, 5]
        const currentAray= [1,2,3]
        const ballsResult = randomBallResult(min,max,range,currentAray)
        expect(Array.isArray(ballsResult)).toBe(true)
    }),
    test('should return array with length equals range parameter', () => {
        const [min, max, range] = [1, 10, 5]
        const currentAray= [1,2,3]
        const ballsResult = randomBallResult(min,max,range,currentAray)
        expect(ballsResult.length).toBe(5)
    }),
    test('should array contains numbers between min and max parameter', () => {
        const [min, max, range] = [1, 10, 5]
        const currentAray= [1,2,3]
        const ballsResult = randomBallResult(min, max, range,currentAray)
        expect(ballsResult.every(value=> value>=min && value <=max))
    })

    
    
    
})

