import { View, Text } from "react-native";
import HeaderTab from "../HeaderTab";
import FavoriteList from "../FavoriteList";
import ContainerTab from "../../layout/ContainerTab";
import Slider from "../Slider";
import { ScrollView } from "react-native-gesture-handler";
import FavoritesHorizontal from "../FavoriteList/favorites.horizontal";

export default function Home(){
    return(
        <ContainerTab>
            <ScrollView className="flex-1 space-y-8">
                {/* <Slider /> */}
                <View className="flex-1">
                    <HeaderTab label="Favoritados" />
                    <FavoritesHorizontal />
                </View>
            </ScrollView>
        </ContainerTab>
    )
}