import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit {
  public user: User;
  public roles: Role[];

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute, private roleService: RoleService) { }

  ngOnInit(): void {
    this.user = new User();
    this.activatedRoute.params.subscribe(params => {
      this.user.id = params['id'];
    });

    this.show(this.user);
    this.indexRole();
  }

  public show(user: User): void {
    this.userService.show(user).subscribe(data => {
      this.user = data;
      this.user.role_id = this.user.roles[0].id;
    },
      error => {
        alert(error.errors.join('<br/>'));
        this.router.navigate(['users']);
      });
  }

  public update(user: User): void {
    this.userService.update(user).subscribe(data => {
      this.user = data;
      this.router.navigate(['users']);
    },
      error => {
        alert(error.errors.join('<br/>'));
      });
  }

  public indexRole(): void {
    this.roleService.index().subscribe(data => {
      this.roles = data;
    },
      error => {
      });
  }

}

