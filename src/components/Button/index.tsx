import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { twMerge } from "tailwind-merge"

type Props = TouchableOpacityProps & {
    label: string,
    showIcon?: boolean
}
   
export default function Button({ label, showIcon = false, ...props }: Props) {
    return(
        <TouchableOpacity 
            {...props} 
            className={twMerge("flex flex-row w-60 h-12 rounded-full items-center justify-center bg-[#086972] text-[#fff]", props.className)}
        >
            {showIcon && <Icon name="sign-in" color="#fff" size={16} />}
            <Text className="text-white ml-2 font-black"> { label } </Text>
        </TouchableOpacity>
    )
}