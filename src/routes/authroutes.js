import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const authStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <authStack.Navigator>
            <authStack.Screen
                name="SignIn" 
                component={SignIn}
                options={{
                    headerShown:false
                }}
            />
            <authStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle:{
                        backgroundColor: '#131313',
                        borderBottomColor: '#00b94a',
                        borderWidth: 1
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible:false,
                    headerTitle: 'Voltar'
                }}
            />
        </authStack.Navigator>
    );
}

