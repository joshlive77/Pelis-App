import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-background',
  templateUrl: './movie-background.component.html',
  styleUrls: [
    './movie-background.component.css',
    './scrollDown.css'
  ]
})
export class MovieBackgroundComponent implements OnInit {

  @Input('backgroundImage') movieBackground: string;
  @Input('backgroundMessage') messages: string[];

  message: string;

  constructor() { }

  ngOnInit() {
    let i = 1;
    this.message = this.messages[0];

    setInterval(() => {
      if (i < 3) {
        this.message = this.messages[i++];
      } else {
        i = 0;
      }
    }, 7000);
  }

}
