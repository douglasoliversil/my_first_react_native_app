import { Text, TouchableOpacityProps } from "react-native";
import { ContainerButton, ContainerButtonSecondary } from "./button.style";
import CustomText from "../text/CustomText";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
};

const Button = ({ title, type, margin, ...props }: ButtonProps) => {

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ContainerButtonSecondary {...props} margin={margin}>
                    <CustomText type={textTypes.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>{title}</CustomText>
                </ContainerButtonSecondary>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ContainerButton {...props} margin={margin}>
                    <CustomText type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</CustomText>
                </ContainerButton>
            );
    }
};

export default Button;