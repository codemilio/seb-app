import { View, Image } from "react-native"
import Barueri from "../../assets/barueri.png";

export default function Footer(){
    return(
        <View className="flex flex-row justify-center absolute w-full h-full">
            <Image source={Barueri} resizeMode="contain" className="w-48 h-16 self-end top-8" />
        </View>
    )
}