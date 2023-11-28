import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackPropList = {
    welcome: undefined
    login: undefined
}

export type NavigationProp = NativeStackNavigationProp<RootStackPropList>

export default function useTypedNavigation() {
    return useNavigation<NavigationProp>()
}