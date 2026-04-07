import { CommonModule } from '@angular/common';
import { ValidatorMessage } from './../../../models/interfaces/form-control.model';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss',
})
export class FormControlComponent {
  @Input() label = '';
  @Input() control!: AbstractControl | null;
  @Input() validators: ValidatorMessage[] = [];
  @Input() submitted = false;

  get errorMessage(): string {
    if (!this.control) return '';

    const showError =
      this.control.invalid &&
      (this.control.touched || this.control.dirty || this.submitted);

    if (!showError) return '';

    for (const v of this.validators) {
      if (this.control.hasError(v.error)) {
        return v.message;
      }
    }

    return '';
  }
}
