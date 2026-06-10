import { StyleSheet, Text, View } from 'react-native';

export default function Post(props){
    return(
        <View style={styles.container}>
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.likes}>{props.like}</Text>
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