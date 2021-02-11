import React, { useState, createContext } from 'react';

import firebase from '../Services/FirebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    async function signUp(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome
                }).then(() => {
                    let data = {
                        uid:uid,
                        nome:nome,
                        email:value.user.email
                    }
                    setUser(data)
                })

            })
    }

    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{ signed: !!user, user , signUp }} >
            {children}
        </AuthContext.Provider>
    );
}