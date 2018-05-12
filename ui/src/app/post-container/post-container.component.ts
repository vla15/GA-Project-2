import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../types/post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private postSvc: PostService, private router: Router) { }

  ngOnInit() {
    this.postSvc.getAllPosts()
      .subscribe(posts => this.posts = posts.json())
  }

  viewPost(postId: number) {
    this.router.navigate(["/posts", postId]);
  }

  addNewPost() {
    this.router.navigate(["/create-post"])
  }

}
