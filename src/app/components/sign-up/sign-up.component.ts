// Import necessary Angular modules and dependencies
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
	
	signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rePassword: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

		constructor(private readonly apiService: ApiService){}
  //public async   signUp(): Promise<void> {

	//	this.signUpForm
	//	console.log(" \x1b[41m ", ':  ',  this.signUpForm," [0m " )
	//	//await this.apiService.signUp({})

  //}
}
