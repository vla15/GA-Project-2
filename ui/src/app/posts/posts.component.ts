import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private id: number;
  private title: string;
  private bodyShortened: string;
  private body: string;
  private image: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.router.navigate(["/posts", this.id])
  }

}
