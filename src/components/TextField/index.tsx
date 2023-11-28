import { View, TextInput, Text } from "react-native";
import type { TextInputProps } from "react-native";

type Props = TextInputProps & {
    label?: string
}

export default function TextField({ label, ...props}: Props){
    return(
        <View className="flex gap-y-2 w-full h-20 mb-2">
            {label && <Text className="text-[#086972]"> {label} </Text>}
            <TextInput {...props} className="w-full h-10 bg-[#D9D9D9] py-2 px-4 rounded-md"/>
        </View>
    )
}