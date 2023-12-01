import { Text, View } from "react-native"

type Props = {
    label: string
}

export default function HeaderTab({ label }: Props){
    return(
        <View className="mx-auto border-b-2 border-[#E1E1E1] w-2/3 pb-2 mb-8">
            <Text className="uppercase text-2xl text-center font-semibold">{label}</Text>
        </View>
    )
}