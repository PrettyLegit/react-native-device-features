import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import AddPlaceScreen from "./screens/AddPlaceScreen";
import AllPlacesScreen from "./screens/AllPlacesScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllPlaces" component={AllPlacesScreen} />
          <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
