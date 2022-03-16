import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./page/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./page/course/course.module').then((m) => m.CourseModule),
      },
      {
        path: 'course/:courseCode/:lessonCode',
        loadChildren: () =>
          import('./page/lesson/lesson.module').then((m) => m.LessonModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  bootstrap: [UserComponent],
})
export class UserModule {
}
