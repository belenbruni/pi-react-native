import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { auth, db } from "../firebase/config"
import { useState, useEffect } from "react"
import { ActivityIndicator } from 'react-native-web';
import Post from "../components/Post"

export default function Profile(props) {
    const [usuarios, setUsuarios] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("users").where("owner", "==", auth.currentUser.email).onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })

                })
                setUsuarios(users[0])
                console.log(users)
            })

        db.collection("posteos").where("owner", "==", auth.currentUser.email).onSnapshot(
            docs => {
                let posteos = [];
                docs.forEach(doc => {
                    posteos.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setPosts(posteos)
                console.log(posteos)
            })
    }, [])

    function onSubmit() {
        auth.signOut()
        props.navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.title}>Mi perfil</Text>

                <Pressable style={styles.buttonOut} onPress={() => onSubmit()}>
                    <Text style={styles.buttonOutText}>Cerrar sesión</Text>
                </Pressable>
            </View>

            {usuarios.data ? (
                <>
                    <Text style={styles.datos}>{usuarios.data.owner}</Text>
                    <Text style={styles.datos}>{usuarios.data.username}</Text>
                    <Text style={styles.titleDos}>Últimos posteos</Text>
                    <FlatList data={posts}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Post
                            username={item.data.owner}
                            description={item.data.description}
                            like={item.data.like}
                        />}
                        style={styles.posteos}>
                    </FlatList>
                </>)
                : (<ActivityIndicator size="large" color="pink" />)}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        flex: 1,
        marginLeft: 120
    },
    titleDos: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: 290
    },
    datos: {
        fontSize: 15,
        color: "#ed58a4",
        fontWeight: "bold",
    },
    posteos: {
        width: "100%",
        flex: 1
    },
    buttonOut: {
        alignSelf: "flex-end",
        backgroundColor: "#ed58a4",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,

    },
    buttonOutText: {
        color: "white",
        fontWeight: "bold"
    }

})