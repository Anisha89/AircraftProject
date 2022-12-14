import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
  @Input('compare') controlNameToCompare: string;
  constructor() { }
  validate(c: AbstractControl): ValidationErrors | null {
    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (c.value === null || c.value.length === 0) {
      return null;
    }
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
  }
}
