import { Component, OnInit } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Producto } from 'src/app/sx-common/models/producto';
import { ActivatedRoute } from '@angular/router';
import { LineasService } from '../../services/lineas.service';

@Component({
  selector: 'app-linea-detail',
  templateUrl: './linea-detail.page.html',
  styleUrls: ['./linea-detail.page.scss']
})
export class LineaDetailPage implements OnInit {
  private productosCollection: AngularFirestoreCollection<Producto>;

  productos$: Observable<Producto[]>;

  constructor(
    // private afs: AngularFirestore,
    private route: ActivatedRoute,
    private service: LineasService
  ) {}

  ngOnInit() {
    /*
    this.productosCollection = this.afs.collection<Producto>('productos');
    this.productos$ = this.productosCollection.valueChanges();
    */
    this.route.paramMap.subscribe(params => {
      console.log('Params: ', params.get('lineaId'));
      /*
      this.service
        .get(params.get('lineaId'))
        .subscribe(l => console.log('Linea: ', l));
      */
    });
  }
}
