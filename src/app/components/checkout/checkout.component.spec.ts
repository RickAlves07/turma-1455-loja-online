import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an invalid form when empty', () => {
    expect(component.checkoutForm.valid).toBeFalsy();
  });

  it ('should make the name constrol valid when field is filled', () => {
    let nomeCompleto = component.checkoutForm.get('nomeCompleto');
    nomeCompleto?.setValue('João da Silva');
    expect(nomeCompleto?.valid).toBeTruthy();
  });

  it ('should validate email', () => {
    let email = component.checkoutForm.get('email');
    email?.setValue('joao'); // email inválido
    expect(email?.valid).toBeFalsy();

    email?.setValue('joao@example.com');
    expect(email?.valid).toBeTruthy(); // email válido
  });
});
