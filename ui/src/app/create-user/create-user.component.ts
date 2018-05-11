import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private usernameText: string = "Username: "
  private passwordOneText: string = "Password: "
  private passwordTwoText: string = "Confirm Password: "

  private username: string;
  private passwordOne: string;
  private passwordTwo: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //safety check on password

  private handleCreateUser() {
    if (this.arePasswordsEqual()) {
      //submit
      //redirect
      //feed in id to portfolio
      this.router.navigate(["/portfolio"])
    } else {
      alert("ERROR. Please make sure your passwords match");
    }
  }

  private arePasswordsEqual(): boolean {
    return this.passwordOne === this.passwordTwo;
  }
}
