import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackPropList = {
    welcome: undefined
    login: undefined
    register: undefined
    recoverPassword: undefined
    recoverPasswordSuccess: undefined
    registerForm: {
        role: "CLIENT" | "SELLER"
    }
}

export type NavigationProp = NativeStackNavigationProp<RootStackPropList>

export default function useTypedNavigation() {
    return useNavigation<NavigationProp>()
}