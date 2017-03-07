import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = firebase.auth().currentUser;
func(){
  console.log(this.user)
//   if (this.user != null) {
//   this.user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: "+profile.providerId);
//     console.log("  Provider-specific UID: "+profile.uid);
//     console.log("  Name: "+profile.displayName);
//     console.log("  Email: "+profile.email);
//     console.log("  Photo URL: "+profile.photoURL);
//   });
// }
// this.user.delete().then(function() {
//   alert("User Deleted")
// }, function(error) {
//   alert(error)
// });
}
}
