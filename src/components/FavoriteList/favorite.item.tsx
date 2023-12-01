import { Image, Text, TouchableOpacity, View } from "react-native";
import type { IFavorites } from ".";
import { twMerge } from "tailwind-merge";

type Props = IFavorites & { 
    imageClassName?: string | '',
    textClassName?: string | '',
    viewportClassName?: string | ''
}

export default function FavoriteItem({ 
    img, 
    label, 
    id, 
    imageClassName = '', 
    textClassName = '', 
    viewportClassName ='' 
}: Props){
    return(
        <TouchableOpacity className={twMerge("flex w-full flex-col space-y-4", viewportClassName)} key={id}>
            <View className="flex justify-center items-center rounded-full w-32 h-32">
                <Image 
                    source={img} 
                    className={
                    twMerge("w-full h-full rounded-full", imageClassName)} 
                    resizeMode="contain" 
                />
            </View>
            <Text className={twMerge("text-center text-lg", textClassName)}> {label} </Text>
        </TouchableOpacity>
    )
}