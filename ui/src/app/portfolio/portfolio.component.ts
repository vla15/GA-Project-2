import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  private usernameText: string = "Username"
  private firstnameText: string = "First Name"
  private lastnameText: string = "Last Name"
  private profileSavedText: string;
  private portfolioImg: string;
  private username: string;
  private firstname: string;
  private lastname: string;
  private id: number;
  private image: string;
  private saveUserSubscription: Subscription;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.userSubject
      .subscribe((u) => {
        this.username = u.userName;
        this.firstname = u.firstName;
        this.lastname = u.lastName;
        this.id = u.id;
        this.image = u.image;
      })
  }
  
  ngOnDestroy() {
    this.saveUserSubscription ? this.saveUserSubscription.unsubscribe() : null;
  }

  handleSave() {
    let user = {
      userName: this.username,
      firstName: this.firstname,
      lastName: this.lastname,
      id: this.id,
      image: ""
    }
    this.saveUserSubscription = this.userSvc.saveUser(user)
      .subscribe(u => {
        this.profileSavedText = "Profile saved";
        this.userSvc.userSubject.next(u.json())
      })
  }
}
