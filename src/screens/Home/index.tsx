import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerAdd}>
                    <TextInput
                        style={styles.inputAdd}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#918d8d'}
                    />
                    <TouchableOpacity style={styles.buttonAdd}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerList}>
                    <View style={styles.containerTotal}>
                        <View style={styles.containerTotalCriadas}>
                            <Text style={styles.textCriadas}>Criadas</Text>
                            <Text style={styles.textTotal}>0</Text>
                        </View>
                        <View style={styles.containerTotalConcluidas}>
                            <Text style={styles.textConcluidas}>Concluídas</Text>
                            <Text style={styles.textTotal}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}