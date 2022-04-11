import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogData } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user.service';
import { emailValidator } from 'src/app/core/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage!: string;

  loginFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitHandler(): void {
    this.errorMessage = '';

    const user: ILogData = {
      username: this.loginFormGroup.value.username,
      password: this.loginFormGroup.value.password
    };


    this.userService.login(user).subscribe({
      next: user => {
        console.log(user);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
