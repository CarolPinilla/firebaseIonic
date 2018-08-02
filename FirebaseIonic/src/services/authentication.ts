import { Injectable } from '@angular/Core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication {
    constructor
        (private angularFire: AngularFireAuth) { }
    createUserWithEmailAndPassword(email, password) {
        this.angularFire.auth.createUserWithEmailAndPassword(email, password);
    }

    crearUsuarioGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.angularFire.auth.signInWithRedirect(provider)
        .then(result=>{
            return firebase.auth().getRedirectResult;
        }        
        )
    }

    crearUsuarioFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.angularFire.auth.signInWithRedirect(provider)
        .then(result=>{
            return firebase.auth().getRedirectResult;
        }        
        )
    }


}