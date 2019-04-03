import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LineasPage } from './lineas.page';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromLinea from './store/linea.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LineaEffects } from './store/effects/linea.effects';
import { LineasGuard } from './guards/lineas.guard';

const routes: Route[] = [
  { path: '', canActivate: [LineasGuard], component: LineasPage }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('lineas', fromLinea.reducer),
    EffectsModule.forFeature([LineaEffects])
  ],
  declarations: [LineasPage],
  providers: [LineaEffects]
})
export class LineasPageModule {}
