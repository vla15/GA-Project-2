import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getPosts()
      .subscribe(d => console.log(d.json()))
  }

}
