import { View, Text } from "react-native"

import { Button, Header, TextField } from "../../components";
import Container from "../../layout/Container";

import Check from "../../assets/check.png"
import useTypedNavigation from "../../utils/hooks/navigation";

export default function RecoverPasswordSuccess() {
    const navigation = useTypedNavigation()

    const handleNavigateToLogin = () => {
        navigation.navigate('login')
    }

    return(
        <Container showBgEffects={false}>
            <View className="flex-1 px-8 gap-y-8">
                <Header label="Esqueceu sua senha?" img={Check} imgStyle={{ width: 130, height: 130}} />
                <Text className="text-center">Um e-mail de redefinição foi enviado para sua caixa de mensagens!</Text>
                <Button label="Voltar para tela de login" className="self-center" onPress={handleNavigateToLogin}/>
            </View>
        </Container>
    )
}