import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/Role';
import { ResponseDestroy } from '../models/ResponseDestroy';
import { RolePermission } from '../models/RolePermission';


@Injectable()
export class RoleService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Role[]> {
        return this.httpClient
            .get<Role[]>(`${environment.apiURL}api/roles`)
    }

    public show(role: Role): Observable<Role> {
        return this.httpClient
            .get<Role>(`${environment.apiURL}api/roles/${role.id}`);
    }

    public update(role: Role): Observable<Role> {
        return this.httpClient
            .patch<Role>(`${environment.apiURL}api/roles/${role.id}`, role);
    }

    public store(role: Role): Observable<Role> {
        return this.httpClient
            .post<Role>(`${environment.apiURL}api/roles`, role);
    }

    public destroy(role: Role): Observable<ResponseDestroy> {
        return this.httpClient
            .delete<ResponseDestroy>(`${environment.apiURL}api/roles/${role.id}`);
    }

    public rolePermissions(role: Role): Observable<any> {
        return this.httpClient
            .post<any>(`${environment.apiURL}api/roles/permitted`, role);
    }
    
    public attachPermission(rolePermission: RolePermission): Observable<any> {
        return this.httpClient
            .post<any>(`${environment.apiURL}api/roles/permissions/attach`, rolePermission);
    }
    
    public detachPermission(rolePermission: RolePermission): Observable<any> {
        return this.httpClient
            .post<any>(`${environment.apiURL}api/roles/permissions/detach`, rolePermission);
    }
}