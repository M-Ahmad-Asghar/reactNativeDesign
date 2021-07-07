import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "./LoginStyle"
import RedButton from "../../../commonComponents/redButton/RedButton";
import FormInput from '../../../commonComponents/formInput/FormInput';
export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.imageLogo}>
                <Image source={require('../../../assets/images/logo-white1.png')} style={styles.whiteLogo} />
            </View>
            <View style={styles.loginFormInp}>
                <FormInput placeholder="Correo electrónico" />
                <FormInput placeholder="Contraseña" />
                <Text style={styles.forgotPass}>¿Olvidaste tu contraseña? </Text>
            </View>
            <View style={styles.loginFormBtn}>
                <RedButton text="Login" />
            </View>
        </View>
    )
}
