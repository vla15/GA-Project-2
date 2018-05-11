import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  private dummyPassword: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  private handleLogin() {
    this.router.navigate(["/portfolio"])
  }

}
