import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
//
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
//
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AdminComponent } from './modules/admin/admin.component';
import { LoginRegisterComponent } from './modules/auth/pages/loginRegister/login-register.component';
import { UserComponent } from './modules/user/user.component';
import { UserModule } from './modules/user/user.module';
import { HomeComponent } from './modules/user/page/home/home.component';
import { NavComponent } from './modules/user/nav/nav.component';
import {HomeModule} from './modules/user/page/home/home.module';
import {LessonComponent} from './modules/user/page/lesson/lesson.component';

// ComponentBase

registerLocaleData(en);

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'login-register',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'course/lesson',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    NavComponent,
    UserComponent,
    HomeComponent,
    LessonComponent,
    LoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HomeModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
