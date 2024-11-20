import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { InteractiveModuleComponent } from './interactive-module/interactive-module.component';
import { CommunicationComponent } from './communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseCatalogComponent,
    CoursePageComponent,
    TeacherDashboardComponent,
    LessonManagementComponent,
    InteractiveModuleComponent,
    CommunicationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
