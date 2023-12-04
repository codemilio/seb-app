import { useState } from "react";
import classNames from 'classnames';
import { TouchableOpacity, View, Text } from "react-native";
import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    items: string[]
    label: string
    onSelect: (item: string | null) => void
}

export default function CheckBox({ items, label, onSelect }: Props ){
    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    const handleCheckItem = (item: string) => {
        const newValue = selectedItem === item ? null : item
        setSelectedItem(newValue)
        onSelect(newValue)
    };
    return(
        <View className="flex flex-col gap-y-4 mb-4">
            <Text className="text-[#086972]"> {label} </Text>
            <View className="flex flex-row gap-x-6">
            {items.map(item => (
                <TouchableOpacity onPress={() => handleCheckItem(item)} key={item} className="flex flex-row space-x-2">
                    <View className="rounded-full w-5 h-5 max-w-fit max-h-fit bg-[#D9D9D9] overflow-hidden p-1">
                        <View className={classNames('w-full h-full rounded-full', {
                            'bg-[#086972]': selectedItem === item
                        })}/>
                    </View>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
    )
}
