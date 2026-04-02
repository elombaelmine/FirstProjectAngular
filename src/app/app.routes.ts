import { Routes } from '@angular/router';
import { Hello } from './components/hello/hello';
import { App } from './app';

export const routes: Routes = [
    { path: 'hello', component: Hello },
    {path: '', component: App},
];
