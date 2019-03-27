import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { LineasService } from '../services/lineas.service';
import { Linea } from 'src/app/sx-common/models';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.page.html',
  styleUrls: ['./lineas.page.scss']
})
export class LineasPage implements OnInit {
  lineas$: Observable<Linea[]>;

  constructor(private service: LineasService) {}

  ngOnInit() {
    this.lineas$ = this.service
      .list()
      .pipe(catchError(response => of(response)));
  }
}
