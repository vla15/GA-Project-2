import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Post } from '../types/post';
import { Observable } from "rxjs";

@Injectable()
export class PostService { 
    constructor(private http: Http) {

    }

    getAllPosts(): Observable<Response> {
        return this.http.get("api/posts");
    }

    getPostById(postId: number): Observable<Response> {
        return this.http.get(`api/posts/${postId}`);
    }

    addNewPost(post: Post): Observable<Response> {
        return this.http.post("api/posts", post);
    }

    deletePost(postId: number): Observable<Response> {
        return this.http.delete(`api/posts/${postId}`);
    }
}