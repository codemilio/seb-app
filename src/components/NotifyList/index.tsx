import { View } from "react-native";
import NotifyItem from "./notify.item";
import { FlatList } from "react-native-gesture-handler";
import NotifySeparator from "../Separator";

export type INotification = {
    id: number
    msg: string
    time: string 
}

const DATA: INotification[] = [
    {
        id: 1,
        msg: "A feirinha do centro começou.",
        time: "18:00"
    },
    {
        id: 2,
        msg: "Feira cancelada!",
        time: "18:00"
    },
    {
        id: 3,
        msg: "Mudanças nas barracas - Feira livre.",
        time: "18:00"
    },
    {
        id: 4,
        msg: "Metade do preço - Pastel do xin",
        time: "18:00"
    },
]

export default function NotifyList(){
    return(
        <View className="flex-1 bg-[#d0d0d0] rounded-3xl h-full p-4">
            <FlatList
                data={DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <NotifyItem {...item} /> }
                ItemSeparatorComponent={() => <NotifySeparator />}
            />
        </View>
    )
}