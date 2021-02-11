import React,{useContext} from 'react';

import AppRoutes from './approutes';
import AuthRoutes from './authroutes';

import {AuthContext} from '../contexts/auth';

export default function Routes(){
    const { signed } = useContext(AuthContext);
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}