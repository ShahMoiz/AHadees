import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  Products : any[] = [
    {brand: 'United', manufacturer: 'Turkey',title: 'Example Towel', shortDes: '100% cotton Embroidered Turkey Towel',
     size: '20 x 40', price: 999, id: 0, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'Jazeera', manufacturer: 'Turkey', title: 'Jazeera Towel', shortDes: '100% cotton amroided Turkey Al-Jazeera Towel',
     size: '20 x 60', price: 899, id: 1, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
    {brand: 'Opera', manufacturer: 'India',title: 'Example Opera Towel', shortDes: '100% cotton amroided Turkey Towel',
     size: '24 x 44', price: 799, id: 2, img: `https://img.clipartfest.com/2418c4cab810c72e4ae8f1ad63816465_shopping-bags-show-retail-shopping-images-clip-art_1672-1254.jpeg`},
  ];

 carts: any[] = [];
addCart(title, brand, price, manufacturer, id){
 this.carts.push(
   {title: title, brand: brand, price: price, manufacturer: manufacturer, id: id}
   );
   console.log(this.carts);
  //  console.log(this.carts[id].id);
}

dlt(index){
  alert(index);
  this.carts.splice(index, 1);
  console.log(this.carts.splice(index+1, 1));
}

  ngOnInit() {
  }

}
