import { View } from 'react-native'
import { Button, Header } from "../../components";

import Container from "../../layout/Container";

import Logo from '../../assets/logo.png'
import useTypedNavigation from '../../utils/hooks/navigation';

export default function Register() {
    const navigation = useTypedNavigation()

    const handleNavigateToRegisterClient = () => {
        navigation.navigate('registerForm', {
            role: 'CLIENT'
        })
    }
    
    const handleNavigateToRegisterSeller = () => {
        navigation.navigate('registerForm', {
            role: 'SELLER'
        })
    }

    return(
        <Container showBgEffects={false}>
            <View className="flex-1 px-8">
                <Header label="Antes de iniciar, como vai utilizar o app?" img={Logo}/>
                <View className="flex flex-col gap-y-4 items-center">
                    <Button label="Vendedor" className="bg-[#00CC6A]" onPress={handleNavigateToRegisterSeller}/>
                    <Button label="Cliente" className="bg-[#086972]" onPress={handleNavigateToRegisterClient}/>
                </View>
            </View>
        </Container>
    )
}