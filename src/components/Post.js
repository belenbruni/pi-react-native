import { StyleSheet, Text, View } from 'react-native';

export default function Post(props){
    return(
        <View style={styles.container}>
            <Text>{props.username}</Text>
            <Text>{props.description}</Text>
            <Text>{props.like}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:30
    }

})