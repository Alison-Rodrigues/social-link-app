import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './components/login.admin/login.admin.component';
import { MainPageComponent } from './components/main.page/main.page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login-admin', component: LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
