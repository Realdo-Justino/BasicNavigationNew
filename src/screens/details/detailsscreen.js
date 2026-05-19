import { Button, Text, View } from "react-native";

export function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Voltar para home"
                onPress={() => navigation.goBack()}
            ></Button>
        </View>
    );
}
