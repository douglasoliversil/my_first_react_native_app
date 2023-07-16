import { Text, TextProps } from "react-native";
import { ContainerText } from "./text.style";

interface CustomTextProps extends TextProps {
    color?: string
}

const CustomText = ({color, ...props}: CustomTextProps) => {
    return (
        <ContainerText color={color} {...props}/>
    );
};

export default CustomText;