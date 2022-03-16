import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {LessonComponent} from './lesson.component';
import {PlyrModule} from 'ngx-plyr';

const routes: Routes = [{path: '', component: LessonComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PlyrModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [LessonComponent],
})
export class LessonModule {
}
