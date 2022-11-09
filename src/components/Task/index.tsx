import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

interface TaskDTO {
    name: string;
    done: boolean;
    doneTask: () => void;
    removeTask: () => void;
}

export function Task({
    name,
    done,
    doneTask,
    removeTask
}: TaskDTO) {

    function confirmTaskDone() {
        Alert.alert(
            'Concluir!',
            'Deseja concluir essa tarefa?',
            [
                {
                    text: 'Sim',
                    onPress: () => doneTask()
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
    }

    function confirmTaskRemove() {
        Alert.alert(
            'Remover!',
            'Deseja remover essa tarefa?',
            [
                {
                    text: 'Sim',
                    onPress: () => removeTask()
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ])
    }

    return (
        <View style={styles.container}>
            <View style={done ? styles.finishedDone : styles.finished}>
                {done ? (
                    <Image
                        style={styles.imgDone}
                        source={require('../../images/check.png')}
                    />
                ) : (
                    <TouchableOpacity
                        onPress={confirmTaskDone}
                        style={styles.buttonDone}
                    />
                )}
            </View>
            <View style={styles.containerText}>
                <Text style={
                    [styles.text,
                    {
                        textDecorationLine: done ? 'line-through' : 'none',
                        opacity: done ? 0.2 : 1
                    }

                    ]}>{name}</Text>
            </View>
            <TouchableOpacity
                onPress={confirmTaskRemove}
            >
                <Image
                    style={styles.img}
                    source={require('../../images/trash.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
}