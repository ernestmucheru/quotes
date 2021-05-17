import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Life is like a river', 'Despite everything, keep moving', new Date(2018,2,3)),
    new Quote(2, 'River is like a tree', 'life giving as you and I were meant to be',new Date(2018,2,3)),
    new Quote(3, 'Tree is like wind', 'break speed of those attacking youre way, but also uproot those holding you up from your destiny',new Date(2018,2,3)),
    new Quote(4, 'Wind is like a mountain','Too big, to high,too cold. They will never figure you', new Date(2018,2,3)),
    new Quote(5, 'Mountain is like an ocean', 'Think vast, Beyond human understanding',new Date(2018,2,3)),
    new Quote(6, 'Oceans are fed by rivers','Everything is connected',new Date(2018,2,3)),
  ]
  toggleDetails(index){
    this.Quotes[index].showDescription=!this.Quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength =this.Quotes.length;
    quote.id=quote.Length+1
    quote.completeDate = new Date (quote.completeDate)
    this.Quotes.push(quote)
  }
  
  deleteQuote(isComplete,index){
    if (isComplete){
      this.Quotes.splice(index,1);
      let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
    
      if(toDelete){
        this.Quotes.splice(index,1)
      }
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
