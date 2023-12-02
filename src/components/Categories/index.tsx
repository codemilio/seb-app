import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
    items: string[]
}

export default function Categories({items}: Props) {
    return(
        <View className="flex-1 flex-row flex-wrap justify-between gap-x-4 gap-y-2 mx-auto pr-4 mb-8">
            {items.map((item, index) =>(
                <TouchableOpacity className='bg-[#077571] px-4 py-2 rounded-full w-24' key={index}>
                    <Text className='text-white text-center font-bold text-xs'>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}