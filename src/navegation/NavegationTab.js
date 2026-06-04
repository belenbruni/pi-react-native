import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { StyleSheet } from "react-native"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Posteos from "../screens/Posteos";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator()

export default function NavegationTab(){
    return(
        <Tab.Navigator screenOptions={ {tabBarShowLabel: false}}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />}} />
            <Tab.Screen name="Posteos" component={Posteos} options={{headerShown: false, tabBarIcon: ()=> <AntDesign name="plus-square" size={24} color="black" />}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarIcon: ()=> <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />}}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

    tab:{
        height:70,
        paddingBottom:10,
        
    }

})