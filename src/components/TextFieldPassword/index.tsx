import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

type Props = {
    label: string
}

export default function TextFieldPassword({ label }: Props){
    const [ show, setShow ] = useState<boolean>(false)

    const handleSetShow = () => {
        setShow(!show)
    }

    return(
        <View className="flex flex-col gap-y-2 ">
            <Text className="text-[#086972]"> {label} </Text>
            <View className="flex flex-row w-full h-10 rounded-md items-center px-4 py-2 bg-[#D9D9D9]">
                <TextInput className="flex-1" secureTextEntry={show} textContentType="password" />
                <Icon 
                    className="flex-shrink-0" 
                    name={show ? 'eye' : 'eye-slash'} 
                    color="#A2A2A2" 
                    onPress={handleSetShow} 
                    size={18}
                />
            </View>
        </View>
    )
}