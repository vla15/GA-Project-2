import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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

  constructor(private router: Router, private userSvc: UserService) { }

  ngOnInit() {
  }

  private handleCreateUser() {
    if (this.arePasswordsEqual()) {
      let newUser = {
        userName: this.username,
        password: this.passwordOne
      }
      this.userSvc.createUser(newUser)
        .subscribe(u => {
          this.userSvc.userSubject.next(u.json())
          console.log('user service');
          this.router.navigate(["/portfolio"]);
        })
    } else {
      alert("ERROR. Please make sure your passwords match");
    }
  }

  private arePasswordsEqual(): boolean {
    return this.passwordOne === this.passwordTwo;
  }
}
