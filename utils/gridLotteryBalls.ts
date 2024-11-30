import checkBetween from "./checkBetween";

const gridLotteryBalls = (min: number, max: number):number[] => {
    checkBetween(min,max)
    const lotteryBalls: number[] = []
    for (let index = min; index <= max; index++){
        lotteryBalls.push(index)
    }
    return lotteryBalls
}

export default gridLotteryBalls