import {useFonts} from "expo-font"
import { Slot } from "expo-router"

export default function RaizLayout(){

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null; // Ou um splash screen enquanto carrega
      }

      return <Slot />;
}