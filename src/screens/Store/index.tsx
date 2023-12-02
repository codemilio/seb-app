import ContainerTab from "../../layout/ContainerTab";
import BannerStore from "../../components/BannerStore";
import { View, type ImageSourcePropType } from "react-native";

import StoreIcon from '../../assets/fav2.png'
import Banner from '../../assets/banner_01.png'
import Item_1 from '../../assets/item1.png'
import Item_2 from '../../assets/item2.png'
import Item_3 from '../../assets/item3.png'
import Item_4 from '../../assets/item4.png'
import Item_5 from '../../assets/item5.png'
import Item_6 from '../../assets/item6.png'

import HeaderTab from "../../components/HeaderTab";
import MenuStoreList from "../../components/MenuStoreList";

type IStore = {
    store_name: string
    store_location: string 
    store_banner: ImageSourcePropType
    store_icon: ImageSourcePropType
    store_close_at: string 
    menu: IStoreMenu[]
}

export type IStoreMenuItem = {
    name: string
    description: string 
    more: string 
    img: ImageSourcePropType
}

export type IStoreMenu = {
    title: string 
    data: IStoreMenuItem[]
}

const DATA: IStore = {
    store_name: "Pastel do Xin",
    store_location: "Feira Noturna de Barueri",
    store_banner: Banner,
    store_icon: StoreIcon,
    store_close_at: "Aberto até 21:30",
    menu: [
        {
            title: "Pastéis",
            data: [
                {
                    name: "Pastel Frajola",
                    description: "Massa frita na hora, frango, catupiry, milho e salsinha.",
                    more: "Vinagrete, ketchup e mostarda",
                    img: Item_1,
                },
                {
                    name: "Pastel Mickey",
                    description: "Massa frita na hora, carne moída, tempero picante e salsinha.",
                    more: "Vinagrete, ketchup e mostarda",
                    img: Item_2,
                },
                {
                    name: "Pastel Pluto",
                    description: "Massa frita na hora, carne seca, pimentão amarelo e parmesão.",
                    more: "Vinagrete, ketchup e mostarda",
                    img: Item_3
                },
            ]
        },
        {
            title: "Bebidas",
            data: [
                {
                    name: "400ml",
                    description: "Caldo de cana natural.",
                    more: "Açúcar e gelo.",
                    img: Item_4
                },
                {
                    name: "Suco de uva",
                    description: "Suco de uva natural",
                    more: "Açúcar e gelo.",
                    img: Item_5
                },
                {
                    name: "Suco de Laranja",
                    description: "Suco de uva natural",
                    more: "Açúcar e gelo.",
                    img: Item_6
                },
            ]
        },
    ]
}

export default function Store(){
    const { store_banner, store_icon, store_close_at, store_location, store_name, menu } = DATA

    return(
        <ContainerTab className="p-0 space-y-4">
            <BannerStore 
                banner={store_banner} 
                icon={store_icon} 
                name={store_name}
                location={store_location}
                closeAt={store_close_at}
            />
            <View className="flex-1 ">
                <HeaderTab label="Cardápio"/>
                <View className="flex-1 px-4">
                    <MenuStoreList menu={menu} />
                </View>
            </View>
        </ContainerTab>
    )
}