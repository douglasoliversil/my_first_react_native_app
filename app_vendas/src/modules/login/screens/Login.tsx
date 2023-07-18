import { Text, View } from "react-native"
import { ContainerLogin } from "../styles/login.styles"
import Input from "../../../shared/components/input/Input"
import Button from "../../../shared/components/button/Button"
import CustomText from "../../../shared/components/text/CustomText"
import { theme } from "../../../shared/themes/theme"

const Login = () => {

    const handleOnLoginPress = () => {
        console.log("login");
    };

    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button type={theme.buttons.buttonsTheme.secondary} title="Entrar" margin="8px" onPress={handleOnLoginPress}/>
            </ContainerLogin>
        </View>
    );
}

export default Login;