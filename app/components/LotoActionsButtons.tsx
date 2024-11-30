import { Pressable, View, Image} from "react-native"
import useLoto from "../store/useLoto";


const LotoActionsButtons = () => {
  const { randomBallsMain, randomStarMain, resetAll } = useLoto()
  
  const handleRandomButton = () => {
    randomBallsMain()
    randomStarMain()
  }

  
  return (
    <View className="flex flex-row gap-8 w-full justify-center my-8  ">
       <Pressable onPress={handleRandomButton} className="size-16" >
        <Image className="size-16"
          source={require("@/assets/images/icon.png")}
        />
      </Pressable>
      <Pressable onPress={resetAll} className="size-16" >
        <Image className="size-16"
          source={require("@/assets/images/gui-eraser.png")}
        />
      </Pressable>
    </View>
  )
};

export default LotoActionsButtons;
