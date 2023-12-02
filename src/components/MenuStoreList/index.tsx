import React from 'react';
import { SectionList, Text, View, Image } from 'react-native';
import type { IStoreMenu, IStoreMenuItem } from "../../screens/Store";
import Separator from '../Separator';

type Props = {
    menu: IStoreMenu[];
};

export default function MenuStoreList({ menu }: Props) {
    const renderItem = ({ item }: { item: IStoreMenuItem }) => (
        <View className='flex flex-row space-x-4'>
            <Image source={item.img} resizeMode="cover" className="rounded-lg w-32 h-32 overflow-hidden" />
            <View className='w-2/3'>
                <Text className='text-xl font-semibold'>{item.name}</Text> 
                <Text className='font-light'>{item.description}</Text>
                <Separator className='w-full h-[0.4] bg-[#C4C4C4] my-2'/>
                <Text className='font-semibold'>Acompanhamentos gratuitos: </Text>
                <Text className='text-xs font-light'>{item.more}</Text>
            </View>
        </View>
    );

    const renderSectionHeader = ({ section: { title } }: { section: IStoreMenu }) => (
        <View className='bg-[#e8e8e8] pb-2'>
            <View className="w-1/4 bg-[#086972] rounded-full py-1 px-4">
                <Text className="text-white font-semibold mx-auto">{title}</Text> 
            </View>
        </View>
    );

    return (
        <SectionList
            sections={menu} 
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={Separator}
            SectionSeparatorComponent={Separator}
            keyExtractor={(item, index) => item.name + index}
        />
    );
}
