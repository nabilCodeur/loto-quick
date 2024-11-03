import checkBetween from "./checkBetween";
import randomBetween from "./randomBetween";

const randomBallResult = (min: number, max: number, range: number, currentLotoResult: number[]): Array<number> => {
    
    checkBetween(min, max)
    const balls = new Set<number>(currentLotoResult)
    if (balls.size >= range) {
        return currentLotoResult
    }
    while (balls.size < range) {
        balls.add(randomBetween(min, max))
    }
    return Array.from(balls)
    
};

export default randomBallResult