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
        children: [
          { path: '', loadChildren: './lineas/lineas.module#LineasPageModule' },
          {
            path: ':lineaId',
            loadChildren:
              './lineas/linea-detail/linea-detail.module#LineaDetailPageModule'
          }
        ]
      },
      {
        path: 'marcas',
        children: [
          { path: '', loadChildren: './marcas/marcas.module#MarcasPageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/productos/lineas',
        pathMatch: 'full'
      }
    ]
  }
  /*
  {
    path: '',
    redirectTo: '/productos/tabs/lineas',
    pathMatch: 'full'
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
