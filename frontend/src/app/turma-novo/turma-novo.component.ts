import { Component, OnInit } from '@angular/core';
import { Turmas } from '../shared/turma.model';
import { TurmasService } from '../services/turma.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-turma-novo',
  templateUrl: './turma-novo.component.html',
  styleUrls: ['./turma-novo.component.css'],
  providers: [TurmasService,CursosService]
})
export class TurmaNovoComponent implements OnInit {

  public turmas: Turmas[];
  public cursos: Cursos[];

  public formulario: FormGroup = new FormGroup({

    'codigo': new FormControl(null),
    'curso': new FormControl(null),
  });

  constructor(private TurmasService: TurmasService, private cursosService: CursosService, private router: Router) { 

    
  }

  ngOnInit() {

    this.cursosService.getCursos()
      .then((cursos: Cursos[]) => {
        this.cursos = JSON.parse(JSON.stringify(cursos));
        console.log(this.cursos);

      });
  }

  public enviar(): void {

    let turma: Turmas = new Turmas(
      this.formulario.value.codigo,
      this.formulario.value.curso
    );
      
    this.TurmasService.enviar(turma)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro da turma realizado com sucesso!');
        this.router.navigate(['/turma']);
      }
      
    });
  }
  
}
