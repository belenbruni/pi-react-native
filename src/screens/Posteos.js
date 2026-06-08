import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react'
import {auth, db} from '../firebase/config'

export default function Posteos(props) {
    const [post, setPost] = useState("")

    function onSubmit(){
        db.collection("posteos").add({
            owner: auth.currentUser.email,
            createdAt: Date.now(),
            description: post,
            like: []
        })
        .then(res => {props.navigation.navigate("Home")})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear nuevo post</Text>
            <TextInput style={styles.campos}
                keyboardType='default'
                placeholder='Escribe aquí...'
                onChangeText={text => setPost(text)}
                value={post} 
                multiline={true} />
            <Pressable style={styles.button} onPress={() => onSubmit()}>
                <Text style={styles.buttonText}> Publicar post </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 10,
        marginTop: 20
    },

    title:{
        fontSize:32,
        fontWeight:'bold',
        marginBottom: 10,
    },

    button:{
        backgroundColor: "#ed58a4",
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:10,
        width:200,
        alignItems:'center',
        margin: 5
    },

    buttonText:{
        color:'white',
        fontSize:16
    },
    campos:{
        color: "#ed58a4", 
        width: 350,
        borderColor: "#ed58a4",
        borderWidth: 1,
        borderRadius: 10, 
        paddingHorizontal: 10, 
        backgroundColor: "white",
        height: 200, 
        paddingVertical: 15,
        margin: 8
    },
})