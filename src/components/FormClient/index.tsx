import { View } from "react-native";
import TextField from "../TextField";

export default function FormClient() {
    return(
        <View className="flex flex-col mt-8">
            <TextField label="Nome:"/>
            <TextField label="E-mail:" textContentType="emailAddress"/>
            <TextField label="Telefone:" textContentType="telephoneNumber" />
            <TextField label="Definir senha: " textContentType="password" secureTextEntry />
        </View>
    )
}