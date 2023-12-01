import { Text, TextInput, TextInputProps, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = TextInputProps & {
    label: string
}

export default function TextFieldQuiet({ label, ...props }: Props){
    return(
        <View className="flex mb-8 h-fit">
            <Text className="text-[#6B6B6B]">{label}: </Text>
            <View className="flex flex-row space-x-2 items-center">
                <TextInput {...props} className="text-xl -mt-1 text-[#6B6B6B]" />
                <Icon className="" name="edit" color="#B5B5B5" size={16}/>
            </View>
        </View>
    )
}