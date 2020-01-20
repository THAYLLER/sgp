import { Component, OnInit } from '@angular/core';
import { faCog,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Pagamento } from '../shared/pagamento.model';
import { PagamentoService } from '../services/pagamento.services';
import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { Profissionais } from '../shared/profissionais.model';
import { ProfissionaisService } from '../services/profissionais.services';


@Component({
  selector: 'app-pagamento-lista',
  templateUrl: './pagamento-lista.component.html',
  styleUrls: ['./pagamento-lista.component.css'],
  providers: [DisciplinasService,PagamentoService,CursosService,ProfissionaisService]
})
export class PagamentoListaComponent implements OnInit {

  faCog = faCog;
  faEdit = faEdit;
  faTrash = faTrash;

  public pagamentos: Pagamento[];

  constructor(
    private profissionaisService: ProfissionaisService,
    private cursosService: CursosService,
    private pagamentoService: PagamentoService,
    private disciplinasService: DisciplinasService,
    private location: Location) { }

  ngOnInit() {

    this.pagamentoService.getPagamento()
      .then((pagamento: Pagamento[]) => {
        console.log(pagamento)
        this.pagamentos = JSON.parse(JSON.stringify(pagamento));

      });
      
  }
  public excluir(id: Number): void {

    this.pagamentoService.excluir(id).subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Pagamento excluido com sucesso!');
        
        location.reload();
      }
    });
  }
}