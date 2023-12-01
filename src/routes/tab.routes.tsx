import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { 
    Home
} from "../screens";

import type { RootStackPropList } from "../utils/hooks/navigation";
import { Tabs } from '../components';
import SearchBar from '../components/SearchBar';

const Tab = createBottomTabNavigator<RootStackPropList>();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen
                name="questions"
                component={Tabs.Questions}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="question" />
                }}
            />
            <Tab.Screen
                name="favorites"
                component={Tabs.Favorites}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="star" />
                }}
            />
            <Tab.Screen
                name="home"
                component={Tabs.Home}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="store" />
                }}
            />
            <Tab.Screen
                name="notifications"
                component={Tabs.Notifications}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="bell" />
                }}
            />
            <Tab.Screen
                name="profile"
                component={Tabs.Profile}
                options={{ 
                    tabBarIcon: (props) => <Icon {...props} name="user-circle" />
                }}
            />
        </Tab.Navigator>
    )
}