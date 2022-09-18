import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '../screens/Game';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="nome" component={Home}></Screen>
      <Screen name="game" component={Game}></Screen>
    </Navigator>
  );
}
