import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseDestroy } from '../models/ResponseDestroy';
import { Module } from '../models/Module';


@Injectable()
export class ModuleService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Module[]> {
        return this.httpClient
            .get<Module[]>(`${environment.apiURL}api/modules`)
    }

    public show(module: Module): Observable<Module> {
        return this.httpClient
            .get<Module>(`${environment.apiURL}api/modules/${module.id}`);
    }

    public update(module: Module): Observable<Module> {
        return this.httpClient
            .patch<Module>(`${environment.apiURL}api/modules/${module.id}`, module);
    }

    public store(module: Module): Observable<Module> {
        return this.httpClient
            .post<Module>(`${environment.apiURL}api/modules`, module);
    }

    public destroy(module: Module): Observable<ResponseDestroy> {
        return this.httpClient
            .delete<ResponseDestroy>(`${environment.apiURL}api/modules/${module.id}`);
    }
}