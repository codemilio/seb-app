import { ReactNode } from "react"
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"

type Props = {
    children: ReactNode
}

export default function KeyboardAdapter({children}: Props) {
    return(
        <KeyboardAvoidingView
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"
        }>
            <ScrollView className="flex-1" >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}