import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, mergeMap } from 'rxjs/operators';
import { VoteService } from '../services/vote.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  private title: string;
  private body: string;
  private postImage: string;
  private id: number;
  private voteId: number;
  private userId: number;
  private isUpdating: boolean = false;
  private titleHolder: string;
  private bodyHolder: string;
  private editTitle: string = "Edit Title: ";
  private editBody: string = "Edit Body: ";
  private routeSubscription: Subscription;
  private deleteVoteSubscription: Subscription;
  private updatePostSubscription: Subscription;

  constructor(private route: ActivatedRoute, 
    private postSvc: PostService, 
    private router: Router, 
    private voteSvc: VoteService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params
      .pipe(concatMap(param => this.postSvc.getPostById(param.id)))
      .subscribe(
        (d: any) => {
          if (d._body) {
            let data = d.json();
            for (let key in data) {
              this[key] = data[key]
            }
          } else {
            this.router.navigate(["/error"])
          }
        })
  }

  ngOnDestroy() {
    this.routeSubscription ? this.routeSubscription.unsubscribe() : null;
    this.updatePostSubscription ? this.updatePostSubscription.unsubscribe() : null;
    this.deleteVoteSubscription ? this.deleteVoteSubscription.unsubscribe() : null;
  }

  onUpdate() {
    this.isUpdating = !this.isUpdating;
    this.titleHolder = this.title;
    this.bodyHolder = this.body;
  }

  cancelEditing() {
    this.isUpdating = !this.isUpdating;
  }

  updatedPost() {
    let updatedPost = {
      title: this.titleHolder,
      body: this.bodyHolder,
      id: this.id,
      voteId: this.voteId,
      postImage: this.postImage,
      userId: this.userId
    }
    this.updatePostSubscription = this.postSvc.updatePost(updatedPost)
      .subscribe(post => {
        let postJSON = post.json();
        this.title = postJSON.title;
        this.body = postJSON.body;
        this.isUpdating = !this.isUpdating;
      })
  }

  onDelete() {
    this.deleteVoteSubscription = this.voteSvc.deleteVote(this.id)
      .pipe(mergeMap(() => this.postSvc.deletePost(this.id)))
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log("error while deleting", e)
      )
  }

}
