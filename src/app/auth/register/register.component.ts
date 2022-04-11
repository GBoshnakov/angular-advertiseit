import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegData } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user.service';
import { emailValidator, passwordsMatch } from 'src/app/core/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage!: string;

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), emailValidator]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    passwords: new FormGroup({
      password: this.passwordControl,
      repass: new FormControl('', [Validators.required, passwordsMatch(this.passwordControl)])
    }) 
  })

  ngOnInit(): void {
  }

  submitHandler(): void {
    console.log(this.registerFormGroup.value);

    this.errorMessage = '';

    const user: IRegData = {
      username: this.registerFormGroup.value.username,
      email: this.registerFormGroup.value.email,
      phone: Number(this.registerFormGroup.value.phone),
      password: this.passwordsGroup.value.password,
      repass: this.passwordsGroup.value.rePassword,
    }

    // if (this.registerFormGroup.value.tel) {
    //   user.tel = this.registerFormGroup.value.telcode + this.registerFormGroup.value.tel;
    // } else {
    //   user.tel = '';
    // }

    this.userService.register(user).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
