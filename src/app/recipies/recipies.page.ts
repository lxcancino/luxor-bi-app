import { Component, OnInit } from '@angular/core';
import { Product } from './producto.model';
import { PRODUCTOS } from './data';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss']
})
export class RecipiesPage implements OnInit {
  productos: Product[] = PRODUCTOS;

  constructor() {}

  ngOnInit() {}
}
