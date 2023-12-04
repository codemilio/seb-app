import { Image, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

import type { IFavorites } from ".";
import type { ViewProps } from "react-native";
import useTypedNavigation from "../../utils/hooks/navigation";
import { useRoute } from '@react-navigation/native';

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
    const route = useRoute()
    const { navigate } = useTypedNavigation()

    const handleNavigateToStore = () => {
        if(route.name === 'area') navigate('store')
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