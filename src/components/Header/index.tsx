import { View, Image, Text } from "react-native";
import type { ImageResizeMode, ImageSourcePropType, ImageStyle, ViewProps } from "react-native";
import { twMerge } from 'tailwind-merge'

type Props = ViewProps & {
    label: string
    img?: ImageSourcePropType
    imgStyle?: ImageStyle
    imgMode?: ImageResizeMode
}

export default function Header({ label, img, imgStyle, imgMode = "contain", className }: Props){
    return(
        <View className={twMerge("flex justify-center items-center h-1/2 gap-y-8 mt-12", className)}>
            { img && <Image source={img} style={imgStyle} resizeMode={imgMode} /> }
            <Text className="text-4xl text-center font-bold text-[#086972]"> {label} </Text>
        </View>
    )
}