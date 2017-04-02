import { Component, OnInit } from '@angular/core';

import { CartService } from '../shoppingCart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  scs;
  Products : any[] = [
    {brand: 'United', cate: 'Towel', manufacturer: 'Turkey',title: 'Example Towel', shortDes: '100% cotton Embroidered Turkey Towel',
     size: '20 x 40', price: 999, id: 0, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'Jazeera', cate: 'Towel', manufacturer: 'Turkey', title: 'Jazeera Towel', shortDes: '100% cotton amroided Turkey Al-Jazeera Towel',
     size: '20 x 60', price: 899, id: 1, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'Opera', cate: 'Towel', manufacturer: 'India',title: 'Example Opera Towel', shortDes: '100% cotton amroided Turkey Towel',
     size: '24 x 44', price: 799, id: 2, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'United', cate: 'BedSheets', manufacturer: 'Pakistan',title: 'United Double BedSheet', shortDes: '85% cotton printed Pakistani Bedsheet',
     size: '55 x 60', price: 699, id: 3, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'Al-Hayat', cate: 'Bedsheets', manufacturer: 'Egypt',title: 'Egypt Printed Bedsheets', shortDes: '85% cotton printed Egypt Bedsheet',
     size: '55 x 60', price: 999, id: 4, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
  ];
  constructor(private _SCS: CartService) {
    this.scs = _SCS;
    this.scs.productArray = this.Products;
   }
  
 carts: any[] = [];
addCart(title, brand, price, manufacturer, id){
  this.scs.carts.push(
   {title: title, brand: brand, price: price, manufacturer: manufacturer, id: id}
   );
}


  ngOnInit() {
  }

}
