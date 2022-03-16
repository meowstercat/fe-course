import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: CourseComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  bootstrap: [CourseComponent],
})
export class CourseModule {}
