import { StyleSheet, Text, View, FlatList } from 'react-native';
import { auth, db } from "../firebase/config"
import { useState, useEffect } from "react"
import { ActivityIndicator } from 'react-native-web';
import Post from "../components/Post"

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posteos')
            .where('owner', "!=", auth.currentUser.email)
            .orderBy('owner', 'desc')
            .onSnapshot(
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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            {posts.length > 0? (
                <FlatList data={posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Post
                        username={item.data.owner}
                        description={item.data.description}
                        like={item.data.like}
                        id={item.id}
                    />}
                    style={styles.posteos}>
                </FlatList>
            )
                : (<ActivityIndicator size="large" color="pink" />)}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        marginBottom: 10
    }
})