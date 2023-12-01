import { ImageBackgroundComponent, View } from "react-native";
import { ICarousel } from "../Slider";

type Props = ICarousel & {}

export default function Banner({image}: Props){
    return(
        <View>
            <ImageBackgroundComponent source={image}>
            </ImageBackgroundComponent>
        </View>
    )
}