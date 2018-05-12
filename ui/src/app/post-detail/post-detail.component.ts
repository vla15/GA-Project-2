import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private title: string;
  private body: string;
  private image: string;
  private id: number;

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

  onDelete() {
    this.postSvc.deletePost(this.id)
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log("error while deleting", e)
      )
  }

}
