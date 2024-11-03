import React from "react";
import { View } from "react-native";
import GridLotoMain from "./GridLotoMain";
import GridLotoStar from "./GridLotoStar";
import Instruction from "./Instruction";
import GridLotoTitle from "./LotoSelectStarTitle";

const Loto = () => {
    return <View className="pt-2 pl-2 bg-green-900 flex-1" testID="loto">
        <Instruction />
        <GridLotoMain/>
        <GridLotoTitle/>
        <GridLotoStar/>
    </View>
}

export default Loto