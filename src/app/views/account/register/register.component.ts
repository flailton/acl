import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestRegister } from 'src/app/models/RequestRegister';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public requestRegister: RequestRegister;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.requestRegister = new RequestRegister();
  }

  public register() :void{
    this.accountService.register(this.requestRegister).subscribe(data => {
      alert('Usuário cadastro realizado com Sucesso!');

      setTimeout(() => {
        this.router.navigate(['login']);
      }, 500);
    },
    error => {
      alert(error.error.errors.join('<br/>'));
    });
  }

}
