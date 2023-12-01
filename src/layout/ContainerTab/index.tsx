import { ReactNode } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import SearchBar from "../../components/SearchBar";

type Props = {
    children: ReactNode
    showStatusBar?: boolean
    showSearchBar?: boolean
    showHeader?: boolean
}

export default function ContainerTab({ children, showStatusBar = true, showSearchBar = true, showHeader = true }: Props){
    return(
        <SafeAreaView className="flex-1 bg-[#e8e8e8]">
            <StatusBar hidden={!showStatusBar}/>
            { showHeader && <SearchBar showTextInput={showSearchBar} />}
            <View className="flex-1 p-6 pt-2">
                {children}
            </View>
        </SafeAreaView>
    )
}