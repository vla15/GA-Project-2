import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class VoteService {
    constructor(private http: Http) {}

    getVotesByPostId(postId: number): Observable<Response> {
        return this.http.get(`/api/votes/${postId}`)
    }

    getAllVotes(): Observable<Response> {
        return this.http.get("/api/votes")
    }

    incrementVote(postId: number): Observable<Response> {
        return this.http.put(`api/votes/upvote/${postId}`, {})
    }

    decrementVote(postId: number): Observable<Response> {
        return this.http.put(`api/votes/downvote/${postId}`, {})
    }
}