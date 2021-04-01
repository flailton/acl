import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginComponent } from './views/account/login/login.component';
import { LogoutComponent } from './views/account/logout/logout.component';
import { RegisterComponent } from './views/account/register/register.component';
import { PermissionEditComponent } from './views/permission/permission-edit/permission-edit.component';
import { PermissionComponent } from './views/permission/permission.component';
import { UserEditComponent } from './views/user/user-edit/user-edit.component';
import { UserShowComponent } from './views/user/user-show/user-show.component';
import { UserComponent } from './views/user/user.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'users', component: UserComponent, canActivate: [AuthGuard]},
    { path: 'users/show/:id', component: UserShowComponent, canActivate: [AuthGuard]},
    { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
    { path: 'permissions', component: PermissionComponent, canActivate: [AuthGuard]},
    { path: 'permissions/edit/:id', component: PermissionEditComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent }
];