import { View } from "react-native"

import { Button, Header, TextField } from "../../components";
import Container from "../../layout/Container";

import Key from "../../assets/key.png"
import useTypedNavigation from "../../utils/hooks/navigation";

export default function RecoverPassword () {
    const navigation = useTypedNavigation()

    const handleRecoverPassword = () => {
        navigation.navigate('recoverPasswordSuccess')
    }

    return(
        <Container showBgEffects={false}>
            <View className="flex-1 px-8 gap-y-8">
                <Header label="Esqueceu sua senha?" img={Key} imgMode="contain" imgStyle={{ width: 180, height: 100}} />
                <TextField label="Insira seu email para redefinição de senha: "/>
                <Button label="Redefinir senha" className="self-center" onPress={handleRecoverPassword}/>
            </View>
        </Container>
    )
}