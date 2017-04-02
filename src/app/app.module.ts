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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppService } from './app.service';
import { CartService } from './shoppingCart.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { routes, routerModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavComponent } from './nav/nav.component';
import { NoPageComponent } from './404-page/404-page.component';
import { ContentComponent } from './content/content.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TowelComponent } from './towel/towel.component';

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
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    HeaderComponent,
    HeaderComponent,
    SidenavComponent,
    NavComponent,
    NoPageComponent,
    ContentComponent,
    ShoppingCartComponent,
    TowelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routerModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    NgbModule.forRoot()
  ],
  providers: [AppService, CartService],
  bootstrap: [AppComponent],

})
export class AppModule { }
 