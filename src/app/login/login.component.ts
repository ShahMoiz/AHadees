import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLog: FormGroup;
  // log = '';
  // err = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLog = this.fb.group({
      'email': 'abdulmoiz19994@gmail.com',
      'pass': ''
    })
  }

  OnSubmit(f){
    firebase.auth().signInWithEmailAndPassword(f.email, f.pass).then(function(){
      alert("Login Successfull")
    }).catch(function(err){
      alert(err)
    })
    console.log(f)
  }

}
