import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#rgba(219, 114, 106, 1)',
        tabBarInactiveTintColor: '#rgb(145, 142, 142)',

        tabBarStyle: { height: '8.3%', backgroundColor: '#251351' },
        headerShown: false,
      }}
    >

      <Tabs.Screen
        name="principal"
        options={{
          tabBarLabel: 'Explorar',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="map" size={24} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="Registros"

        options={{
          tabBarLabel: 'Registros',
          headerShown: true,
          headerStyle: {
            backgroundColor: 'rgba(247, 247, 247, 1)',
          },
          title: 'Registros',
          headerTitleStyle: {
            
            fontFamily: 'Poppins-SemiBold'
          },
         // headerShadowVisible:false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="bar-chart" size={24} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="perfil"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
