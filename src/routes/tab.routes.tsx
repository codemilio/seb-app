import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
    Home
} from "../screens";

import type { RootStackPropList } from "../utils/hooks/navigation";

const Tab = createBottomTabNavigator<RootStackPropList>();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen
                name="questions"
                component={Home}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="question" />
                }}
            />
            <Tab.Screen
                name="favorites"
                component={Home}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="star" />
                }}
            />
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{ 
                        tabBarIcon: (props) => <Icon {...props} name="store" />
                    }}
                />
            <Tab.Screen
                name="notifications"
                component={Home}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="bell" />
                }}
            />
            <Tab.Screen
                name="profile"
                component={Home}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="user-circle" />
                }}
            />
        </Tab.Navigator>
    )
}