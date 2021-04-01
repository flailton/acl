import { Role } from "./Role";

export class User {
    public id: number;
    public name: string;
    public email: string;   
    public phone: string;   
    public role_id: number;   
    public roles: Role[];   
}
