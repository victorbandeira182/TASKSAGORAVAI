import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../authentication/service/auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService: AuthService ) {
  }

  ngOnInit() {

  }

}
