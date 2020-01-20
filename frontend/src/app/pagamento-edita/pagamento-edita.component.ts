import { Component, OnInit } from '@angular/core';
import { Turmas } from '../shared/turma.model';
import { TurmasService } from '../services/turma.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissionais } from '../shared/profissionais.model';
import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';
import { ProfissionaisService } from '../services/profissionais.services';
import { Pagamento } from '../shared/pagamento.model';
import { PagamentoService } from '../services/pagamento.services';

@Component({
  selector: 'app-pagamento-edita',
  templateUrl: './pagamento-edita.component.html',
  styleUrls: ['./pagamento-edita.component.css'],
  providers: [TurmasService,CursosService,DisciplinasService,ProfissionaisService,PagamentoService]
})
export class PagamentoEditaComponent implements OnInit {

  public id;

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

  constructor(private pagamentoService: PagamentoService, private profissionaisService: ProfissionaisService, private disciplinasService: DisciplinasService, private cursosService: CursosService, private router: Router,private formBuilder: FormBuilder, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.id = params['id']);
   }

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
      this.carregar();
    
    }
  
    public carregar(): void {
  
      this.pagamentoService.find(this.id)
      .then((pagamento: Pagamento[]) => {
        
        this.formulario = this.formBuilder.group({
          _id: [pagamento['id']],
          data: [pagamento['data']],
          valor: [pagamento['valor']],
          periodo: [pagamento['periodo']],
          carga_horaria_periodo: [pagamento['carga_horaria_periodo']],
          horas_em_sala: [pagamento['horas_em_sala']],
          valor_total: [pagamento['valor_total']],
          curso: [pagamento['curso']],
          disciplina: [pagamento['disciplina']],
          profissional: [pagamento['profissional']],
        });
  
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
      
    this.pagamentoService.atualiza(_pagamento,this.id)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro do pagamento atualizado com sucesso!');
        this.router.navigate(['/pagamento']);
      }
      
    });
  }
  
}

