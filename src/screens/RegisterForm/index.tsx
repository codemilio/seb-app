import { Text, View } from "react-native";
import Container from "../../layout/Container";

import type { RouteProp } from "@react-navigation/native";
import type { RootStackPropList } from "../../utils/hooks/navigation";
import { FormClient, FormSeller, HeaderForm } from "../../components";
import Logo from '../../assets/logo2.png'

export type Props = {
    route: RouteProp<RootStackPropList, 'registerForm'>;
}

export default function RegisterForm({ route }: Props) {
    const { role } = route.params

    return(
        <Container showBgEffects={false}>
            <View className="flex px-8" >
                <HeaderForm 
                    userRole={role} 
                    label="Vamos lá!"
                    img={Logo}
                    imgStyle={{ width: 90, height: 120 }}
                />
                <Text className="text-lg text-[#086972]"> Preencha as informações abaixo: </Text>
                { role === 'CLIENT' ? <FormClient /> : <FormSeller/> }
            </View>
        </Container>
    )
}