import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Turmas } from '../shared/turma.model';

@Injectable()
export class TurmasService {

  constructor(private http: HttpClient){}

  public getTurmas(): Promise<Turmas[]> {

    return this.http.get('http://localhost:3000/turma/all')
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public find(id: Number): Promise<Turmas[]> {

    return this.http.get(`http://localhost:3000/turma/find/${id}`)
            .toPromise()
            .then((resposta: any) => resposta);
  }
  public enviar(turmas: Turmas): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post('http://localhost:3000/turma/new',
    JSON.stringify(turmas),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
  public excluir(id: Number): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.delete(`http://localhost:3000/turma/delete/${id}`,options)
    .pipe(map((resposta: Response) => resposta));
     
  }
  public atualiza(turmas: Turmas,id:Number): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.put(`http://localhost:3000/turma/edit/${id}`,
    JSON.stringify(turmas),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
}
