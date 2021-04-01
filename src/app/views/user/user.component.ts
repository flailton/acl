import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPermissions } from 'src/app/models/RequestPermissions';
import { ResponsePermissions } from 'src/app/models/ResponsePermissions';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  public users: User[];
  public permissions: ResponsePermissions;

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private requestPermissions: RequestPermissions) {
    this.requestPermissions.module = 'user';
    this.permissions = new ResponsePermissions();
  }

  ngOnInit(): void {
    let actions = ['index', 'show', 'update', 'store', 'destroy']
    this.hasPermission(actions);
    this.index();
  }

  public index() : void{
    this.userService.index().subscribe(data => {
      this.users = data;
    },
    error => {
      let user: User = new User();
      user.id = parseInt(this.authService.getUser());
      this.show(user);
    });
  }

  public show(user: User) :void{
    this.userService.show(user).subscribe(data => {
      this.router.navigate([`users/show/${data.id}`]);
    },
    error => {
      alert(error.errors.join('<br/>'));
      this.router.navigate(['logout']);
    });
  }

  public destroy(user: User) : void{
    this.userService.destroy(user).subscribe(data => {
      alert(data.message);
      window.location.reload(); 
    },
    error => {
      alert(error.error.menssage.join('<br/>'));
    });
  }

  public hasPermission(actions: String[]) : void{
    this.requestPermissions.actions = actions;
    this.userService.hasPermission(this.requestPermissions).subscribe(data => {
      this.permissions = data;
    });
  }

}
