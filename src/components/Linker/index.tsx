import { TouchableOpacity, Text } from "react-native";
import type { TouchableOpacityProps } from "react-native";
import { twMerge } from 'tailwind-merge'

type Props = TouchableOpacityProps & {
    label: string
}
export default function Linker({ label, ...props }: Props){
    return(
        <TouchableOpacity {...props} className={twMerge("", props.className)}>
            <Text className="text-[#609EF9] underline">{label}</Text>
        </TouchableOpacity>
    ) 
}