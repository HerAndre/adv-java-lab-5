import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router: Router, private userService: UserService) { }

  login(username: string, password: string) {
    console.log(username, password);
    const user = this.userService.findUserByCredentials(username, password);
    if (user != null) { this.router.navigate(['profile', user.id]); }
  }
  ngOnInit(): void {
  }

}
