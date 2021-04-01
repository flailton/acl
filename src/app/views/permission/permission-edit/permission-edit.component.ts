import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/models/Action';
import { Module } from 'src/app/models/Module';
import { Permission } from 'src/app/models/Permission';
import { Role } from 'src/app/models/Role';
import { RolePermission } from 'src/app/models/RolePermission';
import { ActionService } from 'src/app/services/action.service';
import { ModuleService } from 'src/app/services/module.service';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html'
})
export class PermissionEditComponent implements OnInit {
  public role: Role;
  public modules: Module[];
  public actions: Action[];
  public permissions: any;

  constructor(private permissionService: PermissionService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute, 
              private actionService: ActionService, 
              private moduleService: ModuleService, 
              private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.role = new Role();
    this.activatedRoute.params.subscribe(params => {
      this.role.id = params['id'];
    });

    this.showRole(this.role);
    this.indexAction();
    this.indexModule();
    this.rolePermissions(this.role);
  }

  public showRole(role: Role): void {
    this.roleService.show(role).subscribe(data => {
      this.role = data;
    },
      error => {
        alert(error.errors.join('<br/>'));
        this.router.navigate(['users']);
      });
  }

  public indexAction(): void {
    this.actionService.index().subscribe(data => {
      this.actions = data;
    },
      error => {
        alert(error.errors.join('<br/>'));
        this.router.navigate(['users']);
      });
  }

  public indexModule(): void {
    this.moduleService.index().subscribe(data => {
      this.modules = data;
    },
      error => {
        alert(error.errors.join('<br/>'));
        this.router.navigate(['users']);
      });
  }

  public rolePermissions(role: Role): void {
    this.roleService.rolePermissions(role).subscribe(data => {
      this.permissions = data;
    },
      error => {
        alert(error.errors.join('<br/>'));
        this.router.navigate(['users']);
      });
  }

  public attachPermission(rolePermission: RolePermission): void {
    this.roleService.attachPermission(rolePermission).subscribe(data => {
      //window.location.reload(); 
    },
      error => {
        alert(error.errors.join('<br/>'));
      });
  }

  public detachPermission(rolePermission: RolePermission): void {
    this.roleService.detachPermission(rolePermission).subscribe(data => {
      //window.location.reload(); 
    },
      error => {
        alert(error.errors.join('<br/>'));
      });
  }

  public checkPermission(module_id: number, action_id: number): void {
    let rolePermission: RolePermission = new RolePermission();

    rolePermission.id = this.role.id;
    rolePermission.module_id = module_id;
    rolePermission.action_id = action_id;

    this.attachPermission(rolePermission);
  }

  public uncheckPermission(permission_id: number): void {
    let rolePermission: RolePermission = new RolePermission();
    rolePermission.id = this.role.id;
    rolePermission.permission_id = permission_id;

    this.detachPermission(rolePermission);
  }

}


