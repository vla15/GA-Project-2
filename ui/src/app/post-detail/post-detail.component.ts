import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private postSvc: PostService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        this.postSvc.getPostById(param.id)
          .subscribe(d => {
            let data = d.json();
            for (let key in data) {
              this[key] = data[key]
            }
          })
    });
  }

  onDelete() {
    this.postSvc.deletePost(this.id)
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log("error while deleting", e)
      )
  }

}
