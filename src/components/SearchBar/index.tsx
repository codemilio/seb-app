import { View, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderLogo from '../../assets/headerLogo.png';

export default function SearchBar({  }) {
    return(
        <View>

            <View className="flex-1 flex-col items-center p-5 space-y-4">
                <Image source={HeaderLogo} resizeMode="contain" resizeMethod="scale" style={{ height: 80 }} />
                <View className="flex flex-row w-full h-10 rounded-md items-center px-4 py-2 bg-[#D9D9D9] space-x-4">
                    <Icon className="flex-shrink-0" name="search" color="#555" size={16}/>
                    <TextInput className="flex-1" placeholder="O que você busca?"/>
                    <Icon className="flex-shrink-0" name="microphone" color="#555" size={16}/>
                </View>
            </View>
        </View>
    )   
}

// <TouchableOpacity
//         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
//         {/* Ícone do menu ou texto do botão, conforme sua preferência */}
//         <Text style={styles.menuButtonText}>Menu</Text>
//       </TouchableOpacity>