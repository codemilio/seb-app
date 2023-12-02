import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ICarousel } from "../../components/Slider"

export type RootStackPropList = {
    welcome: undefined
    login: undefined
    register: undefined
    recoverPassword: undefined
    recoverPasswordSuccess: undefined
    registerForm: {
        role: "CLIENT" | "SELLER"
    }
    authenticated: undefined
    tabs: undefined
    home: undefined
    questions: undefined
    favorites: undefined
    notifications: undefined
    profile: undefined
    details: undefined
    area: {
        location: ICarousel
    } 
    store: undefined
}

export type NavigationProp = NativeStackNavigationProp<RootStackPropList>

export default function useTypedNavigation() {
    return useNavigation<NavigationProp>()
}