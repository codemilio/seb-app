import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, Welcome } from '../screens'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
    )
}