import { useCallback, useState } from "react";
import { View, FlatList, RefreshControl, Text } from "react-native";

import ContainerTab from "../../layout/ContainerTab";
import Separator from "../Separator";

export type IQuestions = {
    id: number
    msg: string
    title: string 
}

const DATA: IQuestions[] = [
    {
        id: 1,
        title: "O que é o App Seb Barueri?",
        msg: "É um app que facilita a busca de feirantes e lojas pelos arredores de Barueri."
    },
    {
        id: 2,
        title: "É possível fazer compras no aplicativo?",
        msg: "Essa função ainda não está disponível no App. Iremos manter nossos usuários atualizados sobre as novidades."
    },
    {
        id: 3,
        title: "Como o App funciona?",
        msg: "Os feirantes atualizam as informações de localização, produtos e horário de funcionamento. Dessa forma o usuário pode visualizar todos as lojas disponíveis na feira selecionada."
    },
    {
        id: 4,
        title: "Para que serve a divisão em bloco das feiras?",
        msg: "As divisões tem a finalidade de facilitar a busca pelas lojas na feira, dividindo as lojas por grupo."
    },
]

export default function Questions(){
    const [refreshing, setRefreshing] = useState<boolean>(false);
    
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        
        setTimeout(() => {
          setRefreshing(false)
        }, 2000)
    }, [])

    return(
        <ContainerTab>
            <View className="flex-1 rounded-3xl h-full p-4">
            <FlatList
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <QuestionItem {...item} /> }
                ItemSeparatorComponent={() => <Separator />}
            />
        </View>
        </ContainerTab>
    )
}

function QuestionItem({msg, title}: IQuestions){
    return(
        <View className="w-ful h-fit bg-[#d0d0d0] relative p-4 rounded-md">
            <Text className="font-extrabold text-xl">{title}</Text>
            <Text className="text-xs">{msg}</Text>
        </View>
    )
}
