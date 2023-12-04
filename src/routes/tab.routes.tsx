import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import type { RootStackPropList } from "../utils/hooks/navigation";
import { Tabs } from '../components';
import StackDetailsRoutes from './stack.details.routes';

const Tab = createBottomTabNavigator<RootStackPropList>();

export default function TabRoutes(){
    return(
        <Tab.Navigator initialRouteName="details" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
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
                name="details"
                component={StackDetailsRoutes}
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