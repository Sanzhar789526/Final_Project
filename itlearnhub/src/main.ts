import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './app/homepage/homepage.component';
import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomepageComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ])
  ]
})
.catch(err => console.error(err));
