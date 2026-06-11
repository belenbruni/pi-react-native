import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { auth, db } from "../firebase/config"
import firebase from "firebase"

export default function Post(props) {
    const [like, setLike] = useState(false)
    const [corazon, setCorazon] = useState("🤍")

    function likear(){
        db.collection('posteos')
        .doc(props.id)
        .update({
            like: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(() => {
            setLike(true)
            setCorazon("❤️")
        })
    }

    function deslikear(){
        db.collection('posteos')
        .doc(props.id)
        .update({
            like: firebase.firestore.FieldValue.arrayRemove(props.username)
        })
        .then(() => {
            setLike(false)
            setCorazon("🤍")
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Pressable onPress={() => like ? deslikear() : likear()} style={styles.likes}>
                <Text>{corazon}</Text>
                <Text>{props.like.length}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: 700,
        borderColor: "#ed58a4",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        marginVertical: 8,
        alignSelf: 'center',
    },

    username: {
        color: "#ed58a4",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },

    description: {
        fontSize: 15,
        marginBottom: 10,
    },

    likes: {
        color: "#ed58a4",
        fontSize: 14,
    }

})