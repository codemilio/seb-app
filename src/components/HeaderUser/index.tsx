import { Image, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Profile from '../../assets/profile.png'

export default function HeaderUser(){
    return(
        <View className="flex flex-row justify-center items-center space-x-4 mt-4 mb-8">
            <TouchableOpacity>
                <View className="w-32 h-32 rounded-full overflow-hidden">
                    <Image className="w-32 h-32" source={Profile} />
                </View>
                <View className="flex justify-center items-center absolute w-10 h-10 bg-[#a6a6a6] rounded-full bottom-2 right-0">
                    <Icon name="camera" size={16} color="#FFF" />
                </View>
            </TouchableOpacity>
            <Text className="text-3xl font-bold text-[#086972]"> Olá,{'\n'} Amanda </Text>
        </View>
    )
}