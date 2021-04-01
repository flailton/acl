import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { ResponseDestroy } from '../models/ResponseDestroy';
import { ResponsePermissions } from "../models/ResponsePermissions";
import { RequestPermissions } from '../models/RequestPermissions';


@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<User[]> {
        return this.httpClient
            .get<User[]>(`${environment.apiURL}api/users`)
    }

    public show(user: User): Observable<User> {
        return this.httpClient
            .get<User>(`${environment.apiURL}api/users/${user.id}`);
    }

    public update(user: User): Observable<User> {
        return this.httpClient
            .patch<User>(`${environment.apiURL}api/users/${user.id}`, user);
    }

    public store(user: User): Observable<User> {
        return this.httpClient
            .post<User>(`${environment.apiURL}api/users`, user);
    }

    public destroy(user: User): Observable<ResponseDestroy> {
        return this.httpClient
            .delete<ResponseDestroy>(`${environment.apiURL}api/users/${user.id}`);
    }

    public hasPermission(requestPermissions: RequestPermissions): Observable<ResponsePermissions> {
        return this.httpClient
            .post<ResponsePermissions>(`${environment.apiURL}api/users/permitted`, requestPermissions);
    }
}