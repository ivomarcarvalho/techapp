import React from "react"
import {
    Alert,
    View,
    Text,
    StyleSheet
} from "react-native"
// O mapeamento de endereço é difinido no arquivo tsconfig.json
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Index() {
    function handleMessage() {
        Alert.alert('Teste para o onPress')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Apredendo React</Text>
            <Input/>
            <Button title="Entrar" onPress={handleMessage} />
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 15,
    },
    title: {
        color: "red",
        fontSize: 24,
    },
})
