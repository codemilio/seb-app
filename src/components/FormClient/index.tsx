import { Alert, View } from "react-native"

import CheckBox from "../CheckBox"
import Button from "../Button"
import TextFieldPassword from "../TextFieldPassword"
import TextField from "../TextField"
import { useCallback, useState } from "react"
import { registerUser } from "../../utils/services/user"
import useTypedNavigation from "../../utils/hooks/navigation"

export type UserData = {
    name: string
    email: string
    tell: string 
    gender: 'MASCULINE' | 'FEMININE' | 'OTHER'
    password: string
}

type IHandleUpdateUserData<T extends keyof UserData> = {
    name: T
    value: UserData[T]
}

export default function FormClient() {
    const { navigate } = useTypedNavigation()
    const [formState, setFormState] = useState<UserData>({} as UserData)

    const handleCreateUser = async () => {
        await registerUser(formState)
        Alert.alert('Mensagem', 'Usuário cadastrado com sucesso')
        navigate('login')
    }

    const handleInputChange = useCallback(<T extends keyof UserData>({ name, value }: IHandleUpdateUserData<T>) => {
        setFormState(prevState => ({
          ...prevState,
          [name]: value,
        }))
    }, [])

    return(
        <View className="">
            <View className="flex flex-col mt-8 mb-8">
                <TextField label="Nome:" onChangeText={(text) => handleInputChange({name: 'name', value: text})}/>
                <TextField label="E-mail:" textContentType="emailAddress" onChangeText={(text) => handleInputChange({name: 'email', value: text})}/>
                <TextField label="Telefone:" textContentType="telephoneNumber" onChangeText={(text) => handleInputChange({name: 'tell', value: text})}/>
                <CheckBox label="Sexo: " items={['Masculino', 'Feminino', 'Outro']} onSelect={(item) => handleInputChange({ name: 'gender', value: item as UserData['gender']})} />
                <TextFieldPassword label="Definir senha: " onChangeText={(text) => handleInputChange({name: 'password', value: text})} />
            </View>
            <Button showIcon={false} label="Cadastrar" className="self-center" onPress={handleCreateUser}/>
        </View>
    )
}