import { Quote } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Life is like a river'),
    new Quote(2, 'River is like a tree'),
    new Quote(3, 'Tree is like a Mountain'),
    new Quote(1, 'Mountain is like an ocean'),
    new Quote(1, 'Oceans are fed by rivers'),


  ]
}
