import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

type Props = TouchableOpacityProps & {
    label: string
}

export default function Button({ label, ...props }: Props) {
    return(
        <TouchableOpacity {...props} className="flex flex-row w-60 h-12 rounded-full items-center justify-center bg-[#086972] text-[#fff]">
            <Icon name="sign-in" color="#fff" size={16} />
            <Text className="text-white ml-2"> { label } </Text>
        </TouchableOpacity>
    )
}