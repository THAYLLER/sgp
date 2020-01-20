import { Component, OnInit } from '@angular/core';
import { Turmas } from '../shared/turma.model';
import { TurmasService } from '../services/turma.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-turma-edita',
  templateUrl: './turma-edita.component.html',
  styleUrls: ['./turma-edita.component.css'],
  providers: [TurmasService,CursosService]
})
export class TurmaEditaComponent implements OnInit {

  public id;

  public turmas: Turmas[];
  public cursos: Cursos[];
  public curso : string;

  public formulario: FormGroup = new FormGroup({

    'codigo': new FormControl(null),
    'curso': new FormControl(null),
  });
  
  constructor(private TurmasService: TurmasService, private cursosService: CursosService,private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {

    this.cursosService.getCursos()
      .then((cursos: Cursos[]) => {
        this.cursos = JSON.parse(JSON.stringify(cursos));
        console.log(this.cursos);

      });

    this.TurmasService.find(this.id)
    .then((turmas: Turmas[]) => {

      this.curso = turmas['curso']
      this.formulario = this.formBuilder.group( {

        _id: [turmas['id']],
        codigo: [turmas['codigo']],
        curso: [turmas['curso']],
      })
    })
  }
  public enviar(): void {

    let turma: Turmas = new Turmas(
      this.formulario.value.codigo,
      this.formulario.value.curso
    );
      
    this.TurmasService.atualiza(turma,this.id)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro da turma atualizado com sucesso!');
        this.router.navigate(['/turma']);
      }
      
    });
  }
}
