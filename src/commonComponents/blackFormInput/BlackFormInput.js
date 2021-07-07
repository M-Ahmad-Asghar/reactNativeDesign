import React from 'react'
import { View, Text, TextInput  } from 'react-native'
import {styles} from "./BlackFormInputStyle"
export default function BlackFormInput(props) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <TextInput value={text} placeholder={props.placeholder} placeholderTextColor="rgba(0,0,0,0.3)"  onChangeText={onChangeText} style={styles.container}/>
        </View>
    )
}
