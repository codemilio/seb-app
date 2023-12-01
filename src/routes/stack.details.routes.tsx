
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { 
    Area,
    Store,
} from '../screens'

import type { RootStackPropList } from '../utils/hooks/navigation'

const Stack = createNativeStackNavigator<RootStackPropList>()
import { Tabs } from '../components';

export default function StackDetailsRoutes() {
    return(
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Tabs.Home}/>
            <Stack.Screen name="area" component={Area}/>
            <Stack.Screen name="store" component={Store}/>
        </Stack.Navigator>
    )
}