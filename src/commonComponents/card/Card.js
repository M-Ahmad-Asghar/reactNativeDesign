import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from "./CardStyle"
export default function Card(props) {
    return (
        <View style={styles.container}>
            <Text></Text>
            <View style={styles.headerContainer}>
                <View style={styles.headerContainerCh1}>
                    <Text style={styles.headerContainerCh1Txt}>Desarrollo Alfa</Text>
                </View>
                <View style={styles.headerContainerCh2}>
                    <Text style={styles.headerContainerCh1Txt}>Quedan 39 días</Text>
                </View>
            </View>
            <View style={styles.upperTitle}>
                <Text style={styles.upperTitleTxt}>
                    Deuda
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Image source={require('../../assets/images/dcd.png')} resizeMode={("contain")} style={styles.bodyImg} />
            </View>
            <View style={styles.loading}>
                <View style={styles.succLoad}>
                    <Text style={styles.succLoadTxt}>
                        40%
                    </Text>
                </View>
                <View style={styles.remLoad}>

                </View>
            </View>
            <View style={styles.stats}>
                <View style={styles.stats1}>
                    <Text style={styles.stats1Txt}>
                    $1.5MM recaudado
                    </Text>
                </View>
                <View style={styles.stats2}>
                    <Text style={styles.stats2Txt}>
                    Min $4.5MM
                    </Text>
                </View>
                <View style={styles.stats3}>
                    <Text style={styles.stats3Txt}>
                    Max $4.5MM
                    </Text>
                </View>

            </View>
            <View style={styles.detailsUp}>
                    <View style={styles.detailsUp1}>
                        <Text style={styles.detailsUpTxt}>
                        Tasa anual fija
                        </Text>
                    </View>
                    <View style={styles.detailsUp2}>
                        <Text style={styles.detailsUpTxt}>
                        Mín de inversión
                        </Text>
                    </View>
                    <View style={styles.detailsUp3}>
                        <Text style={styles.detailsUpTxt}>
                        Plazo
                        </Text>
                    </View>
            </View>
            <View style={styles.detailsDown}>
                    <View style={styles.detailsUp1}>
                        <Text style={styles.detailsDownTxt}>
                        12.32%
                        </Text>
                    </View>
                    <View style={styles.detailsUp2}>
                        <Text style={styles.detailsDownTxt}>
                        $54,000 MXN
                        </Text>
                    </View>
                    <View style={styles.detailsUp3}>
                        <Text style={styles.detailsDownTxt}>
                        12 meses
                        </Text>
                    </View>
            </View>
        </View>
    )
}

 