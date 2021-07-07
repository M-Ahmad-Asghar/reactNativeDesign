import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { styles } from "./LoginScreen1Style";
import BlueButton from '../../../../commonComponents/blueButton/BlueButton';
import DarkButton from '../../../../commonComponents/darkButton/DarkButton';
import BlackFormInput from '../../../../commonComponents/blackFormInput/BlackFormInput';
export default function LoginScreen1() {
    return (
        <View style={styles.container}>
            <View style={styles.bgDark}>
                <ImageBackground style={styles.bagImages} imageStyle=
                    {{ opacity: 0.5 }} source={require('../../../../assets/images/building2.png')} >

                    <View style={styles.logo}>
                        <Image source={require('../../../../assets/images/logo-white1.png')} style={styles.logoImg} />

                    </View>
                    <View style={styles.secondSec} resizeMode={"contain"}>
                        <View style={styles.title}>
                            <Text style={styles.titleTxt}>Iniciar sesión</Text>
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.inputTitleTxt}>Email<Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Email" />
                            <Text style={styles.inputTitleTxt}>Contraseña <Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Contraseña" />
                            <Text style={styles.forgetPass}>¿Olvidaste tu contraseña? </Text>
                        </View>
                        <View style={styles.buttons}>
                            <BlueButton text="Iniciar" />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}