import React from 'react'
import { View, Text, TextInput  } from 'react-native'
import {styles} from "./FormInputStyle"
export default function FormInput(props) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <TextInput value={text} placeholder={props.placeholder} placeholderTextColor="white"  onChangeText={onChangeText} style={styles.container}/>
        </View>
    )
}
