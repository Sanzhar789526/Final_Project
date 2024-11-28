import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { NoNavbarLayoutComponent } from './no-navbar-layout/no-navbar-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { InteractiveModuleComponent } from './interactive-module/interactive-module.component';
import { CommunicationComponent } from './communication/communication.component';





const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path: 'register',
    component: NoNavbarLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
      },
    ],
  },
  { path: '', component: HomeComponent }, // Главная страница
  { path: 'catalog', component: CourseCatalogComponent }, // Каталог курсов
  { path: 'course/:id', component: CoursePageComponent }, // Страница курса
  { path: 'teacher/dashboard', component: TeacherDashboardComponent }, // Личный кабинет преподавателя
  { path: 'teacher/lessons', component: LessonManagementComponent }, // Управление уроками
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'student-course', component: StudentCourseComponent },
  { path: 'interactive', component: InteractiveModuleComponent }, // Интерактивный модуль
  { path: 'communication', component: CommunicationComponent }, // Коммуникация
  
];

      
  
    
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
