import { Text, View } from "react-native";
import useLoto from "../store/useLoto";
import ResultModel from "./ResultModel";

const DrawLotoResult = () => {
    const { mainBalls, starBalls} = useLoto()
    
   
    return <View className="gap-y-2 my-3 bg-orange-500 py-4">
        <View className="flex flex-row justify-center gap-x-2">
            {mainBalls.map(value => <ResultModel key={value} bgColor={"bg-white"} textColor={"text-green-800"}>{value}</ResultModel>)}
        </View>
      
        {starBalls.length ? <Text className="text-2xl text-center text-white">{"étoile".toLocaleUpperCase()}  </Text>:null}
            <View className="flex flex-row justify-center">
            {starBalls.map(value => <ResultModel key={value} bgColor={"bg-white"} textColor={"text-red-800"}>{value}</ResultModel>)}
            </View>
    
    </View>
}

export default DrawLotoResult