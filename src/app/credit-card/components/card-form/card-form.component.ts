import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  template: `
    <form [formGroup]="cardForm">
      <app-input [control]="cardForm.get('name')"></app-input>
    </form>

    <div>Form Contents: {{ cardForm.value | json }}</div>
    <div>Form is Valid: {{ cardForm.valid }}</div>
    <div>Errors around name: {{ cardForm.controls.name.errors | json }}</div>
  `,
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
}
