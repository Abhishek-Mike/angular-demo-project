import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
 To receive data from the ProductAlertsComponent In product-list.component.html, bind <app-product-alerts> to the onNotify() method of the product list component. <app-product-alerts> is what displays the Notify Me button.
*/