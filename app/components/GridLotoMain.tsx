import * as LOTOVALUES from "@/constants/loto";
import gridLotteryBalls from "@/utils/gridLotteryBalls";
import { clsx } from "clsx";
import { View } from "react-native";
import useLoto from "../store/useLoto";
import BallMainModel from "./BallMainModel";

const GridLotoMain = () => {
    const mainBallsGrid = gridLotteryBalls(LOTOVALUES.MAIN_MIN, LOTOVALUES.MAIN_MAX)
   
   
    return (<View className={clsx("flex flex-row w-full gap-2 flex-wrap p-2")}>
        {mainBallsGrid.map(value => (
            <BallMainModel key={ value} ballValue={value}/>)
        )}
    </View>)
};

export default GridLotoMain