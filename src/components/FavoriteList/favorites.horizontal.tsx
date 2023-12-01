import { View } from "react-native";
import FavoriteItem from "./favorite.item";
import { DATA } from './index'

export default function FavoritesHorizontal(){
    return(
        <View className="flex-1 flex-row p-2">
            {DATA.map(item => (
                <View className="w-28" key={item.id}>
                    <FavoriteItem 
                        {...item}
                        imageClassName="h-24" 
                        textClassName="text-sm" 
                        viewportClassName="space-y-0"
                    />
                </View>
            ))}
        </View>
    )
}