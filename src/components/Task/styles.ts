import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',        
        width: 327,
        height: 64,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8
    },
    finished: {
        width: 24,
        height: 24,        
        borderWidth: 1,
        borderColor: '#aea8de',
        borderRadius: 15,
        margin: 12
    },
    text: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#f2f2f2'
    },
    img: {
        position: 'absolute',        
        marginTop: -10,
        height: 25,
        width: 25,
        flexGrow: 0,
        borderRadius: 4
    }
});