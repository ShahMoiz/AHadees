import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from './../app.service';

import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;
  constructor(private fb: FormBuilder, private as: AppService) { }

  ngOnInit() {
    this.formLog = this.fb.group({
      'email': ['abdulmoiz19994@gmail.com', Validators.compose([
        Validators.required
      ])],
      'pass': [null, Validators.compose([
        Validators.required
      ])],
      'radio': ['user', Validators.compose([
        Validators.required
      ])],
    })
  }

  OnSubmit(f){
    firebase.auth().signInWithEmailAndPassword(f.email, f.pass).then(function(){
      alert("Login Successfull")
    }).catch(function(err){
      alert(err)
    })
    this.as.checkDashBoard(f.radio)
    console.log(f);
    console.log(f.radio);
  }

}
