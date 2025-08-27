import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartStatusComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Minha loja de produtos';
}
