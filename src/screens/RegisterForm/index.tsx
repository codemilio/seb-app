import { Text, View, Image } from "react-native";

import type { RouteProp } from "@react-navigation/native";
import type { RootStackPropList } from "../../utils/hooks/navigation";
import { FormClient, FormSeller, HeaderForm } from "../../components";
import Logo from '../../assets/logo2.png'
import ContainerForm from "../../layout/ContainerForm";

export type Props = {
    route: RouteProp<RootStackPropList, 'registerForm'>;
}

import Barueri from "../../assets/barueri.png";

export default function RegisterForm({ route }: Props) {
    const { role } = route.params

    return(
        <ContainerForm>
            <View className="flex-1 items-center space-y-20">
                <View className="flex-1 w-full h-full px-8" >
                    <HeaderForm 
                        userRole={role} 
                        label="Vamos lá!"
                        img={Logo}
                        imgStyle={{ width: 90, height: 120 }}
                    />
                    <Text className="text-lg text-[#086972]"> Preencha as informações abaixo: </Text>
                    { role === 'CLIENT' ? <FormClient /> : <FormSeller/> }
                </View>
                <Image source={Barueri} resizeMode="contain" className="w-48 h-16" />
            </View>
        </ContainerForm>
    )
}