import { ReactNode } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";

type Props = {
    children: ReactNode
    showStatusBar?: boolean
}

export default function ContainerTab({ children, showStatusBar = true }: Props){
    return(
        <SafeAreaView className="flex-1 bg-[#e8e8e8]">
            <StatusBar hidden={!showStatusBar}/>
            <View className="flex-1 p-6 pt-2">
                {children}
            </View>
        </SafeAreaView>
    )
}