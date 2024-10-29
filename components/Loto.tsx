import { View } from "react-native";
import Instruction from "./Instruction";

const Loto = () => {
    return <View className="pt-2 pl-2 bg-green-900 flex-1" testID="loto">
        <Instruction/>
    </View>
}

export default Loto