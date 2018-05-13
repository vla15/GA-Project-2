import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Post } from '../types/post';
import { Vote } from '../types/vote';
import { Observable, Subject, of, forkJoin } from "rxjs";
import { concatMap, zip, map, mergeMap, mapTo, exhaustMap, switchMap } from 'rxjs/operators';
import { VoteService } from './vote.service';

@Injectable()
export class PostService { 
    private observable: Observable<any> = new Observable();
    constructor(private http: Http, private voteSvc: VoteService) {

    }

    getAllPosts(){
        return this.http.get("api/posts")
            .pipe(
                map(p => p.json()),
                mergeMap(posts => this.http.get("api/votes")
                    .pipe(map(v => ({posts, votes: v.json()})))),
                map(data => {
                    let votes = data.votes;
                    let posts = data.posts;
                    let results = []
                    for (var i = 0; i < posts.length; i++) {
                        results.push(Object.assign(votes[i], posts[i]))
                    }
                    return results;
                })
            );
    }

    updatePost(post): Observable<Response> {
        console.log('review the post', post);
        return this.http.put(`api/posts/${post.id}`, post);
    }

    getPostById(postId: number): Observable<Response> {
        return this.http.get(`api/posts/${postId}`);
    }

    addNewPost(post): Observable<Response> {
        return this.http.post("api/posts", post);
    }

    deletePost(postId: number): Observable<Response> {
        return this.http.delete(`api/posts/${postId}`);
    }
}