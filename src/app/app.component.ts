import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestGit';
  constructor(){
    console.log("This constructor call from app.component");
    
  }
  // @HostListener('click',['$event'])
  // show(){
  //   alert("Hello");
  // }
  // display(){
  //   alert('Hi');
  // }
  
  
}
