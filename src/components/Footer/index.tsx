import { View, Image } from "react-native"
import type { ViewProps } from "react-native"

import { twMerge } from "tailwind-merge";
import Barueri from "../../assets/barueri.png";

type Props = ViewProps

export default function Footer({ className }: Props){
    return(
        <View className={twMerge("flex -z-10 flex-row justify-center absolute w-full h-full", className)}>
            <Image source={Barueri} resizeMode="contain" className="w-48 h-16 self-end" />
        </View>
    )
}