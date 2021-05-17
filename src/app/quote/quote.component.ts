import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quotes = [
    new Quote(1, 'Nelson Mandela', "The greatest glory in living lies not in never falling, but in rising every time we fall.", new Date(2018,2,3)),
    new Quote(2, 'Walt Disney', "The way to get started is to quit talking and begin doing.",new Date(2018,2,3)),
    new Quote(3, 'Steve Jobs', "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",new Date(2018,2,3)),
    new Quote(4, 'Eleanor Roosevelt',"If life were predictable it would cease to be life, and be without flavor.", new Date(2018,2,3)),
    new Quote(5, 'Oprah Winfrey', "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",new Date(2018,2,3)),
    new Quote(6, 'James Cameron',"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",new Date(2018,2,3)),
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
