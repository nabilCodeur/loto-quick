import { useState } from "react";
import { Text } from "react-native";
import { twJoin } from "tailwind-merge";

const BallStarModel = ({ value }: { value: number; }) => {
    const [isSelected] = useState(false)
    
    return (<Text className={twJoin("text-xl border-2 rounded-full w-16 h-16 text-center shadow-black align-middle font-extrabold", isSelected?"bg-white text-red-900":"bg-red-900 text-white")}>{value}</Text>)}

export default BallStarModel