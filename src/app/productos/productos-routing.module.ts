import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ProductosPage } from './productos.page';

const routes: Route[] = [
  {
    path: '',
    component: ProductosPage,
    children: [
      {
        path: 'lineas',
        loadChildren: './lineas/lineas.module#LineasPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
