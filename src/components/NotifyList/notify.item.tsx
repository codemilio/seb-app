import { View, Text } from "react-native";
import { INotification } from ".";

export default function NotifyItem({msg, time}: INotification){
    return(
        <View className="w-ful h-fit bg-[#F4F4F4] relative p-4 rounded-lg">
            <Text className="absolute right-2 top-2 text-xs">{time}</Text>
            <Text className="text-md">{msg}</Text>
        </View>
    )
}