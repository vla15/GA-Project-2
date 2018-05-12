import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {
  private titleText: string = "Enter a title";
  private title: string;
  private body: string;

  constructor(private postSvc: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let post: Post = {
      userId: 1,
      title: this.title,
      body: this.body,
    }
    this.postSvc.addNewPost(post)
      .subscribe(
        () => this.router.navigate(["/posts"]),
        (e) => console.log('couldnt submit post', e)
      )
  }

}
