import Banner from "../../components/Banner";
import { RouteProp } from "@react-navigation/native";
import { RootStackPropList } from "../../utils/hooks/navigation";
import ContainerTab from "../../layout/ContainerTab";
import HeaderTab from "../../components/HeaderTab";
import { ScrollView } from "react-native-gesture-handler";
import MapAreas from "../../components/ButtonMap";
import Categories from "../../components/Categories";
import FavoritesHorizontal from "../../components/FavoriteList/favorites.horizontal";
import { AreaProvider, useArea } from "../../utils/contexts/area";
import type { ICarousel } from "../../components/Slider";

type Props = {
    route: RouteProp<RootStackPropList, 'area'>;
}

export default function Area({ route }: Props){
    const { location } = route.params

    return(
        <AreaProvider>
            <ContainerTab className="p-0">
               <AreaContent {...location} />
            </ContainerTab>
        </AreaProvider>
    )
}


const AreaContent = ({...props}: ICarousel) => {
    const { selectedArea } = useArea() 
    const hasSelected = !!selectedArea

    return(
        <>
            <Banner {...props} isExpanded={!hasSelected}/>
            <ScrollView className="flex-1 p-4 h-full">
                <HeaderTab label="Selecione uma área " className="h-12"/>
                {hasSelected && <Categories items={["Frutas", "Verduras", "Legumes", "Bebidas", "Doces", "Serviços"]} />}
                <MapAreas />
                {hasSelected && <FavoritesHorizontal />}
            </ScrollView>
        </>
    )
}