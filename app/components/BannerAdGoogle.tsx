import { useRef } from "react";
import { View } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId:string = __DEV__ ? TestIds.ADAPTIVE_BANNER : "ca-app-pub-7151192490184268/9650421089"

const BannerAdGoogle = () => {
  const bannerRef = useRef<BannerAd>(null)
  return (
    <View>
      <BannerAd ref={bannerRef} size={BannerAdSize.MEDIUM_RECTANGLE} unitId={ adUnitId} />
    </View>
  )
};

export default BannerAdGoogle;
