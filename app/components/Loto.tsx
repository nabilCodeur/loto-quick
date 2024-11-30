import React from "react";
import { ScrollView } from "react-native";
import GridLotoMain from "./GridLotoMain";
import GridLotoStar from "./GridLotoStar";
import Instruction from "./Instruction";
import GridLotoTitle from "./LotoSelectStarTitle";
import DrawLotoResult from "./DrawLotoResult";
import LotoActionsButtons from "./LotoActionsButtons";
import BannerAdGoogle from "./BannerAdGoogle";

const Loto = () => {
    return <ScrollView className="pt-2  bg-green-900 gap-y-4 flex-1 pb-4" testID="loto">
        <BannerAdGoogle/>
        <Instruction />
        <GridLotoMain/>
        <GridLotoTitle/>
        <GridLotoStar />
        <LotoActionsButtons/>
        <DrawLotoResult/>
    </ScrollView>
}

export default Loto