import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../types/post';
import { Vote } from '../types/vote';
import { VoteService } from '../services/vote.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit, OnDestroy {

  private posts: Post[] = [];
  private votes: Vote[] = [];
  private postSubscription: Subscription;

  constructor(private postSvc: PostService, private router: Router, private voteSvc: VoteService) { }

  ngOnInit() {
    this.postSubscription = this.postSvc.getAllPosts()
      .subscribe(posts => {
        console.log(posts);
        this.posts = posts
      });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  viewPost(postId: number) {
    this.router.navigate(["/posts", postId]);
  }

  addNewPost() {
    this.router.navigate(["/create-post"])
  }

}
