import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  template: `
    <form [formGroup]="cardForm">
      <input type="text" formControlName="name" />
    </form>

    <div>Form Contents: {{ cardForm.value | json }}</div>
    <div>Form is Valid: {{ cardForm.valid }}</div>
  `,
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
}
