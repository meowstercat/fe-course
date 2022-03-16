import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
