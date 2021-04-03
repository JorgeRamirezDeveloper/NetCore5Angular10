import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  @Input()
  peliculas;


  removerPelicula(indice: number) : void {
    this.peliculas.splice(indice, 1)
  }

}
