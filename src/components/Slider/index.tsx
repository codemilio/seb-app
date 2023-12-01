import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel"
import SliderItem from "./slider.item";

import Barueri from "../../assets/barueri_foto.png"
import Santana from "../../assets/santana_foto.png"

import type { ImageSourcePropType } from "react-native";

export type ICarousel = {
    name: string
    local: string
    isOpened: boolean
    startAt: string 
    endAt: string
    day: string
    image: ImageSourcePropType
}

const DATA: ICarousel[] = [
    {
        name: "Feira de Barueri",
        local: "Centro, Barueri - SP, 06401-145",
        isOpened: true,
        startAt: "17:00",
        endAt: "22:00",
        day: "Terças-feira",
        image: Barueri
    },
    {
        name: "Feira do Silveira",
        local: "Jardim Silveira, Barueri - SP, 06401-145",
        isOpened: false,
        startAt: "17:00",
        endAt: "22:00",
        day: "Quartas-feira",
        image: Santana
    }
]

const { width: viewportWidth } = Dimensions.get('window');

export default function Slider(){
    return(
        <Carousel
            data={DATA}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth * 0.8}
            renderItem={({item}) => <SliderItem {...item} />}
            contentContainerCustomStyle={{
                paddingLeft: 0, 
            }}
        />
    )
}