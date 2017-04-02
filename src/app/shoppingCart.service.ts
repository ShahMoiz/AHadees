import {Injectable} from '@angular/core';

@Injectable()
export class CartService {
    productArray;
    carts : any[] = [];
    cartBoolean: boolean = false;
    cartBoo(){
        return this.cartBoolean;
    }
}