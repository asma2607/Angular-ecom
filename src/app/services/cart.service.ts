import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart =signal<Product[]>([
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
]);

  addToCart(product: Product){
    this.cart.set([...this.cart(),product]);
  }

  removeFromCart(id:number){
    this.cart.set(this.cart().filter((p)=> p.id !==id));
  }
  constructor() { }
}
