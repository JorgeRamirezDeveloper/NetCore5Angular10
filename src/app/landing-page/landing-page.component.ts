import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
      this.peliculasInicial = [{
        titulo: 'Avengers End Game',
        fechaLanzamiento: new Date(),
        precio: 1500.88,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Bob esponja',
        fechaLanzamiento: new Date(),
        precio: 890.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BOGYxYzZkMWQtNjJkMy00NTlkLWExNWMtOTNhMTg4MDcxNmU3XkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }];
      
      this.peliculasOtras = [];


  }

  peliculasInicial;
  peliculasOtras;

}
