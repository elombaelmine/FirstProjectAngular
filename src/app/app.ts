import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';  
import { Body } from './components/body/body';
import { Secondpart } from './components/secondpart/secondpart';
import { Thirdpart } from './components/thirdpart/thirdpart'; 
import { Fourthpath } from './components/fourthpath/fourthpath';

@Component({
  selector: 'app-root',
  imports: [ Header, Body, Secondpart, Thirdpart, Fourthpath], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miss_joy');
}
