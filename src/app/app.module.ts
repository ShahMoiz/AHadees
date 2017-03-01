import { BrowserModule } from '@angular/platform-browser';
import { Route,Router,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
// import { AngularFireModule } from 'angularfire2';
// import * as firebase from 'firebase'
// import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { routes, routerModule } from './app.routes';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwpvtpgLSkUANXLDTj6yZGmf8PT1Ego2c",
    authDomain: "ahadees-8aeb2.firebaseapp.com",
    databaseURL: "https://ahadees-8aeb2.firebaseio.com",
    storageBucket: "ahadees-8aeb2.appspot.com",
    messagingSenderId: "421374039513"
  };
  var firebase = require("firebase"); 
  firebase.initializeApp(config);
  
  
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routerModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 