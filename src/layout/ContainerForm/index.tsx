import { ReactNode } from "react"
import { KeyboardAvoidingView, Platform, ScrollView, View, Image } from "react-native"

type Props = {
    children: ReactNode
}

export default function ContainerForm({children}: Props) {
    return(
        <KeyboardAvoidingView
            className="flex-1 py-8"
            behavior={Platform.OS === "ios" ? "padding" : "height"
        }>
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 20}}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}