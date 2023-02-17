import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DestroyGuard } from './guards/destroy.guard';
import { Page404Component } from './page404/page404.component';
import { CreateComponent } from './create/create.component';
import { ListStuedentComponent } from './list-stuedent/list-stuedent.component';
import { EditStuedentComponent } from './edit-stuedent/edit-stuedent.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [DestroyGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'list',
    component: ListStuedentComponent,
  },
  {
    path: 'edit',
    component: EditStuedentComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }, // redirect to `404 page`, a Wildcard route for a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
