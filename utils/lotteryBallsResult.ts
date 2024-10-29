import checkBetween from "./checkBetween";
import randomBetween from "./randomBetween";

const lotteryBallsResult = (min:number,max:number,range:number):Array<number>=> {
    checkBetween(min, max)
    const balls = new Set<number>
    while (balls.size < range) {
        balls.add(randomBetween(min, max))
    }
    return Array.from(balls)
    
};

export default lotteryBallsResult