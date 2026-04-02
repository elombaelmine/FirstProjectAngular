import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';  
import { Body } from './components/body/body';
import { Secondpart } from './components/secondpart/secondpart';
import { Thirdpart } from './components/thirdpart/thirdpart'; 

@Component({
  selector: 'app-root',
  imports: [ Header, Body, Secondpart, Thirdpart], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miss_joy');
}
