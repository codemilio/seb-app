import { View } from "react-native";
import ContainerTab from "../../layout/ContainerTab";
import HeaderTab from "../HeaderTab";
import HeaderUser from "../HeaderUser";
import TextFieldQuiet from "../TextFieldQuiet";
import KeyboardAdapter from "../../layout/KeyboardAdapter";
import Separator from "../Separator";

export default function Profile(){
    return(
        <ContainerTab>
            <KeyboardAdapter>
                <HeaderUser />
                
                <HeaderTab label="Informações" />
                
                <View className="flex px-4 mb-4">
                    <TextFieldQuiet label="Nome" value="Amanda Nunes" />
                    <TextFieldQuiet label="Telefone" value="(11) 0 0000-0000"/>
                    <TextFieldQuiet label="Email" value="amanda.nunes.123@gmail.com"/>
                </View>

                <HeaderTab label="Pagamentos" />
                
                <View className="flex px-4 mb-4 pb-16">
                    <TextFieldQuiet label="Débito" value="**** **** **** 0000"/>
                    <TextFieldQuiet label="Crédito" value="**** **** **** 0000"/>
                </View>
            </KeyboardAdapter>
        </ContainerTab>
    )
}