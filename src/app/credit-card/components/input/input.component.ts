import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <input [formControl]="control" />
    <!-- <ng-container
      *ngIf="
        cardForm.controls.name.dirty &&
        cardForm.controls.name.touched &&
        cardForm.controls.name.errors
      "
    >
      <div *ngIf="cardForm.controls.name.errors.required">
        Value is required.
      </div>
      <div *ngIf="cardForm.controls.name.errors.minlength">
        Value you entered is
        {{ cardForm.controls.name.errors.minlength.actualLength }}
        characters long, but it must be at least
        {{ cardForm.controls.name.errors.minlength.requiredLength }}
        characters
      </div>
    </ng-container> -->
  `,
})
export class InputComponent {
  @Input() control!: FormControl;
}
