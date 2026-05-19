import { Button, Text, View } from "react-native";
import { useState } from "react";

export function MoviesScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://reactnative.dev/movies.json");
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movies Screen</Text>
        <Button title="Pesquisar" onPress={getMovies} />

        {isLoading && <Text>Loading...</Text>}

        <View>
            {data.map((item) => (
            <Text key={item.title}>
                {item.title} - {item.releaseYear}
            </Text>
            ))}
        </View>

        </View>
    );
}
