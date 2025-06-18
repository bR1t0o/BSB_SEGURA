import { useFonts } from "expo-font"
import { Slot, Stack } from "expo-router"
import { CardProvider } from "../../context/CardContext";


export default function RaizLayout() {

  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um splash screen enquanto carrega
  }

  return (
    <CardProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

    </CardProvider>
  );
}