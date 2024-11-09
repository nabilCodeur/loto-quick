import { PropsWithChildren } from 'react';
import { Text } from "react-native";
import { twMerge } from "tailwind-merge";


type ResultModelProps = {
  bgColor: string,
  textColor:string 
}
const ResultModel = (props:PropsWithChildren<ResultModelProps>) => {
  return (
    <Text className={twMerge(`${props.textColor}` , `${props.bgColor}` , "border-2  rounded-full size-16 text-center align-middle text-xl font-bold")}>
      {props.children}
    </Text>
  )
};

export default ResultModel;
