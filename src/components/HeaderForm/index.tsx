import { View, Image, Text } from "react-native";
import type { ImageResizeMode, ImageSourcePropType, ImageStyle, ViewProps } from "react-native";
import { twMerge } from 'tailwind-merge'

type Props = ViewProps & {
    label: string
    
    img?: ImageSourcePropType,
    imgMode?: ImageResizeMode,
    imgStyle?: ImageStyle,
    userRole: "CLIENT" | "SELLER"
}

export default function HeaderForm({ userRole, label, img, imgStyle, imgMode = 'contain', className }: Props){
    
    const ROLE_DICTIONARY = {
        "CLIENT": 'cliente',
        "SELLER": 'vendedor'
    }

    return(
        <View className={twMerge("flex mt-8 flex-row", className)}>
            { img && <Image source={img} style={imgStyle} resizeMode={imgMode} /> }
            <View className="flex flex-col items-start justify-end gap-y-2">
                <Text className="text-2xl font-bold text-[#086972]"> Olá, {ROLE_DICTIONARY[userRole]}. </Text>
                <Text className="text-5xl font-bold text-[#086972]"> {label} </Text>
            </View>
        </View>
    )
}