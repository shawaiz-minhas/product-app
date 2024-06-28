import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchProductComponent } from '../search-product/search-product.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
product = [{
  "id" : "1",
  "brand" : "AAA",
  "img" : "https://www.inkfactory.pk/wp-content/uploads/2022/10/Mint-T-Shirt-119.jpg",
  "currentPrice" : "200",
  "standardPrice" : "300",
  "discount" : "40",
  "name" : "It is only for men use"
},
{
  "id" : "2",
  "brand" : "BBB",
  "img" : "https://www.inkfactory.pk/wp-content/uploads/2022/10/Mint-T-Shirt-119.jpg",
  "currentPrice" : "300",
  "standardPrice" : "600",
  "discount" : "60",
  "name" : "It is only for child use"
},
{
  "id" : "3",
  "brand" : "CCC",
  "img" : "https://www.inkfactory.pk/wp-content/uploads/2022/10/Mint-T-Shirt-119.jpg",
  "currentPrice" : "1200",
  "standardPrice" : "1500",
  "discount" : "40",
  "name" : "It is only for female use"
}]
viewList(lol : any){
  console.log('from parent',lol)
}

filterProduct : any[] = [];
ngOnInit(){
  this.filterProduct = this.product
}
onSearchs(search :string){
  console.log('from parent',search)
  if(search){
    this.filterProduct = this.product.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
  }
  else{
    this.filterProduct = this.product
  }
  }
}
