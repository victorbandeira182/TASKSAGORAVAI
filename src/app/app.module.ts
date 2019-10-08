import {AppRoutingModule} from './app-routing.module';
// --------------
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
// --------------
import {AppComponent} from './app.component';
import {SharedModule} from './core/shared/shared.module';
// --------------
import {environment} from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// --------------
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './task/store/reducers/task.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// --------------
import { TaskModule } from './task/task.module';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './task/store/effects/task.effect';
import {CoreModule} from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    TaskModule,
    StoreModule.forRoot(TaskReducer, {}),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    CoreModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
