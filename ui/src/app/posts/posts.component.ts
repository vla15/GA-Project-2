import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../services/vote.service'
import { Subscription, Observable } from 'rxjs';

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
  @Input() userId: number;
  private voteCount: number = 0;

  private bodyShortened: string;
  private voteObservable: Observable<any>;

  constructor(private router: Router, private voteSvc: VoteService) { }

  ngOnInit() {
    this.bodyShortened = this.body.substring(0, 1000);
    this.voteSvc.getVotesByPostId(this.id)
      .subscribe(vote => this.voteCount = vote.json().voteCount)
  }

  handleClick() {
    this.router.navigate(["/posts", this.id])
  }

  handleVote(type: string): void {
    this.voteObservable = type === "up" ? this.voteSvc.incrementVote(this.id) : this.voteSvc.decrementVote(this.id);
    this.voteObservable.subscribe(d => this.voteCount = d.json().voteCount)
  }

}
