import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';

const authStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <authStack.Navigator>
            <authStack.Screen
                name="SignIn" component={SignIn}
            />
        </authStack.Navigator>
    );
}

