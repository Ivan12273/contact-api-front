import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Global } from './global';

@Injectable()
export class UserService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    saveUser(user: User): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'user', params, {headers: headers});
    }

    getUsers(): Observable<any> {       
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'user', {headers: headers});
    }

    getUserById(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'user/' + id, {headers: headers});
    }

    updateUser(user: User): Observable<any> {
        let params = JSON.stringify(user);
        console.log(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'user/' + user.id, params, {headers: headers});
    }

    getUsersByNameOrLastName(nameOrLastName: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'user/search/' + nameOrLastName, {headers: headers});
    }
    
    deleteUser(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'user/' + id, {headers: headers});
    }

}

