import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPermissions } from 'src/app/models/RequestPermissions';
import { ResponsePermissions } from "src/app/models/ResponsePermissions";
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styles: [
  ]
})
export class PermissionComponent implements OnInit {
  public roles: Role[];
  public permissions: ResponsePermissions;

  constructor(private userService: UserService,
              private roleService: RoleService, 
              private router: Router, 
              private requestPermission: RequestPermissions
  ) {
    this.requestPermission.module = 'permission';
    this.permissions = new ResponsePermissions();
  }

  ngOnInit(): void {
    let actions = ['show', 'update', 'store', 'destroy']
    this.hasPermission(actions);
    this.index();
  }

  public index() : void{
    this.roleService.index().subscribe(data => {
      this.roles = data;
    },
    error => {
      alert(error.erros.join('<br/>'));
      this.router.navigate(['users']);
    });
  }

  public hasPermission(actions: String[]) : void{
    this.requestPermission.actions = actions;
    this.userService.hasPermission(this.requestPermission).subscribe(data => {
      this.permissions = data;
    });
  }

}

