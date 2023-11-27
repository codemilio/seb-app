import { TouchableOpacity, Text, Image } from "react-native"
import type { TouchableOpacityProps, ImageSourcePropType, ImageStyle } from "react-native"
import { twMerge } from "tailwind-merge"

type Props = TouchableOpacityProps & {
    label: string
    icon: ImageSourcePropType
    imageStyle?: ImageStyle 
}

export default function ButtonQuiet({ label, icon, imageStyle, ...props }: Props) {
    return(
        <TouchableOpacity 
            {...props} 
            className={twMerge(
                "flex flex-col w-fit h-fit rounded-full items-center justify-center text-[#fff] gap-y-2", 
                props.className
            )
        }>
            <Image source={icon} style={imageStyle} resizeMode="contain" />
            <Text> { label } </Text>
        </TouchableOpacity>
    )
}