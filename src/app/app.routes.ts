
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses').then((m) => m.Courses),
  },
  {
    path: 'course-details',
    loadComponent: () =>
      import('./pages/course-details/course-details').then(
        (m) => m.CourseDetails
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup').then((m) => m.Signup),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

