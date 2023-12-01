import { ViewProps } from "react-native"
import { Text, View } from "react-native"
import { twMerge } from "tailwind-merge"

type Props = ViewProps & {
    label: string
}

export default function HeaderTab({ label, ...props }: Props){
    return(
        <View className={twMerge("mx-auto border-b-2 border-[#E1E1E1] w-2/3 pb-2 mb-8", props.className)}>
            <Text className="uppercase text-2xl text-center font-semibold">{label}</Text>
        </View>
    )
}