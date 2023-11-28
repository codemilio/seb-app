import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { 
    Login, 
    Welcome, 
    Register, 
    RegisterForm, 
    RecoverPassword, 
    RecoverPasswordSuccess
} from '../screens'
import { RootStackPropList } from '../utils/hooks/navigation'

const Stack = createNativeStackNavigator<RootStackPropList>()

export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="register" component={Register}/>
            <Stack.Screen name="registerForm" component={RegisterForm}/>
            <Stack.Screen name="recoverPassword" component={RecoverPassword}/>
            <Stack.Screen name="recoverPasswordSuccess" component={RecoverPasswordSuccess}/>
        </Stack.Navigator>
    )
}