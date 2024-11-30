import * as LOTOVALUES from "../loto";

describe('LOTOVALUES constants', () => {
    test('should be equals to theses values', () => {
        expect(LOTOVALUES.MAIN_MIN).toBe(1)
        expect(LOTOVALUES.MAIN_MAX).toBe(49)
        expect(LOTOVALUES.MAIN_RANGE).toBe(5)
        expect(LOTOVALUES.STAR_MIN).toBe(1)
        expect(LOTOVALUES.STAR_MAX).toBe(10)
        expect(LOTOVALUES.STAR_RANGE).toBe(1)
     

    })
    
})
