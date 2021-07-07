import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    bagImages:{
        flex:1,
    },
    bgDark:{
        flex:1,
        backgroundColor:"black",
        opacity:1
    },
    secondSec:{
        flex:4,
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    logo:{
        flex:1,
        // alignItems: "center",
        justifyContent:"flex-start",
        marginLeft:50,
        marginTop:50,
        
    },
    logoImg:{
        resizeMode:"contain",
        width:200,
       
    },
    title:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start",
        
    },
    form:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        marginLeft:20
    },
    star:{
        color:"red"
    },
    inputTitleTxt:{
        fontSize:15,
        paddingTop:15,
        marginLeft:10
    },
    titleTxt:{
        fontWeight:"bold",
        fontSize:20,
        
    },
    messageTxt:{
        color:"white",
        fontWeight:"bold"
    },
    buttons:{
        flex:7,
        justifyContent:"flex-end",
        marginBottom:40
    },
    forgetPass:{
        alignSelf:"flex-end",
        marginRight:20
    },
    
})
