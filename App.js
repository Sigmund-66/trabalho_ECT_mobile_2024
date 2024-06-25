import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Tela1 from './telas/Tela1';
import Tela4 from './telas/Tela4';
import Drawer from './telas/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela4" component={Tela4} />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

