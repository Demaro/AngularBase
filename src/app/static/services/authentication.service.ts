import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthenticationService {
    user_name = ''
    user: Observable<firebase.User>;
    authenticated: boolean = false;
   constructor(public afAuth: AngularFireAuth){   
       
    this.afAuth.authState.subscribe(
        (auth) =>{
          if(auth !=null){
            this.user = afAuth.authState;
            this.authenticated = true;
            
          }
          
        }

  
      )
    }
  
  

   login(){
       
       return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
       
   }

   logout() {
      return this.afAuth.auth.signOut();
   }
}