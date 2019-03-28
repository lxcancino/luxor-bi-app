import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LineasPage } from './lineas.page';

import { RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: LineasPage }];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [LineasPage]
})
export class LineasPageModule {}
