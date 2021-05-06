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

    getUsers(): Observable<any> {       
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'user', {headers: headers});
    }

}

