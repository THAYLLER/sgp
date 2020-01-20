import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Profissionais } from '../shared/profissionais.model';

@Injectable()
export class ProfissionaisService {

  constructor(private http: HttpClient){}

  public getProfissionais(): Promise<Profissionais[]> {

    return this.http.get('http://localhost:3000/profissional/all')
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public find(id: Number): Promise<Profissionais[]> {

    return this.http.get(`http://localhost:3000/profissional/find/${id}`)
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public enviar(profissionais: Profissionais): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post('http://localhost:3000/profissional/new',
    JSON.stringify(profissionais),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
  public excluir(id: Number): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.delete(`http://localhost:3000/profissional/delete/${id}`,options)
    .pipe(map((resposta: Response) => resposta));
     
  }
  public atualiza(profissionais: Profissionais,id:Number): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.put(`http://localhost:3000/profissional/edit/${id}`,
    JSON.stringify(profissionais),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
}
