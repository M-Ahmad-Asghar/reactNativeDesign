import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { styles } from "./LoginSignupStyle";
import BlueButton from '../../../commonComponents/blueButton/BlueButton';
import DarkButton from '../../../commonComponents/darkButton/DarkButton';
export default function LoginSignup() {
    return (
        <View style={styles.container}>
            <View style={styles.bgDark}>
                <ImageBackground style={styles.bgImages} imageStyle=
                    {{ opacity: 0.5 }} source={require('../../../assets/images/building2.png')} resizeMode={"contain"}>

                    <View style={styles.logo}>
                        <Image source={require('../../../assets/images/logo-white1.png')} style={styles.logoImg} />

                    </View>
                    <View style={styles.message}>
                        <Text style={styles.messageTxt}>CROWDFUNDING
                        </Text>
                        <Text style={styles.messageTxt}>
                            INMOBILIARIO </Text>
                    </View>

                    <View style={styles.buttons}>
                        <BlueButton text="Iniciar sesión" />
                        <DarkButton text="Crear cuenta" />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}