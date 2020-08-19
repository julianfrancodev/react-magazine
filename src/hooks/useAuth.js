import React,{useEffect, useState} from 'react';
import firebase from '../firebase';


function useAuth(){
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const unsubscribre = firebase.auth.onAuthStateChanged(user =>{
            if(user){
                setUserAuth(user);
            }else{
                setUserAuth(null)
            }
        });
        return () => unsubscribre();
    }, [])

    return userAuth;
}

export default useAuth;
