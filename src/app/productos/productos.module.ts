import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPage } from './productos.page';
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductosRoutingModule],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
