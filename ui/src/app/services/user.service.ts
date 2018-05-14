import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs } from '@angular/http';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {
    
    public userSubject: ReplaySubject<any> = new ReplaySubject();
    constructor(private http: Http) {

    }

    loginUser(user) {
        this.http.post("api/users/login", user)
            .subscribe(u => this.userSubject.next(u.json()));
    } 

    getUser() {
        this.http.get("api/users")
    }

    saveUser(user) {
        return this.http.put(`api/users/${user.id}`, user);
    }

    createUser(user) {
        return this.http.post("api/users", user);
    }


}