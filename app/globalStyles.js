import { Appearance, StatusBar, StyleSheet } from "react-native";

const colorScheme = Appearance.getColorScheme();
export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: colorScheme === 'light' ? '#fff' : '#555',
        justifyContent: 'flex-start',
    },
    content: {
        backgroundColor: colorScheme === 'light' ? '#fff' : '#000',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 1
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    addtodo: {
        backgroundColor: colorScheme === 'light' ? '#fff' : '#000',
        marginTop: 5,
    },
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: colorScheme === 'light' ? '#f0f0f0' : '#CCC',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    header: {
        backgroundColor: 'coral',
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    footer: {
        backgroundColor: colorScheme === 'light' ? '#CCC' : '#333',
        justifyContent: 'flex-end',
    },
    footerText: {
        textAlign: 'center',
        color: colorScheme === 'light' ? '#000' : '#CCC',
        fontSize: 9,
        paddingTop: 5,
        paddingBottom: 5
    },
    rowFront: {
        flexDirection: 'row',
        backgroundColor: colorScheme === 'light' ? '#FFF' : '#333',
        marginBottom: 10,
        borderColor: colorScheme === 'light' ? '#BBB' : '#555',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 16,
    },
    itemKey: {
        color: 'teal'
    },
    item: {
        paddingLeft: 5,
        color: colorScheme === 'light' ? '#444' : '#999',
    },
    rowBack: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        paddingTop: 12,
        paddingLeft: 15,
    }
});