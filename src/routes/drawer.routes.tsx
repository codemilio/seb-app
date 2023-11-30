import { createDrawerNavigator } from "@react-navigation/drawer";
import { 
    Home
} from "../screens";

import type { RootStackPropList } from "../utils/hooks/navigation";
import TabRoutes from "./tab.routes";
import DrawerMenu from "../components/DrawerMenu";

const Drawer = createDrawerNavigator<RootStackPropList>();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator 
            screenOptions={{ title: '' }}
            drawerContent={(props) => <DrawerMenu {...props} />} 
        >
            <Drawer.Screen
                name="profile"
                options={{ title: 'Minha conta', headerTitle: ''}}
                component={TabRoutes}
            />
            <Drawer.Screen
                name="home"
                options={{ title: 'Feiras'}}
                component={TabRoutes}
            />
            <Drawer.Screen
                name="notifications"
                options={{ title: 'Notificações'}}
                component={TabRoutes}
            />
            <Drawer.Screen
                name="questions"
                options={{ title: 'Dúvidas frequentes'}}
                component={TabRoutes}
            />
        </Drawer.Navigator>
    )
}