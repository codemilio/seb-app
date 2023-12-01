import { View } from "react-native";
import FavoriteItem from "./favorite.item";
import { DATA } from './index'

export default function FavoritesHorizontal(){
    return(
        <View className="flex-1 flex-row p-2 mx-auto mt-4 space-x-4 mb-8">
            {DATA.map(item => (
                <View className="w-fit flex flex-row" key={item.id}>
                    <FavoriteItem 
                        {...item}
                        textClassName="text-sm" 
                        imageClassName="h-16"
                        className="w-24 h-24"
                    />
                </View>
            ))}
        </View>
    )
}