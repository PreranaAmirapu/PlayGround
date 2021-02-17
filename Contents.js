import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage/Homepage';
import Profile from './Pages/Profile';
import footer from './Components';

function HomeScreen(){
    return (<HomePage></HomePage>);
}
const Stack = createStackNavigator();


export default function Contents(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
               <Stack.Screen
                    name="Profile"
                    component={Profile}
               />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}