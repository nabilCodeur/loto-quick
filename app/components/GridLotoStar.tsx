import * as VALUES from "@/constants/loto";
import gridLotteryBalls from "@/utils/gridLotteryBalls";
import { useState } from "react";
import { View } from "react-native";
import BallStarModel from "./BallStarModel";


const GridLotoStar = () => {
    const gridLoteryBallsStar = gridLotteryBalls(VALUES.STAR_MIN, VALUES.STAR_MAX);
   
    return <View className="flex flex-row w-full gap-2 flex-wrap p-2">
        {gridLoteryBallsStar.map(value =>
            <BallStarModel value={value} key={value} />)}
</View>
}

export default GridLotoStar
