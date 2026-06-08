import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import NavegationTab from "../navegation/NavegationTab"
import { useState } from "react"
import { auth } from "../firebase/config"

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    const [loginError, setLoginError] = useState("")

    function onSubmit() {
        console.log(email)
        console.log(password)
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                setLogin(true)
                props.navigation.navigate("NavegationTab")
            })
            .catch(error => {
                console.log(error);
                setLoginError("Credenciales inválidas")
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.campos}
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email} />
            <TextInput style={styles.campos}
                keyboardType="email-address"
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password} />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}> Entrar en la app </Text>
            </Pressable>
            <Text>{loginError}</Text>
            <Pressable style={styles.button} onPress={() => props.navigation.navigate("Register")}>
                <Text style={styles.buttonText}>Ir al registro</Text>
            </Pressable>
        </View>
    )
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