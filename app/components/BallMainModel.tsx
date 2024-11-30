import { useState } from "react";
import { Text } from "react-native";
import { twJoin } from "tailwind-merge";
import useLoto from "../store/useLoto";

const BallMainModel = ({  ballValue }: { ballValue: number; }) => {
    const [isSelected] = useState(false)
    const { updateMainBallFromUser , mainBalls } = useLoto()
    const handlePress = () => {
        updateMainBallFromUser(ballValue)
    }
    return (<Text onPress={handlePress} className={twJoin(" border-2 p-4 m-auto w-16 h-16 font-extrabold rounded-md align-middle text-center",  mainBalls.includes(ballValue) ? "bg-red-800 text-white":"bg-white text-blue-700" )}>{ballValue}</Text>)
};

export default BallMainModel