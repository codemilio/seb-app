import { View } from "react-native";

import CheckBox from "../CheckBox"
import Button from "../Button"
import TextFieldPassword from "../TextFieldPassword"
import TextField from "../TextField"

export default function FormSeller() {
    return(
        <View>
            <View className="flex flex-col mt-8 mb-8">
                <TextField label="Nome:"/>
                <TextField label="E-mail:" textContentType="emailAddress"/>
                <TextField label="Telefone:" textContentType="telephoneNumber" />
                <TextField label="Registro feirante:" textContentType="telephoneNumber" />
                <TextField label="CNPJ:" textContentType="telephoneNumber" />
                <CheckBox label="Sexo: " items={['Masculino', 'Feminino', 'Outro']}/>
                <TextFieldPassword label="Definir senha: " />
            </View>
            <Button showIcon={false} label="Próxima etapa" className="self-center" />
        </View>
    )
}