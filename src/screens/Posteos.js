import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react'
import {auth, db} from '../firebase/config'

export default function Posteos(props) {
    const [post, setPost] = useState("")

    function onSubmit(){
        db.collection("posteos").add({
            
        })
    }
    return (
        <View style={styles.container}>
            <Text>Crear nuevo post</Text>
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='Escribe aquí...'
                onChangeText={text => setPost(text)}
                value={post} />
            <Pressable onPress={() => onSubmit()}>
                <Text> Publicar post </Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({

    field: {
    },
})