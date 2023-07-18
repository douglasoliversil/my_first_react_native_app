import { styled } from "styled-components/native";
import { theme } from "../../themes/theme";

interface ContainerButtonProps {
    margin?: string;
};

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: blue;
    justify-content: center;
    align-items: center;
    ${(props) => props.margin ? `margin: ${props.margin};` : ``};
`;

export const ContainerButtonSecondary = styled.TouchableOpacity<ContainerButtonProps>`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${theme.colors.mainTheme.primary};
    ${(props) => props.margin ? `margin: ${props.margin};` : ``};
`;