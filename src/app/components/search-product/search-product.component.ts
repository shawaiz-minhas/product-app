import { Component, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.scss'
})
export class SearchProductComponent {
  text :string | undefined
  @Output() searchCmd = new EventEmitter<string>()
  // onTyping(event:any){
  //   console.log('Typing',event.target.value);
   
  // }
  onChange(event :any){
    // console.log("onChange",event.target.value)
    this.text = event.target.value
  }
  onSearch(){
    console.log("Search");
    this.searchCmd.emit(this.text)

  }
}
