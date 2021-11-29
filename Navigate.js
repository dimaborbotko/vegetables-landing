import React from "react";
import Register from "./src/screens/Register";
import Main from "./src/screens/Main";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Register"
                component={Register}
                options={{title: "Opening"}}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{title: "Main"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}