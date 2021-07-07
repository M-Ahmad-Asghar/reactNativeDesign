import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        maxHeight: 300,
        borderRadius: 20,
    },
    headerContainer: {
        flex: 0.8,
        flexDirection: "row",
        margin: 10,
        marginTop: 5,
    },
    headerContainerCh1: {
        flex: 1.5,
        marginLeft: 10
    },
    headerContainerCh1Txt: {
        fontWeight: "bold"
    },
    headerContainerCh2Txt: {
        fontWeight: "bold"
    },
    headerContainerCh2: {
        flex: 1,
    },
    pageTitle: {
        flex: 9,
        alignSelf: "center",
        marginLeft: "30%"
    },
    pageTitleTxt: {
        fontSize: 20
    },
    bodyImg: {
        width:300
    },
    bodyContainer: {
        flex: 4,
        overflow:"hidden",
        alignItems:"center",
        justifyContent:"center"
    },
    upperTitle:{
        flex:0.6,
        backgroundColor:"#227BFF",
        alignItems:"center",
        justifyContent:"center"
        
    },
    upperTitleTxt:{
        color:"white",
        fontSize:10,
    },
    loading:{
        flex:0.7,
        flexDirection:"row",
        
    },
    succLoad:{
        flex:4,
        backgroundColor:"#227BFF",
        alignItems:"center",
        justifyContent:"center"
    },
    remLoad:{
        flex:6,
        backgroundColor:"#d6d6d6"
    },
    succLoadTxt:{
        color:"white",
        fontSize:11
    },
    stats:{
        flex:0.7,
        flexDirection:"row",
        paddingLeft:10,
        borderBottomColor:"#d6d6d6",
        borderBottomWidth:1
    },
    stats1:{
        flex:1
    },
    stats2:{
        flex:1,
    },
    stats3:{
        flex:1
    },
    stats1Txt:{
       fontSize:10
    },
    stats2Txt:{
        fontSize:10
    },
    stats3Txt:{
        fontSize:10,
    },
    detailsUp:{
        flex:0.6,
        flexDirection:"row",
        marginLeft:30,
        alignItems:"flex-end"
    },
    detailsUp1:{
        flex:1
    },
    detailsUp2:{
        flex:1
    },
    detailsUp3:{
        flex:1
    },
    detailsUpTxt:{
        fontSize:10
    },
    detailsDownTxt:{
        fontSize:16
    },
    detailsDown:{
        flex:0.9,
        flexDirection:"row",
        marginLeft:30,
       marginBottom:20,
       alignItems:"flex-start"

    },
})
