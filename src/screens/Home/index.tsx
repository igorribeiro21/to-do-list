import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    Alert
} from "react-native";
import { Task } from '../../components/Task';
import { styles } from "./styles";

interface ItemTask {
    task: string;
    finished: boolean;
}

export default function Home() {
    const [listTasks, setListTasks] = useState<ItemTask[]>([]);
    const [taskAdd, setTaskAdd] = useState<string>('');
    const [totalCreate,setTotalCreate] = useState<number>(0);
    const [totalDone, setTotalDone] = useState<number>(0);

    function handleTaskAdd() {
        const verifyIncludeList = listTasks?.find(item => item.task === taskAdd);

        if (verifyIncludeList) {
            return Alert.alert('Atenção!!', 'Tarefa já existe la lista')
        }

        const newItem: ItemTask = {
            task: taskAdd,
            finished: false
        };

        setListTasks(prevState => [...prevState, newItem]);
        setTaskAdd('');
        setTotalCreate(prevState => (prevState + 1))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View
                    style={styles.containerImageLogo}
                >
                    <Image
                        source={require('../../images/logo.jpg')}
                    />
                </View>
                <View style={styles.containerAdd}>
                    <TextInput
                        value={taskAdd}
                        style={styles.inputAdd}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#918d8d'}
                        onChangeText={text => setTaskAdd(text)}
                    />
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={handleTaskAdd}
                    >
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerList}>
                    <View style={styles.containerTotal}>
                        <View style={styles.containerTotalCriadas}>
                            <Text style={styles.textCriadas}>Criadas</Text>
                            <Text style={styles.textTotal}>{totalCreate}</Text>
                        </View>
                        <View style={styles.containerTotalConcluidas}>
                            <Text style={styles.textConcluidas}>Concluídas</Text>
                            <Text style={styles.textTotal}>{totalDone}</Text>
                        </View>
                    </View>
                    <View>                        
                        <FlatList
                            data={listTasks}
                            keyExtractor={item => item.task}
                            renderItem={({ item }) => (
                               <Task 
                               name={item.task}
                               done={item.finished}
                               />
                            )}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={styles.containerEmpty}>
                                    <View style={styles.containerImageEmpty}>
                                        <Image
                                            source={require('../../images/clipboard.jpg')}
                                        />
                                    </View>
                                    <Text style={styles.firstTextEmpty}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={styles.secondTextEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}