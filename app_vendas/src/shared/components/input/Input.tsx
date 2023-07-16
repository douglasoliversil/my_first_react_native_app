import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";

type InputProps = TextInputProps;

export const Input = ({...props}: InputProps) => {
    return (
        <ContainerInput {...props}/>
    )
};

export default Input;