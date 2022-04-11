import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
  }

  logoutHandler(): void {
    this.userService.logout().subscribe({
      next: data => {
        console.log(data);
      },
      complete: () => {
        console.log('logging out')
        this.router.navigate(['/home']);
      }
    });
  }

}
