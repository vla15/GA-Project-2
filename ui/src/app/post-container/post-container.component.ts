import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../types/post';
import { Vote } from '../types/vote';
import { VoteService } from '../services/vote.service'
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit, OnDestroy {

  private currentUserId: number = 0;
  private posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(private postSvc: PostService, 
    private router: Router, 
    private voteSvc: VoteService,
    private userSvc: UserService) { }

  ngOnInit() {
    this.postSubscription = this.postSvc.getAllPosts()
      .subscribe(posts => {
        this.posts = posts
      });
    this.userSvc.userSubject
      .subscribe(u => {
        this.currentUserId = u.id
      })
  }

  ngOnDestroy() {
    this.postSubscription ? this.postSubscription.unsubscribe() : null;
  }

  viewPost(postId: number) {
    this.router.navigate(["/posts", postId]);
  }

  addNewPost() {
    console.log("add new post");
    this.router.navigate(["/create-post", {id: this.currentUserId}])
  }

}
