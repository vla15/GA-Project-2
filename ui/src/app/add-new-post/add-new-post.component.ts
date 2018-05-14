import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  private titleText: string = "Enter a title";
  private title: string;
  private body: string;
  private userId: number;

  constructor(private postSvc: PostService, 
    private router: Router, 
    private voteSvc: VoteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.userId = param.id
    })
  }

  onSubmit() {
    let post = {
      userId: this.userId,
      title: this.title,
      body: this.body,
    }
    this.postSvc.addNewPost(post)
      .pipe(map(p => ({postId: p.json().id, voteCount: 0})),
            mergeMap(vote => this.voteSvc.createNewVote(vote)))
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log('couldnt submit post', post, e)
      )
  }

}
