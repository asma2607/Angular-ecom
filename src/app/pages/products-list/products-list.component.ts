import { Component, signal } from '@angular/core';
import {Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id){
        <app-product-card [product]="product"/>
      }
        </div>
  `,
  styles: ``
})
export class ProductsListComponent {

// async ngOnInit(){
// const res = await fetch('https://fakestoreapi.com/products');
// const data = await res.json();
// this.products.set(data);
// }

  products = signal<Product[]>([
    {
    id: 1,
    title: 'Apples',
    price: 19.99,
    image: 'https://t4.ftcdn.net/jpg/03/10/32/03/240_F_310320316_xcQ2MHvAh9VtBndM6fxjZ7DGKdKpujei.jpg',
    stock: 25,
    
  },
  {
    id: 2,
    title: 'Bananas',
    image: 'https://t3.ftcdn.net/jpg/05/25/23/64/240_F_525236499_1J6BTWO61V3xc0eOiJMRfrFsb8HIkGI3.jpg',
    price: 49.99,
    stock: 0,
  },
  {
    id: 3,
    title: 'Milk',
    image: 'https://t3.ftcdn.net/jpg/06/11/55/12/240_F_611551249_mIew1biF3U0qNpdgesFgajH0je6HpFeM.jpg',
    price: 39.99,
    stock: 10
  },
  {
    id: 4,
    title: 'Bread',
    image: 'https://t4.ftcdn.net/jpg/03/31/50/91/240_F_331509128_T8PZMPob1ejALzCAY7lxkiDBp2yAwEUF.jpg',
    price: 59.99,
    stock: 30
  }
  ])
}
