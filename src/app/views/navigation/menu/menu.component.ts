import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {
  public isAuthenticated: Boolean;

  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
   }

}
