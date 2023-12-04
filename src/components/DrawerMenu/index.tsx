// CustomDrawerContent.tsx
import React from 'react';
import { View, Text, Switch, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/FontAwesome5";
import classNames from 'classnames';
import useTypedNavigation from '../../utils/hooks/navigation';
import { useAuth } from '../../utils/contexts/auth';

const screenHeight = Dimensions.get('window').height;

export default function DrawerMenu(props: DrawerContentComponentProps) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const { navigate } = useTypedNavigation()
  const { logout } = useAuth()

  const handleLogout = () => {
    Alert.alert(
        "", 
        "Tem certeza que deseja sair?", 
        [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => {
                logout()
                navigate('login')
            }}
        ],
        { cancelable: false }
    );
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DrawerContentScrollView {...props} >
        <View className="flex flex-col" style={{ height: screenHeight - 120 }}>
            <View className="flex flex-row space-x-4 p-4 items-center">
                <Icon name="bars" size={18} color="#555"/>
                <Text className="text-xl font-semibold">Menu</Text>
            </View>
            
            <View className="flex flex-col p-4 space-y-2">
                <Text className="text-xl font-light">Tema</Text>
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
            
            <View className='flex flex-col space-y-6 p-4 mt-4'>
                <TouchableOpacity onPress={() => navigate('profile')}>
                    <Text className="text-xl font-light">Minha conta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('details')}>
                    <Text className="text-xl font-light">Feiras</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('notifications')}>
                    <Text className="text-xl font-light">Notificações</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigate('questions')}>
                    <Text className="text-xl font-light">Dúvidas frequentes</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-auto p-4 space-y-4">
                <TouchableOpacity onPress={() => navigate('questions')}>
                    <Text className="text-xl font-light">AJUDA</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleLogout}>
                    <Text className="text-xl font-light">SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>

    </DrawerContentScrollView>
  );
};
