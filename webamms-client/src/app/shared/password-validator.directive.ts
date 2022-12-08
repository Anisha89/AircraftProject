
import { Directive } from "@angular/core";
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[passwordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]


})

export class PasswordValidatorDirective implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = this.passwordValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
  passwordValidator(): ValidatorFn {

    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        let isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(control.value)
        if (isValid) {
          return null;
        } else {
          return {
            passwordValidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };

  }


}