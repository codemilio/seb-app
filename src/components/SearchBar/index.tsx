import { View, Image, TextInput, TouchableOpacity, ViewProps } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import classNames from "classnames";

import HeaderLogo from '../../assets/headerLogo.png';
import useTypedNavigation from "../../utils/hooks/navigation";
import Separator from "../Separator";

type Props = ViewProps & {
    showTextInput?: boolean
}

export default function SearchBar({ showTextInput = true, ...props }: Props) {
    const navigation = useTypedNavigation()

    return(
        <View className={classNames("flex flex-col items-center px-5 pb-6 space-y-4", {
            "flex-row-reverse justify-between": !showTextInput
        })}>
            { !showTextInput && <Separator className="w-0  h-0" /> }
            <Image 
                className={classNames("", {
                    "-ml-8": !showTextInput
                })}
                source={HeaderLogo} 
                resizeMode="contain" 
                resizeMethod="scale" 
                style={{ height: 80 }} 
            />
            <View className="flex flex-row space-x-2">
                <TouchableOpacity
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    className={classNames("flex flex-shrink-0 w-8 justify-center items-center")}
                >
                    <Icon name="bars" size={24} color="#555"/>
                </TouchableOpacity>

                {showTextInput && (
                    <View className="flex-1 flex-row w-full h-10 rounded-md items-center px-4 py-2 bg-[#D9D9D9] space-x-4">
                        <Icon className="flex-shrink-0" name="search" color="#555" size={16}/>
                        <TextInput className="flex-1" placeholder="O que você busca?"/>
                        <TouchableOpacity
                            className="flex-shrink-0"
                        >
                            <Icon name="microphone" color="#555" size={16}/>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )   
}

