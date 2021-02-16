import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';

const appDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <appDrawer.Navigator
        drawerStyle={{
            backgroundColor:'#171717'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight:'bold'
            },
            activeTintColor:'#FFF',
            activeBackgroundColor:'#00b94a',
            inactiveBackgroundColor:'#000',
            inactiveTintColor:'#DDD',
            itemStyle:{
                marginVertical:5
            }
        }}
        >
            <appDrawer.Screen
                name="Home" component={Home}
            />
            <appDrawer.Screen
                name="Profile" component={Profile}
            />
            <appDrawer.Screen
                name="New" component={New}
            />
        </appDrawer.Navigator>
    );
}