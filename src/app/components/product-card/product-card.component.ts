import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() viewProduct = new EventEmitter<string>()
  
  viewthing(){
    console.log('from child')
    this.viewProduct.emit(this.product.id)
  }
}
