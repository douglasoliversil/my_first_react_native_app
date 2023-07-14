import { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native"
import { styled } from "styled-components";

const MyPinkText = styled.Text`
    color: pink;
    font-size: 28px;
    font-weight: 600;
`

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: `#ddd`,
        margin: 16
    }
})

interface ExampleProps {
    text: string;
    children: string;
}

const Example = ({ text, children }: ExampleProps) => {
    const [newText, setNewText] = useState(String);
    const [inputText, setInputText] = useState<string>();

    const handleOnPress = () => {
        setNewText(`NOVO TEXTO`);
        console.log(inputText)
    }

    const handleNewInput = (newInputText: string) => {
        setInputText(newInputText)
    }

    return (
        <View>
            <MyPinkText>{children}</MyPinkText>
            <Text>{newText || text}</Text>
            <TextInput value={inputText} onChangeText={handleNewInput} style={styles.textInput} />
            <Button onPress={handleOnPress} title="Botao" />
        </View>
    )
}

export default Example;