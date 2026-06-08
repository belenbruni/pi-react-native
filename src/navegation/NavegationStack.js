import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login"
import Register from "../screens/Register"
import NavegationTab from "../navegation/NavegationTab"

const Stack = createNativeStackNavigator()

export default function NavegationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="NavegationTab" component={NavegationTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}