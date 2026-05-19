import { DetailsScreen } from "./src/screens/details/detailsscreen";
import { HomeScreen } from "./src/screens/home/homescreen";
import { MoviesScreen } from "./src/screens/movies/moviesscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Movies" component={MoviesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();
