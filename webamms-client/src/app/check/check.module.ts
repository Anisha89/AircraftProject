import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareValidatorDirective } from '../shared/compare-validator.directive';
import { PasswordValidatorDirective } from '../shared/password-validator.directive';

 
@NgModule({
  declarations: [CompareValidatorDirective,

    PasswordValidatorDirective
    ],
  imports: [
    CommonModule,
    
  ],
  
  exports:[CompareValidatorDirective,

    PasswordValidatorDirective
    ]
})
export class CheckModule { }

