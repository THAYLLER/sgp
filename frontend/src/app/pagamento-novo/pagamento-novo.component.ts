import { Component, OnInit } from '@angular/core';
import { Turmas } from '../shared/turma.model';
import { TurmasService } from '../services/turma.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Profissionais } from '../shared/profissionais.model';
import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';
import { ProfissionaisService } from '../services/profissionais.services';
import { Pagamento } from '../shared/pagamento.model';
import { PagamentoService } from '../services/pagamento.services';


@Component({
  selector: 'app-pagamento-novo',
  templateUrl: './pagamento-novo.component.html',
  styleUrls: ['./pagamento-novo.component.css'],
  providers: [TurmasService,CursosService,DisciplinasService,ProfissionaisService,PagamentoService]
})
export class PagamentoNovoComponent implements OnInit {

  public pagamento: Pagamento[];
  public cursos: Cursos[];
  public disciplinas: Disciplinas[];
  public profissionais: Profissionais[];

  public formulario: FormGroup = new FormGroup({

    'data': new FormControl(null),
    'valor': new FormControl(null),
    'periodo': new FormControl(null),
    'carga_horaria_periodo': new FormControl(null),
    'horas_em_sala': new FormControl(null),
    'valor_total': new FormControl(null),
    'curso': new FormControl(null),
    'disciplina': new FormControl(null),
    'profissional': new FormControl(null),
    
  });

  constructor(private pagamentoService: PagamentoService, private profissionaisService: ProfissionaisService, private disciplinasService: DisciplinasService, private cursosService: CursosService, private router: Router) { }

  ngOnInit() {

    this.cursosService.getCursos()
      .then((cursos: Cursos[]) => {
        this.cursos = JSON.parse(JSON.stringify(cursos));
      });

      this.disciplinasService.getdisciplinas()
      .then((d: Disciplinas[]) => {
        
        this.disciplinas = JSON.parse(JSON.stringify(d));
        
      });

      this.profissionaisService.getProfissionais()
      .then((p: Profissionais[]) => {
        this.profissionais = JSON.parse(JSON.stringify(p));
      });
  }

  public enviar(): void {

    let _pagamento: Pagamento = new Pagamento(
      this.formulario.value.data,
      this.formulario.value.valor,
      this.formulario.value.periodo,
      this.formulario.value.carga_horaria_periodo,
      this.formulario.value.horas_em_sala,
      this.formulario.value.valor_total,
      this.formulario.value.curso,
      this.formulario.value.disciplina,
      this.formulario.value.profissional,
      
    );
      
    this.pagamentoService.enviar(_pagamento)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro do pagamento realizado com sucesso!');
        this.router.navigate(['/pagamento']);
      }
      
    });
  }
  
}
