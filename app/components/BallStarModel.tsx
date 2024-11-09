import { useState } from "react";
import { Text } from "react-native";
import { twJoin } from "tailwind-merge";
import useLoto from "../store/useLoto";

const BallStarModel = ({ value }: { value: number; }) => {
    
    const { updateStarBallFromUser , starBalls } = useLoto()
    
    const handlePress = () => {
        updateStarBallFromUser(value)
    }
    
    return (<Text onPress={ handlePress} className={twJoin("text-xl border-2 rounded-full w-16 h-16 text-center shadow-black align-middle font-extrabold", starBalls.includes(value)?"bg-red-800 text-white":"bg-white text-red-900")}>{value}</Text>)}

export default BallStarModel