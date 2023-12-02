import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

import type { ImageSourcePropType } from "react-native";
import classNames from "classnames";

type Props = {
    name: string 
    location: string 
    closeAt: string 
    banner: ImageSourcePropType
    icon: ImageSourcePropType
}

export default function BannerStore({banner, name, location, closeAt, icon}: Props){
    return(
        <View className="w-full h-48">
            <ImageBackground className="flex-1 overflow-hidden" source={banner}>
                <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className="p-4">
                    <Image source={icon} resizeMode="contain" className="w-20 h-20 mx-auto" />
                    <View className="flex-col mx-auto">
                        <Text className="text-white text-center text-lg font-extrabold uppercase">{name}</Text>
                        <Text className="text-white text-center text-xs">{location}</Text>
                        <View className="bg-[#00CC6A] rounded-full px-4 py-1 mt-2">
                            <Text className=" text-white rounded-full text-center font-semibold">{closeAt}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}