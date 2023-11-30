// CustomDrawerContent.tsx
import React from 'react';
import { View, Text, Switch, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import classNames from 'classnames';

const screenHeight = Dimensions.get('window').height;

export default function DrawerMenu(props: DrawerContentComponentProps) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DrawerContentScrollView {...props} >
        <View className="flex flex-col" style={{ height: screenHeight - 120 }}>
            <View className="flex flex-col p-4">
                <Text className="text-xl font-semibold">Menu</Text>
            </View>
            
            <View className="flex flex-col p-4">
                <Text className="text-xl">Tema</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme}
                    value={isDarkTheme}
                    className={classNames('bg-gray-200', {
                    'bg-blue-600': isDarkTheme
                    }) }
                />
            </View>
            
            <View>
                <DrawerItemList {...props} />
            </View>

            <View className="mt-auto p-4">
                <TouchableOpacity onPress={() => {}} className="mb-2">
                <Text className="text-lg">AJUDA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} className="mb-2">
                <Text className="text-lg">SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>

    </DrawerContentScrollView>
  );
};
