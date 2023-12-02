import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { ICarousel } from "../Slider";
import classNames from "classnames";

type Props = ICarousel & {
    isExpanded?: boolean
}

export default function Banner({ name, day, endAt, image, isOpened, local, startAt, isExpanded = true}: Props){
    return(
        <View className={classNames("w-full h-48", {
            "h-24": !isExpanded
        })}>
            <ImageBackground className="flex-1 overflow-hidden" source={image}>
                <View className={classNames("flex flex-col justify-center items-center py-4", {
                    "flex-row": !isExpanded
                })}  style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View className={classNames("flex-col mx-auto", {
                        "flex-1": !isExpanded
                    })}>
                        <Text className="text-white text-center text-lg font-semibold uppercase">{name}</Text>
                        <Text className="text-white text-center text-xs">{local}</Text>
                    </View>
                    
                    <View className={classNames("flex-col", {
                        "flex-1": !isExpanded
                    })}>
                        <View className={classNames("w-32 rounded-full p-2 bg-[#00CC6A] my-2 mx-auto", {
                            "bg-red-700": !isOpened
                        })}>
                            <Text className="text-xs text-white font-extrabold text-center">{isOpened ? "Aberto" : "Fechado"}</Text>
                        </View>
                        <Text className={classNames("text-center uppercase font-semibold text-white", {
                            "text-xs": !isExpanded
                        })}>{startAt} às {endAt}</Text>
                        { isExpanded && <Text className="text-center text-xs text-white">às {day}</Text>}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}