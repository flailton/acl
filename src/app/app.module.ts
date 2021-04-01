import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/navigation/menu/menu.component';
import { FooterComponent } from './views/navigation/footer/footer.component';
import { HomeComponent } from './views/navigation/home/home.component';
import { LoginComponent } from './views/account/login/login.component';
import { RegisterComponent } from './views/account/register/register.component';
import { UserComponent } from './views/user/user.component';
import { PermissionComponent } from './views/permission/permission.component';
import { AccountService } from './services/account.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MenuUserComponent } from './views/navigation/menu/menu-user/menu-user.component';
import { LogoutComponent } from './views/account/logout/logout.component';
import { UserService } from './services/user.service';
import { UserShowComponent } from './views/user/user-show/user-show.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { User } from './models/User';
import { RoleService } from './services/role.service';
import { PermissionEditComponent } from './views/permission/permission-edit/permission-edit.component';
import { PermissionService } from './services/permission.service';
import { ModuleService } from './services/module.service';
import { ActionService } from './services/action.service';
import { RequestPermissions } from './models/RequestPermissions';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PermissionComponent,
    MenuUserComponent,
    LogoutComponent,
    UserShowComponent,
    UserEditComponent,
    PermissionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    AccountService,
    UserService,
    RequestPermissions,
    User,
    RoleService,
    PermissionService,
    ActionService,
    ModuleService,
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
