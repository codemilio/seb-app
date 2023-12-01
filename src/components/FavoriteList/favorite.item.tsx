import { Image, Text, TouchableOpacity, View } from "react-native";
import type { IFavorites } from ".";

type Props = IFavorites & { }

export default function FavoriteItem({ img, label }: Props ){
    return(
        <TouchableOpacity className="flex w-full flex-col space-y-4">
            <View className="shadow-sm shadow-[#2c2c2c7f] flex justify-center items-center rounded-full w-32 h-32 ">
                <Image source={img} className="h-28 rounded-full" resizeMode="contain" />
            </View>
            <Text className="text-center text-lg"> {label} </Text>
        </TouchableOpacity>
    )
}