import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private usernameText: string = "Username"
  private firstnameText: string = "First Name"
  private lastnameText: string = "Last Name"
  private portfolioImg: string;
  private username: string;
  private firstname: string;
  private lastname: string;

  constructor() { }

  ngOnInit() {
  }

  handleSave() {
    
  }
}
