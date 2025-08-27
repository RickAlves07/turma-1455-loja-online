import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private fb: FormBuilder) { }
  checkoutForm!: FormGroup;

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required, Validators.minLength(5)]],
      formaPagamento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Formulário enviado:', this.checkoutForm.value);
      // Aqui você pode adicionar a lógica para processar o pagamento
    } else {
      console.log('Formulário inválido');
    }
  }

}
