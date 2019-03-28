import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaDetailPage } from './linea-detail.page';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [{ path: '', component: LineaDetailPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LineaDetailPage]
})
export class LineaDetailPageModule {}
