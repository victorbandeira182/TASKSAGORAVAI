import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from '../../../theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
