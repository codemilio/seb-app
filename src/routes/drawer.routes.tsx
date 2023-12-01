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
            drawerContent={(props) => <DrawerMenu {...props} />} 
            screenOptions={{ 
                headerTitle: '', 
                headerShadowVisible: false, 
                headerStyle: {
                    backgroundColor: 'transparent'
                },
            }}
        >
            <Drawer.Screen
                name="authenticated"
                options={{ title: 'Minha conta' }}
                component={TabRoutes}
            />
        </Drawer.Navigator>
    )
}