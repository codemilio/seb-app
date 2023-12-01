import { Image, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

import type { IFavorites } from ".";
import type { ViewProps } from "react-native";

type Props = IFavorites & ViewProps & { 
    imageClassName?: string | '',
    textClassName?: string | '',
}

export default function FavoriteItem({ 
    img, 
    label, 
    imageClassName = '', 
    textClassName = '',
    ...props
}: Props){
    return(
        <TouchableOpacity {...props} className={twMerge("flex w-full flex-col space-y-4", props.className)}>
            <Image 
                source={img} 
                className={
                twMerge("w-full h-full rounded-full", imageClassName)} 
                resizeMode="contain" 
            />
            <Text className={twMerge("text-center text-lg", textClassName)}> {label} </Text>
        </TouchableOpacity>
    )
}