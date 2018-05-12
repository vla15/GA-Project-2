import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../types/post';
import { VoteService } from '../services/vote.service'

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private postSvc: PostService, private router: Router, private voteSvc: VoteService) { }

  ngOnInit() {
    this.postSvc.getAllPosts()
      .subscribe(posts => this.posts = posts.json())
    this.voteSvc.getAllVotes()
      .subscribe(d => console.log(d))
  }

  viewPost(postId: number) {
    this.router.navigate(["/posts", postId]);
  }

  addNewPost() {
    this.router.navigate(["/create-post"])
  }

}
