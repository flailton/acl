import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styles: [
  ]
})

export class UserShowComponent implements OnInit {
  public user: User;
  public render: boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = new User();
    this.activatedRoute.params.subscribe(params => {
      this.user.id = params['id'];
    });

    this.show(this.user);
  }

  public show(user: User) :void{
    this.userService.show(user).subscribe(data => {
      this.user = data;
      this.render = true;
    },
    error => {
      alert(error.errors.join('<br/>'));
      this.router.navigate(['users']);
    });
  }

}

