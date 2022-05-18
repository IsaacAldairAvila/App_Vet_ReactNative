import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './navigation/Main'
import LoginScreen from './screens/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: true }} component={LoginScreen} />
        <Stack.Screen name="Main" options={{ title: 'MY APP', headerShown: true }} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}