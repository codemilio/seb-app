import { Image, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

import type { IFavorites } from ".";
import type { ViewProps } from "react-native";
import useTypedNavigation from "../../utils/hooks/navigation";

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
    const { navigate } = useTypedNavigation()
    const handleNavigateToStore = () => {
        navigate('store')
    }
    return(
        <TouchableOpacity {...props} className={twMerge("flex w-full flex-col space-y-4", props.className)} onPress={handleNavigateToStore}>
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