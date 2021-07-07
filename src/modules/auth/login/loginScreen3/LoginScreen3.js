import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { styles } from "./LoginScreen3Style";
import BlueButton from '../../../../commonComponents/blueButton/BlueButton';
import DarkButton from '../../../../commonComponents/darkButton/DarkButton';
import BlackFormInput from '../../../../commonComponents/blackFormInput/BlackFormInput';
export default function LoginScreen3() {
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
                            <Text style={styles.titleTxt}>Ingresa tu Nombre</Text>
                        </View>
                        <View style={styles.sketch}>
                            <Image source={require('../../../../assets/images/kyc1.png')} style={styles.logoImg} />

                        </View>
                        <View style={styles.form}>
                            <Text style={styles.inputTitleTxt}>Nombre(s)<Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Nombre(s)" />
                            <Text style={styles.inputTitleTxt}>Apellido Paterno <Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder="Apellido Paterno" />
                            <Text style={styles.inputTitleTxt}> Apellido Paterno* <Text style={styles.star}>*</Text></Text>
                            <BlackFormInput placeholder=" Apellido Paterno*" />
                        </View>
                        <View style={styles.buttons}>
                            <BlueButton text="Continuar" />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </View>
    )
}