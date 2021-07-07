import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0C1327",
        // flexWrap:"wrap"
        // flexDirection:"row"
        
    },
    imageLogo:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
    }
    ,
    whiteLogo:{
        resizeMode:"contain",
        width:240
    },
    loginFormInp:{
        flex:1,
        // backgroundColor: 'blue',
        justifyContent:"flex-start"
    }
    ,
    loginFormBtn:{
        flex:1,
        // backgroundColor: 'gray',
        justifyContent:"flex-end"
    },
    forgotPass:{
        color:"white",
        marginLeft:30,
        
    },
    
})
