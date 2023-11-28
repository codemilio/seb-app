import { ReactNode } from "react";
import { SafeAreaView, Image, View, StatusBar } from "react-native";

import { Footer } from "../../components";

import BackgroundEffect from "../../assets/bg.png"

type Props = {
    children: ReactNode
    showFooter?: boolean
    showStatusBar?: boolean
    showBgEffects?: boolean
}

export default function Container({ children, showFooter = true, showStatusBar = true, showBgEffects = true }: Props){
    return(
        <SafeAreaView className="flex-1">
            <StatusBar hidden={!showStatusBar}/>
            {showBgEffects &&
                <View className="flex flex-row justify-between absolute w-full h-full top-16" >
                    <Image source={BackgroundEffect} className="scale-x-[-1]" />
                    <Image source={BackgroundEffect} className="scale-x-[-1] self-end" />
                </View>
            }
            {showFooter && <Footer />}
            {children}
        </SafeAreaView>
    )
}