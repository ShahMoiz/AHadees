import { Component, OnInit } from '@angular/core';

import { CartService } from '../shoppingCart.service';
@Component({
  selector: 'app-towel',
  templateUrl: './towel.component.html',
  styleUrls: ['./towel.component.css']
})
export class TowelComponent implements OnInit {
  scs;
  TowelsProduct: any[];
  constructor(private _SCS: CartService) { 
    for(var i = 0; i < _SCS.productArray.length; i++){
      if(_SCS.productArray[i].cate === 'Towel'){
        this.TowelsProduct = _SCS.productArray[i];
      }
    }
  }
 
  check(){
    console.log('This is Product Object',this._SCS.productArray);
    console.log('This is Towel Object',this._SCS.productArray);
  }
  ngOnInit() {
  }

}
