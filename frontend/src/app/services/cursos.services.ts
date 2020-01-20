import {Cursos} from '../shared/cursos.model';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class CursosService {

  constructor(private http: HttpClient){}

  public getCursos(): Promise<Cursos[]> {

    return this.http.get('http://localhost:3000/curso/all')
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public find(id: Number): Promise<Cursos[]> {

    return this.http.get(`http://localhost:3000/curso/find/${id}`)
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public enviar(curso: Cursos): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post('http://localhost:3000/curso/new',
    JSON.stringify(curso),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
  public atualiza(curso: Cursos,id:Number): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.put(`http://localhost:3000/curso/edit/${id}`,
    JSON.stringify(curso),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
  public excluir(id: Number): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.delete(`http://localhost:3000/curso/delete/${id}`,options)
    .pipe(map((resposta: Response) => resposta));
     
  }
}
