import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'home',component:HomeComponent},
  { path:'admin',component:AdminComponent},
  { path:'user',component:UserComponent},
  { path:'admin',redirectTo:'user',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
