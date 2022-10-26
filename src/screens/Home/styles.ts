import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#454545',
        flex: 1
    },
    header: {
        position: 'absolute',
        height: 173,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#0D0D0D'
    },
    containerAdd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        position: 'absolute',
        height: 54,
        left: 24,
        right: 24,
        top: 142
    },
    inputAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 8,
        backgroundColor: '#262626',
        width: 271,
        height: 54,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        borderRadius: 6,
        flexGrow: 1,
    },
    buttonAdd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
        width: 52,
        height: 52,
        backgroundColor: '#1e6f9f',
        borderRadius: 6
    },
    textButton: {
        color: '#fff'
    },
    containerList: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        position: 'absolute',
        height: 247,
        left: 24,
        right: 24,
        top: 228
    },
    containerTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 0,
        width: 327,
        height: 19
    },
    containerTotalCriadas: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        width: 87,
        height: 19
    },
    textCriadas: {
        fontWeight: '700',
        fontSize: 14,
        color: '#4ea8de'
    },
    textTotal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 8,
        paddingEnd: 2,
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        borderRadius: 999,
        color: '#e0e0e0'
    },
    containerTotalConcluidas: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        width: 111,
        height: 19
    },
    textConcluidas: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: '#8284fa'
    }
});