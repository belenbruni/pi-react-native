import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { auth, db } from '../firebase/config'
import { useState } from 'react'

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState('')
    const [registerError, setRegisterError] = useState('')

    function onSubmit() {
        console.log(email)
        console.log(username)
        console.log(password)
        if (email.includes("@") == false) {
            setRegisterError("Email mal formateado")
            return
        }
        if (password.length < 6) {
            setRegisterError("La password debe tener la longitud minima de 6 caracteres")
            return
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                db.collection('users').add({
                    owner: auth.currentUser.email,
                    username: username,
                    createdAt: Date.now()
                })
                setRegister(true);
                props.navigation.navigate("Login");
            })
            .catch(error => {
                console.log('error de firebase', error);
                setRegisterError(error.message)
                return
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput style={styles.campos}
                keyboardType='email-address'
                placeholder='Email'
                onChangeText={text => setEmail(text)}
                value={email} />
            <TextInput style={styles.campos}
                keyboardType='default'
                placeholder='Username'
                onChangeText={text => setUsername(text)}
                value={username} />
            <TextInput style={styles.campos}
                keyboardType='default'
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password} />
            <Text>{registerError}</Text>
            <Pressable style={styles.button} onPress={() => onSubmit()}>
                <Text style={styles.buttonText}> Registrarme </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}> Ya tengo cuenta </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: "#ed58a4",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
        margin: 5
    },

    buttonText: {
        color: 'white',
        fontSize: 16
    },
    campos: {
        color: "#ed58a4",
        width: 250,
        borderColor: "#ed58a4",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
        height: 20,
        paddingVertical: 15,
        margin: 8
    },

})