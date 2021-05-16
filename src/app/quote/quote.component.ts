import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Life is like a river', 'Despite everything, keep moving'),
    new Quote(2, 'River is like a tree', 'life giving as you and I were meant to be'),
    new Quote(3, 'Tree is like wind', 'break speed of those attacking youre way, but also uproot those holding you up from your destiny'),
    new Quote(4, 'Wind is like a mountain','Too big, to high,too cold. They will never figure you'),
    new Quote(5, 'Mountain is like an ocean', 'Think vast, Beyond human understanding'),
    new Quote(6, 'Oceans are fed by rivers','Everything is connected'),
  ]
  toggleDetails(index){
    this.Quotes[index].showDescription=!this.Quotes[index].showDescription;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
