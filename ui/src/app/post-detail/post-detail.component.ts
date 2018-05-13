import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, mergeMap } from 'rxjs/operators';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private title: string;
  private body: string;
  private postImage: string;
  private id: number;
  private voteId: number;
  private userId: number;
  private isUpdating: boolean = false;
  private titleHolder: string;
  private bodyHolder: string;
  private editTitle: string = "Edit Title: "
  private editBody: string = "Edit Body: "

  constructor(private route: ActivatedRoute, private postSvc: PostService, private router: Router, private voteSvc: VoteService) { }

  ngOnInit() {
    this.route.params
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
        }
      )
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
    //three things
    //first you need to put to update the vote
    let updatedPost = {
      title: this.titleHolder,
      body: this.bodyHolder,
      id: this.id,
      voteId: this.voteId,
      postImage: this.postImage,
      userId: this.userId
    }
    this.postSvc.updatePost(updatedPost)
      .subscribe(post => {
        let postJSON = post.json();
        console.log('the post', postJSON)
        this.title = postJSON.title;
        this.body = postJSON.body;
        this.isUpdating = !this.isUpdating;
      })
    //then you need to reinitialize data
    //then route change back to isUpdating

  }

  onDelete() {
    this.voteSvc.deleteVote(this.id)
      .pipe(mergeMap(() => this.postSvc.deletePost(this.id)))
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log("error while deleting", e)
      )
  }

}
