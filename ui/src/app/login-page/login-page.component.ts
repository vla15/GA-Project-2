import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private usernameText: string = "Username: "
  private passwordText: string = "Password: "
  private username: string;
  private password: string;
  constructor(private router: Router, private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.userSubject
      .subscribe(
        (u) => {
          this.router.navigate(["/portfolio"])
        },
        (e) => {
          console.log('invalid username', e);
        })
  }

  private handleLogin() {
    let user = {
      id: 0,
      password: this.password,
      userName: this.username,
      firstName: "",
      lastName: ""
    }
    this.userSvc.loginUser(user);
  }

}
