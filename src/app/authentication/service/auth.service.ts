import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
// RXJS
import {map} from 'rxjs/operators';
// Firebase
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public zone: NgZone) {
  }

  // LOGIN DO GOOGLE

  user = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return auth.GoogleAuthProvider;
      }
    })
  );

  signinWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        console.log('Login Efetuado com Sucesso!');
        this.zone.run(() => {
          this.router.navigate(['/core/tasks']);
        });
      }).catch((err) => {
      console.log(err);
    });
  }
}
