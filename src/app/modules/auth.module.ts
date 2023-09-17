import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class AuthModule {}
