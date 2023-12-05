import { ReactNode } from "react";
import { SafeAreaView, Image, View, StatusBar, ScrollView, StyleSheet } from "react-native";

import { Footer } from "../../components";

import BackgroundEffect from "../../assets/bg.png"
import Barueri from "../../assets/barueri.png";

type Props = {
    children: ReactNode
    showFooter?: boolean
    showStatusBar?: boolean
    showBgEffects?: boolean
}

export default function Container({ children, showFooter = true, showStatusBar = true, showBgEffects = true }: Props){
    return(
        <SafeAreaView className="flex-1 relative">
            <StatusBar hidden={!showStatusBar}/>
            {showBgEffects &&
                <View className="flex-row justify-between absolute w-full h-full top-16">
                    <Image source={BackgroundEffect} className="scale-x-[-1]" />
                    <Image source={BackgroundEffect} className="scale-x-[-1] self-end" />
                </View>
            }
            {children}
            <Image source={Barueri} resizeMode="contain" className="mx-auto w-48 h-16" />
        </SafeAreaView>
    )
}