import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signForm;
  items: FirebaseListObservable<any[]>;
  constructor(fb: FormBuilder,private af: AngularFire) { 
    this.signForm = fb.group({
      'fName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      'lName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      'email': ['abdulmoiz19994@gmail.com'],
      'pass': ['78612345'],
      'rePass': ['78612345'],
      // 'radio': ['admin']
    })
    // firebase.auth()
    // .createUserWithEmailAndPassword(this.signForm.user,this.signForm.pass).then(function(){
    //   alert("SignUp Complete")
    // })
  }

  ngOnInit() {
    this.items = this.af.database.list('/signUp');
  }
  // firebase.auth()
  onSubmit(f){
    firebase.auth()
    .createUserWithEmailAndPassword(f.email,f.rePass).then(function(){
      alert("SignUp Complete")
    }).catch(function(err){
      alert(err)
    });
    this.af.database.list('/signUp').push({
      'First Name': f.fName,
      'Last Name': f.lName,
      'Email': f.email,
      'pass': f.pass,
  });
    console.log("fdfd",f.email);
    console.log("fdfd",f.rePass);
    // return false;
  }

  
  form1(){
    return false;
  }

}
