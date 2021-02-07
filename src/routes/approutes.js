import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const appStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <appStack.Navigator>
            <appStack.Screen
                name="Home" component={Home}
            />
        </appStack.Navigator>
    );
}