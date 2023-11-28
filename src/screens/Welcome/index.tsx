import { View, Image, Text } from "react-native";

import Button from "../../components/Button";
import ButtonQuiet from "../../components/ButtonQuiet";
import Container from "../../layout/Container";

import Logotipo from "../../assets/logotipo.png";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import Next from "../../assets/next.png";

import useTypedNavigation from "../../utils/hooks/navigation";

export default function Welcome(){
    const navigation = useTypedNavigation()

    const handleNavigateToAccess = () => {
        navigation.navigate('login')
    }
    
    const handleNavigateToRegister = () => {
        navigation.navigate('register')
    }

    return(
        <Container>
            <View className="flex-1 justify-center">
                <View className="w-full h-fit justify-center items-center gap-y-8">
                    <Image source={Logotipo} resizeMode="contain" className="w-72 h-40"/>
                    <Button label="Acessar" showIcon={true} onPress={handleNavigateToAccess} />
                    <View className="flex flex-row gap-y-4 gap-x-4">
                        <ButtonQuiet label="Apple" icon={Google}/>
                        <ButtonQuiet label="Facebook" icon={Facebook}/>
                        <ButtonQuiet label="Apple ID" icon={Apple}/>
                    </View>
                    <View className="flex flex-col justify-end h-12">
                        <Text className="self-end"> Não tem perfil ainda? </Text>
                    </View>
                    <ButtonQuiet 
                        icon={Next} 
                        label="Cadastre-se" 
                        imageStyle={{ width: 26, height: 26 }}
                        className="flex-row text-black gap-y-0 gap-x-2"
                        onPress={handleNavigateToRegister}
                    />
                </View>
            </View>
        </Container>
    )
}