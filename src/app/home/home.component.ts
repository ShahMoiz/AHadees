import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dashBoard;
  constructor(private as: AppService) { }

  ngOnInit() {
  }
  func(){
    this.dashBoard = this.as.dashBoard;
    console.log(this.dashBoard)
  }

}
