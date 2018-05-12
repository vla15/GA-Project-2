import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class VoteService {
    constructor(private http: Http) {}

    getVotes(): Observable<Response> {
        return this.http.get("/api/votes/1")
    }

    getAllVotes(): Observable<Response> {
        return this.http.get("/api/votes")
    }
}