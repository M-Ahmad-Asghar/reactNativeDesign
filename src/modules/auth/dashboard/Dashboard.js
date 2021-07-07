import React from 'react'
import { View, Text , ScrollView} from 'react-native';
import { styles } from "./DashboardStyle"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from '../../../commonComponents/card/Card';
export default function Dashboard() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.barIcon}>
                    <FontAwesome5 name={'bars'} size={25} />
                </View>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitleTxt}>Invertir</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                    <Text style={styles.bodyHeading}>Oportunidades de Inversión</Text>
                    <View style={{flex:1, height:300, marginTop:20}}>
                    <Card /> 
                    </View>
                    <View style={{flex:1, height:300, marginTop:20}}>
                    <Card /> 
                    </View>
                    <View style={{flex:1, height:300, marginTop:20}}>
                    <Card /> 
                    </View>
                    <View style={{flex:1, height:300, marginTop:20}}>
                    <Card /> 
                    </View>
            </View>
        </ScrollView>
    )
}
