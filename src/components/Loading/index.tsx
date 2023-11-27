import { ActivityIndicator, Text, View } from "react-native";

export default function Loading(){
    return(
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator className="w-full h-full flex-1 justify-center items-center"/> 
        </View>
    )
}