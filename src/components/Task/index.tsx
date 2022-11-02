import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface TaskDTO {
    name?: string;
    done?: boolean;
}

export function Task({ name, done }: TaskDTO) {
    return (
        <View style={styles.container}>
            <View style={styles.finished}></View>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity>
                <Image
                    style={styles.img}
                    source={require('../../images/trash.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
}