import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() body: string;
  @Input() image: string;

  private bodyShortened: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.bodyShortened = this.body.substring(0, 1000);
  }

  handleClick() {
    this.router.navigate(["/posts", this.id])
  }

}
