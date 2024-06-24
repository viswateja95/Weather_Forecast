import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'myhome',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  title="welcome to myHome";
  constructor(){}
  ngOnInit(): void {
    console.log("hi this is the weather forecast application home page");
    this.search();
  }

  search(){
    console.log("welcome to weather forecasting");
    return "weather data";
  }

}
