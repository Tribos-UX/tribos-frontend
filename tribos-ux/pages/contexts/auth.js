import { useState, useEffect } from "react";
import firebase from "/firebase/clientApp";

async function signIn(email, password){

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value)=>{
        let uid = value.user.uid;

        const userProfile = await firebase.firestore().collection('users')
        .doc(uid).get();

        let data = {
            uid: uid,
            email: value.user.email
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);

    })
    .catch((error)=>{
        console.log(error);
        setLoadingAuth(false);
    })
}