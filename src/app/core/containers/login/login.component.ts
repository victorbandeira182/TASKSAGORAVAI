import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../authentication/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authenticationService: AuthService,) {
  }

  ngOnInit() {

  }


  // Entra com Google

  signinGoogle() {
    this.authenticationService.signinWithGoogle();
    console.log('Entrando com a conta Google');
  }

}
