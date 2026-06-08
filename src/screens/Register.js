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

        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                db.collection('users').add({
                    owner: auth.currentUser.email,
                    username: username,
                    createdAt: Date.now()
                })
                setRegister(true);
            })
            .catch(error => {
                console.log(error);
                setRegisterError('Fallo en el registro')
            })
            props.navigation.navigate("Login");
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
        alignItems: 'center'
    },
    campos: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})