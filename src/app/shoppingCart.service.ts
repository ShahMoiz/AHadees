import {Injectable} from '@angular/core';

@Injectable()
export class CartService {
    carts : any[] = [];
    cartBoolean: boolean = false;
    cartBoo(){
        return this.cartBoolean;
    }
}