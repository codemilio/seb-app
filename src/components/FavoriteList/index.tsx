import { View, FlatList } from "react-native";

import FavoriteItem from "./favorite.item";
import Separator from "../Separator";

import Fav1 from '../../assets/fav1.png'
import Fav2 from '../../assets/fav2.png'
import Fav3 from '../../assets/fav3.png'

import type { ImageSourcePropType } from "react-native" 

export type IFavorites = {
    id: string
    img: ImageSourcePropType
    label: string
}

export const DATA: IFavorites[] = [
    {
        id: "12321312312",
        img: Fav1,
        label: "Fruta Norte"
    },
    {
        id: "1228432423198",
        img: Fav2,
        label: "Pastel Xin"
    },
    {
        id: "1228198",
        img: Fav3,
        label: "Hot Burguer"
    }
]

export default function FavoriteList(){
    return(
        <View className="flex-1 justify-center items-center h-full space-y-4">
            <FlatList 
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => <FavoriteItem {...item} className="w-32 h-32" imageClassName="h-24"/>}
                ItemSeparatorComponent={() => <Separator className="h-12"/>}
            />
        </View>
    )
}