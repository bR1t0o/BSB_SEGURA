import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#rgba(219, 114, 106, 1)', 
        tabBarInactiveTintColor: '#rgb(145, 142, 142)',
        
        tabBarStyle: { height:'8.3%', backgroundColor: '#251351' },
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
        name="registros"
        options={{
          tabBarLabel: 'Registros',
          headerShown: false, 
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
/*

<View  style={{ flex: 1 }}>
        
        <Slot/>
        <View style={fotter_Style.containerBaixo}>
            <View style={fotter_Style.botao}><Button title="explorar" onPress={() => router.push("/principal")} ></Button></View>
            <View style={fotter_Style.botao}><Button title="registros" onPress={() => router.push("/registros")}></Button></View>
            <View style={fotter_Style.botao}><Button title="perfil" onPress={() => router.push("/perfil")}></Button></View>
        </View>

        </View>
    )
*/ 