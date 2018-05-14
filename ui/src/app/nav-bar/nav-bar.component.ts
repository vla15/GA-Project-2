import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private isLoggedIn: boolean = false;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.userSubject.subscribe(u => {
      if (u) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }

}
