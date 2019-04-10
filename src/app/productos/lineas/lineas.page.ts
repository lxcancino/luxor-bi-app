import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { LineasService } from '../services/lineas.service';
import { Linea } from 'src/app/sx-common/models';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.page.html',
  styleUrls: ['./lineas.page.scss']
})
export class LineasPage implements OnInit, OnDestroy {
  lineas$: Observable<Linea[]>;

  constructor(private service: LineasService) {}

  ngOnInit() {
    this.lineas$ = this.service
      .list()
      .pipe(catchError(response => of(response)));
    console.log('NgOnit....');
  }
  ngOnDestroy() {
    console.log('Page destroyed....');
  }

  ionViewDidEnter() {
    console.log('ION View did enterdd....');
  }
  ionViewDidLeave() {
    console.log('IonViewDidLeave....');
  }
}
