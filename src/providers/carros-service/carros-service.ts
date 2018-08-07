import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Carro } from '../../app/models/carro';

@Injectable()
export class CarrosServiceProvider {

  constructor(private _httpClient: HttpClient) {
  }

  listar() {
    return this._httpClient.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
  }
}