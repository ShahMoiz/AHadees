import { Component, OnInit } from '@angular/core';

import { CartService } from '../shoppingCart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  scs
  constructor(private _SCS: CartService) { 
    this.scs = _SCS;
  }
  cartEnable(){
    this.scs.cartBoolean = true;
  }
  cartdisable(){
    this.scs.cartBoolean = false;
  }
  ngOnInit() {
  }
  dlt(index){
  // alert(index);
  this.scs.carts.splice(index, 1);
  // console.log(this.scs.carts.splice(index+1, 1));
}
}
