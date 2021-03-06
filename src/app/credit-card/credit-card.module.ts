import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './components/card-form/card-form.component';
import { InputComponent } from './components/input/input.component';
import { CreditCardComponent } from './containers/credit-card.component';

@NgModule({
  declarations: [CreditCardComponent, CardFormComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreditCardComponent],
})
export class CreditCardModule {}
