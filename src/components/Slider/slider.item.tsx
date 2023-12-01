import { View, Text, Image, TouchableOpacity } from "react-native";
import type { ICarousel } from ".";
import classNames from "classnames";

type Props = ICarousel & {}

export default function SliderItem({ name, day, endAt, image, isOpened, local, startAt}: Props){
    return(
        <TouchableOpacity className="w-full h-96">
            <View className="flex-1 h-full rounded-2xl bg-white overflow-hidden">
                <View className="h-1/2 overflow-hidden">
                    <Image source={image} resizeMode="cover" className="w-full h-full"/>
                </View>

                <View className="flex flex-col text-center mx-auto py-4 space-y-2">
                    <Text className="text-center text-lg font-semibold uppercase">{name}</Text>
                    <View className={classNames("rounded-full p-2 bg-[#00CC6A]", {
                        "bg-red-700": !isOpened
                    })}>
                        <Text className="text-xs text-white font-semibold text-center">{isOpened ? "Aberto" : "Fechado"}</Text>
                    </View>
                    <Text className="text-center uppercase font-semibold text-[#6C6C6C]">{startAt} às {endAt}</Text>
                    <Text className="text-center text-xs">às {day}</Text>
                    <Text className="text-center text-xs">{local}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}