import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from '../router/log/log.component';
import { HomeComponent } from '../router/home/home.component';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { TeacherLoginComponent } from '../teacher-login/teacher-login.component';
import { TeacherLogin2Component } from '../teacher-login2/teacher-login2.component';
import { AdminRoutingModule } from '../admin_Module/admin-routing/admin-routing.module';

const routes: Routes = [
  {
    path: 'login',
    component: LogComponent,
    children: [
      {
        path: 'studentlogin',
        component: StudentLoginComponent,
        children: [
          {
            path: 'teacherlogin',
            component: TeacherLoginComponent,
            children: [
              { path: 'teacherlogin2', component: TeacherLogin2Component },
            ],
          },
        ],
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'catalog',
    loadChildren: () =>
      import('../admin_Module/admin-routing/admin-routing.module').then(
        (m) => m.AdminRoutingModule
      ),
  },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes),AdminRoutingModule],
  declarations: [LogComponent, HomeComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
