import app from 'firebase/app';

import firebaseConfig from './config';
import 'firebase/auth';

class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }

        this.auth = app.auth();
        
    }

    async signup(name, email, passwrod){
        const createUser = await this.auth.createUserWithEmailAndPassword(email,passwrod);

        return await createUser.user.updateProfile({
            displayName: name
        })

    }

    async login(email, password){
        return await this.auth.signInWithEmailAndPassword(email,password);
    }

    async logout (){
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;