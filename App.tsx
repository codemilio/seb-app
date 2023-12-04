import 'react-native-gesture-handler'

import { 
  useFonts, 
  RedHatDisplay_300Light 
} from '@expo-google-fonts/red-hat-display'

import Loading from "./src/components/Loading"
import Routes from "./src/routes"
import { AuthProvider } from './src/utils/contexts/auth'

export default function App() {
  const [ fontsLoaded ] = useFonts({ RedHatDisplay_300Light })

  if(!fontsLoaded) return <Loading/>

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

