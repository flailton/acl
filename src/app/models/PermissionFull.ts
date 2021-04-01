import { Action } from "./Action";
import { Module } from "./Module";
import { Role } from "./Role";

export class PermissionFull {
    public id: number;
    public role: Role; 
    public module: Module; 
    public action: Action; 
}
