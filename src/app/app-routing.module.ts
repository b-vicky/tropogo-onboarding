import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitueDetailsComponent } from './institue-details/institue-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
  { path: '', component: InstitueDetailsComponent },
  { path: 'course-detail', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
