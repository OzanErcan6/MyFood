import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Colors} from "./constants/colors"
import RecipesScreen from "./screens/RecipesScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <StatusBar style='dark'/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}>
            <Stack.Screen name="RecipesScreen" component={RecipesScreen} options={{title: 'Recipes List'}}/>
            <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={{title: 'Recipe'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}