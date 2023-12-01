import { useCallback, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";

import NotifyItem from "./notify.item";
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
        time: "19:00"
    },
    {
        id: 3,
        msg: "Mudanças nas barracas - Feira livre.",
        time: "20:00"
    },
    {
        id: 4,
        msg: "Metade do preço - Pastel do xin",
        time: "21:32"
    },
]

export default function NotifyList(){
    const [refreshing, setRefreshing] = useState<boolean>(false);
    
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        
        setTimeout(() => {
          setRefreshing(false)
        }, 2000)
    }, [])

    return(
        <View className="flex-1 bg-[#d0d0d0] rounded-3xl h-full p-4">
            <FlatList
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <NotifyItem {...item} /> }
                ItemSeparatorComponent={() => <NotifySeparator />}
            />
        </View>
    )
}