import { ViewProps, View } from "react-native"
import { twMerge } from "tailwind-merge"

type Props = ViewProps & { }
export default function Separator({...props}: Props){
    return(
        <View {...props} className={twMerge(
            "h-4",
            props.className
        )} />
    )
}