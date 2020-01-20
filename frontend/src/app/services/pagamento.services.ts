import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Pagamento } from '../shared/pagamento.model';

@Injectable()
export class PagamentoService {

  constructor(private http: HttpClient){}

  public getPagamento(): Promise<Pagamento[]> {

    return this.http.get('http://localhost:3000/pagamento/all')
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public find(id: Number): Promise<Pagamento[]> {

    return this.http.get(`http://localhost:3000/pagamento/find/${id}`)
            .toPromise()
            .then((resposta: any) => resposta);
  }

  public enviar(pagamento: Pagamento): Observable<any> {
    console.log(pagamento)
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.post('http://localhost:3000/pagamento/new',
    JSON.stringify(pagamento),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
  public excluir(id: Number): Observable<any> {
    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.delete(`http://localhost:3000/pagamento/delete/${id}`,options)
    .pipe(map((resposta: Response) => resposta));
     
  }
  public atualiza(pagamento: Pagamento,id:Number): Observable<any> {

    const options = {
      headers: new HttpHeaders().append('Content-type', 'application/json'),
      
    }

    return this.http.put(`http://localhost:3000/pagamento/edit/${id}`,
    JSON.stringify(pagamento),
    options)
    .pipe(map((resposta: Response) => resposta));
  }
}
