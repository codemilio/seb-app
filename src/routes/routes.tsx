import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, Welcome } from '../screens'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export default function TabRoutes() {
    return(
        <NavigationContainer>
            <Tab.Navigator> 
                <Tab.Screen name="Home" component={Login}/>
                <Tab.Screen name="teste" component={Login}/>
            </Tab.Navigator> 
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}