import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'https://api.time.com/wp-content/uploads/2022/07/GettyImages-1327127856.jpg',
      'https://static.independent.co.uk/2021/03/11/14/19125852-9de7cf6e-ec17-48f8-8025-061fa85404b6.jpg',
      'https://entail.mayple.com/en-assets/mayple/6179a579f91da881be2c758b_morningbrewShVipPImS6kunsplash_5c8728bacb20daf02414ecbdf89e0418_2000-1699777146680.png',
    ];
  }

  ngOnInit(): void {
    // Automatically change slide every 3 seconds
    setInterval(() => {
      this.getNext();
    }, 3000);
  }

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }
}
