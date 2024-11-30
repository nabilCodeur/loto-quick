import checkBetween from "./checkBetween";

const randomBetween = (min: number, max: number):number=> {
    checkBetween(min,max)
    return Math.floor(Math.random()*(max-min+1))+min
};

export default randomBetween