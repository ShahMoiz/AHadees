import { Component, OnInit } from '@angular/core';


import { CartService } from '../shoppingCart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 scs
  constructor(private _SCS: CartService) {
    this.scs = _SCS;
   }
shoppingCart() {
  this.scs.cartBoolean = true;
}

disableCart(){
  this.scs.cartBoolean = false;
}
  ngOnInit() {
  }

}
