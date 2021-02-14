import React,{useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppRoutes from './approutes';
import AuthRoutes from './authroutes';

import {AuthContext} from '../contexts/auth';

export default function Routes(){
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
                <ActivityIndicator size="large" color="#131313" />
            </View>
        );
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}