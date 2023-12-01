import { View, ScrollView  } from "react-native";

import HeaderTab from "../HeaderTab";
import Slider from "../Slider";
import ContainerTab from "../../layout/ContainerTab";
import FavoritesHorizontal from "../FavoriteList/favorites.horizontal";

export default function Home(){
    return(
        <ContainerTab>
            <ScrollView className="flex-1 space-y-8">
                <Slider />
                <View className="flex-1">
                    <HeaderTab label="Favoritados" className="mb-0"/>
                    <FavoritesHorizontal />
                </View>
            </ScrollView>
        </ContainerTab>
    )
}