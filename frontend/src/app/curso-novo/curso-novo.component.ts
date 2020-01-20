import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css'],
  providers: [CursosService]
})
export class CursoNovoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({

    'data_inicio': new FormControl(null),
    'descricao': new FormControl(null),
    'ultima_parcela_paga_coordenador': new FormControl(null) 
  });
  constructor(private cursosService:CursosService, private routers: Router) { }

  ngOnInit() {
  }

  public enviar(): void {

    let curso: Cursos = new Cursos(
      this.formulario.value.data_inicio+' 00:00:00',
      this.formulario.value.ultima_parcela_paga_coordenador,
      this.formulario.value.descricao
    );

    this.cursosService.enviar(curso)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro do curso realizado com sucesso!');
        this.routers.navigate(['curso']);
      }
      
    });
  }

}
