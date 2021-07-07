import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { styles } from "./LoginScreen2Style";
import BlueButton from '../../../../commonComponents/blueButton/BlueButton';
import DarkButton from '../../../../commonComponents/darkButton/DarkButton';
import BlackFormInput from '../../../../commonComponents/blackFormInput/BlackFormInput';
export default function LoginScreen2() {
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
                            <Text style={styles.titleTxt}>Abrir Cuenta</Text>
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.inputTitleTxt}>Email<Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Nombre(s)" />
                            <Text style={styles.inputTitleTxt}>Contraseña <Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Contraseña" />
                            <Text style={styles.inputTitleTxt}>Repetir contraseña <Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Repetir contraseña" />
                        </View>
                        <View style={styles.buttons}>
                            <BlueButton text="Abrir Cuenta" />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}