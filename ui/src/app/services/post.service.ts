import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class PostService { 
    constructor(private http: Http) {

    }

    getAllPosts() {
        return this.http.get("api/posts")
    }

    getPostById(postId: number) {
        return this.http.get(`api/posts/${postId}`)
    }
}