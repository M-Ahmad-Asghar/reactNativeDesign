import React from 'react'
import { View, Text, Button, Alert, TouchableOpacity  } from 'react-native'
import {styles} from "./RedButtonStyle" 
export default function RedButton(props) {
    return (
        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
        <View style={styles.container}  >
            <Text style={styles.button}>
                {props.text}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
