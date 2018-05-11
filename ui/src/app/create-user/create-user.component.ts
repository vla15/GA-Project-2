import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private usernameText: string = "Username: "
  private passwordOneText: string = "Password: "
  private passwordTwoText: string = "Confirm Password: "

  constructor() { }

  ngOnInit() {
  }

}
