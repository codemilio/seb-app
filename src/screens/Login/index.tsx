import Container from "../../layout/Container";
import { Text, View, Image } from "react-native"
import { Button, ButtonQuiet, TextField } from "../../components";

import Logo from '../../assets/logo.png'
import Linker from "../../components/Linker";
import Next from "../../assets/next.png";

import useTypedNavigation from "../../utils/hooks/navigation"

export default function Login(){
    const navigation = useTypedNavigation()

    const handleNavigationToRecover = () => {
        navigation.navigate('recoverPassword')
    }

    const handleNavigateToRegister = () => {
        navigation.navigate('register')
    }
    
    const handleNavigateToHome = () => {
        navigation.navigate('authenticated')
    }

    return(
        <Container>
            <View className="flex gap-y-8 mx-auto my-0 w-full px-8 ">
                <View className="flex justify-center items-center h-fit">
                    <Image source={Logo} resizeMode="contain" />
                    <Text className="text-[#086972] font-bold text-5xl text-center">Bem-vindo de volta! </Text>
                </View>

                <View className="flex flex-col w-full justify-center items-center gap-y-4 ">
                    <TextField label="Email ou Telefone:"/>
                    <TextField label="Senha: " textContentType="password" secureTextEntry={true} />
                    <Linker label="Esqueceu sua senha? Clique aqui!" className="self-end" onPress={handleNavigationToRecover}/>
                    <Button label="Login" showIcon={true} onPress={handleNavigateToHome}/>
                </View>

                <View className="mx-auto my-0">
                    <View className="flex flex-col justify-end h-12 mb-6">
                        <Text className="self-end"> Não tem perfil ainda? </Text>
                    </View>
                    <ButtonQuiet 
                        icon={Next} 
                        label="Cadastre-se" 
                        imageStyle={{ width: 26, height: 26 }}
                        className="flex-row text-black gap-y-0 gap-x-1"
                        onPress={handleNavigateToRegister}
                    />
                </View>
            </View>
        </Container>
    )
}