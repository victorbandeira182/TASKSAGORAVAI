import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from 'rxjs';
import {ThemeService} from './theme/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TASKS';

  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

}
