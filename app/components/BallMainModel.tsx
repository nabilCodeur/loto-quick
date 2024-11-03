import { useState } from "react";
import { Text } from "react-native";
import { twJoin } from "tailwind-merge";

const BallMainModel = ({  ballValue }: { ballValue: number; }) => {
    const [isSelected]=useState(false)
    return (<Text  className={twJoin(" border-2 p-4 m-auto w-16 h-16 font-extrabold rounded-md align-middle text-center",  isSelected ? "bg-zinc-600 text-white":"bg-white text-blue-700" )}>{ballValue}</Text>)
};

export default BallMainModel