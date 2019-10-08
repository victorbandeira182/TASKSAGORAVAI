import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LoginComponent} from './containers/login/login.component';
import {NavbarComponent} from './containers/navbar/navbar.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'core'},
  {path: 'core', component: NavbarComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},]},
  {path: 'login', component: LoginComponent},
  {
    path: 'tasks',
    loadChildren: () => import('../task/task.module').then(module => module.TaskModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
