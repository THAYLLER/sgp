import {Disciplinas} from '../shared/disciplinas.model';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class DisciplinasService {

  constructor(private http: HttpClient){}

  public getdisciplinas(): Promise<Disciplinas[]> {

    return this.http.get('http://localhost:3000/disciplina/all')
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public find(id: Number): Promise<Disciplinas[]> {

    return this.http.get(`http://localhost:3000/disciplina/find/${id}`)
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public enviar(disciplina: Disciplinas): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post('http://localhost:3000/disciplina/new',
    JSON.stringify(disciplina),
    options)
    .pipe(map((resposta: Response) => resposta));
  }

  public excluir(id: Number): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.delete(`http://localhost:3000/disciplina/delete/${id}`,options)
    .pipe(map((resposta: Response) => resposta));
     
  }
  public atualiza(disciplinas: Disciplinas,id:Number): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post(`http://localhost:3000/disciplina/edit/${id}`,
    JSON.stringify(disciplinas),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
}
