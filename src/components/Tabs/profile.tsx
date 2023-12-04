import { View } from "react-native";
import ContainerTab from "../../layout/ContainerTab";
import HeaderTab from "../HeaderTab";
import HeaderUser from "../HeaderUser";
import TextFieldQuiet from "../TextFieldQuiet";
import KeyboardAdapter from "../../layout/KeyboardAdapter";
import { useAuth } from "../../utils/contexts/auth";

export default function Profile(){
    const { currentUser } = useAuth()
    const { name, email, tell } = currentUser!

    return(
        <ContainerTab showHeader={false}>
            <KeyboardAdapter>
                <HeaderUser userName={name} />
                
                <HeaderTab label="Informações" />
                
                <View className="flex px-4 mb-4">
                    <TextFieldQuiet label="Nome" value={name} />
                    <TextFieldQuiet label="Telefone" value={tell} />
                    <TextFieldQuiet label="Email" value={email} />
                </View>

                <HeaderTab label="Pagamentos" />
                
                <View className="flex px-4 mb-4 pb-16">
                    <TextFieldQuiet isPayment label="Débito" value="**** **** **** 0000"/>
                    <TextFieldQuiet isPayment label="Crédito" value="**** **** **** 0000"/>
                </View>
            </KeyboardAdapter>
        </ContainerTab>
    )
}