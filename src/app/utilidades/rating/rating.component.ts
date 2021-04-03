import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRaiting = 5;
  @Input()
  raitingSeleccionado = 0;
  @Output()
  rate: EventEmitter<number> = new EventEmitter<number>();
  maximoRaitingArr = [];
  selRaiting = 0;
  picked = false;

  constructor() { }

  ngOnInit(): void {
    this.maximoRaitingArr = Array(this.maximoRaiting).fill(0);
  }


  manejarMouseEnter(index: number): void {
    this.raitingSeleccionado = index + 1;
  }

  manejarMouseLeave(): void {
    if(this.picked) {
      this.raitingSeleccionado = this.selRaiting;
    } else {
      this.raitingSeleccionado = 0;
    }
    
  }

  seleccionarRating(index: number): void {
    this.picked = true;
    this.selRaiting = index + 1; 
    this.rate.emit(this.selRaiting);
  }

}
