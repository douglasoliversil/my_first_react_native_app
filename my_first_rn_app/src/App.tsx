import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import Example from './Example';

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 28,
    },
    containerView: {
        backgroundColor: '#03fc7b',
        justifyContent: 'space-evenly',
        flex: 1,
    },
});

const CustomText = styled.Text`
    color:red;
    font-size: 48px;
    align-self: center;
`;

const list: string[] = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15",
    "item 16",
];

const App = () => {
    return (
        <SafeAreaView style={styles.containerView}>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item}</Text>
                )} />
            <Example text='Teste'>Testando children</Example>
            <Example text='Joao'>Testando children</Example>
            <CustomText>Custom Text</CustomText>
            <Button title='Botão' />
        </SafeAreaView>
    );
};

export default App;
