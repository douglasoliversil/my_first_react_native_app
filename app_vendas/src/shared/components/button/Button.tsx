import { Text, TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./button.style";
import CustomText from "../text/CustomText";
import { theme } from "../../themes/theme";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
};

const Button = ({ title, margin, ...props }: ButtonProps) => {
    return (
        <ContainerButton {...props} margin={margin}>
            <CustomText color={theme.colors.neutralTheme.white}>{title}</CustomText>
        </ContainerButton>
    );
};

export default Button;