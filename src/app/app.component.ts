import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Life is like a river'),
    new Quote(2, 'River is like a tree'),
    new Quote(3, 'Tree is like wind'),
    new Quote(4, 'Wind is like a mountain'),
    new Quote(5, 'Mountain is like an ocean'),
    new Quote(6, 'Oceans are fed by rivers'),
  ]
}
