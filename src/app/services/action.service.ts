import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDestroy } from '../models/ResponseDestroy';
import { Action } from '../models/Action';


@Injectable()
export class ActionService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Action[]> {
        return this.httpClient
            .get<Action[]>(`${environment.apiURL}api/actions`)
    }

    public show(action: Action): Observable<Action> {
        return this.httpClient
            .get<Action>(`${environment.apiURL}api/actions/${action.id}`);
    }

    public update(action: Action): Observable<Action> {
        return this.httpClient
            .patch<Action>(`${environment.apiURL}api/actions/${action.id}`, action);
    }

    public store(action: Action): Observable<Action> {
        return this.httpClient
            .post<Action>(`${environment.apiURL}api/actions`, action);
    }

    public destroy(action: Action): Observable<ResponseDestroy> {
        return this.httpClient
            .delete<ResponseDestroy>(`${environment.apiURL}api/actions/${action.id}`);
    }
}