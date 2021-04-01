import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDestroy } from '../models/ResponseDestroy';
import { Permission } from '../models/Permission';


@Injectable()
export class PermissionService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Permission[]> {
        return this.httpClient
            .get<Permission[]>(`${environment.apiURL}api/permissions`)
    }

    public show(permission: Permission): Observable<Permission> {
        return this.httpClient
            .get<Permission>(`${environment.apiURL}api/permissions/${permission.id}`);
    }

    public update(permission: Permission): Observable<Permission> {
        return this.httpClient
            .patch<Permission>(`${environment.apiURL}api/permissions/${permission.id}`, permission);
    }

    public store(permission: Permission): Observable<Permission> {
        return this.httpClient
            .post<Permission>(`${environment.apiURL}api/permissions`, permission);
    }

    public destroy(permission: Permission): Observable<ResponseDestroy> {
        return this.httpClient
            .delete<ResponseDestroy>(`${environment.apiURL}api/permissions/${permission.id}`);
    }
}