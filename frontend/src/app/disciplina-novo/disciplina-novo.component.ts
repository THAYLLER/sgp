import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';


@Component({
  selector: 'app-disciplina-novo',
  templateUrl: './disciplina-novo.component.html',
  styleUrls: ['./disciplina-novo.component.css'],
  providers: [DisciplinasService]
})
export class DisciplinaNovoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({

    'carga_horaria_disciplina': new FormControl(null),
    'descricao': new FormControl(null) 
  });
  constructor(private disciplinasService:DisciplinasService, private router: Router) { }

  ngOnInit() {
  }

  public enviar(): void {

    let disciplina: Disciplinas = new Disciplinas(
      this.formulario.value.carga_horaria_disciplina,
      this.formulario.value.descricao
    );
      console.log
    this.disciplinasService.enviar(disciplina)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro da disciplina realizado com sucesso!');
        this.router.navigate(['/disciplina']);
      }
      
    });
  }

}
