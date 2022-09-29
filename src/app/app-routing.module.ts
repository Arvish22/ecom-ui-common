import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/guard/auth-guard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './inventory/category/category.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate : [AuthGuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inventory', component: InventoryComponent, canActivate : [AuthGuardGuard]},
  { path: 'profile', component: ProfileComponent,canActivate : [AuthGuardGuard] },
  { path: 'orders', component: OrderComponent,canActivate : [AuthGuardGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'category',component : CategoryComponent,canActivate : [AuthGuardGuard]},
  {path:'admin',component : TaskComponent,canActivate : [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
