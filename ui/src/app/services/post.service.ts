import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Post } from '../types/post';

@Injectable()
export class PostService { 
    constructor(private http: Http) {

    }

    getAllPosts() {
        return this.http.get("api/posts");
    }

    getPostById(postId: number) {
        return this.http.get(`api/posts/${postId}`);
    }

    addNewPost(post: Post) {
        return this.http.post("api/posts", post);
    }

    deletePost(postId: number) {
        return this.http.delete(`api/posts/${postId}`);
    }
}