import * as VALUES from "@/constants/loto";
import gridLotteryBalls from "@/utils/gridLotteryBalls";
import { useState } from "react";
import { View } from "react-native";
import BallStarModel from "./BallStarModel";


const GridLotoStar = () => {
    const gridLoteryBallsStar = gridLotteryBalls(VALUES.STAR_MIN, VALUES.STAR_MAX);
   
    return <View className="flex flex-row w-full justify-center">
        <View className="flex flex-row gap-2 flex-wrap px-2">
        {gridLoteryBallsStar.map(value =>
            <BallStarModel value={value} key={value} />)}
            </View>
</View>
}

export default GridLotoStar
