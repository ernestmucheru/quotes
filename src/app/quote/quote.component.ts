import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Life is like a river', 'Despite everything, it keeps moving'),
    new Quote(2, 'River is like a tree', 'life giving in its nature'),
    new Quote(3, 'Tree is like wind', 'knows all our secrets,whispers them to nature'),
    new Quote(4, 'Wind is like a mountain','too big, to high,too cold to catch up'),
    new Quote(5, 'Mountain is like an ocean', 'vast like our thoughts. Beyond human understanding'),
    new Quote(6, 'Oceans are fed by rivers','everything is connected'),
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
