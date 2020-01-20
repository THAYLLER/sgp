import { Component, OnInit } from '@angular/core';
import { faCog,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

import {CursosService} from '../services/cursos.services';
import { Cursos } from '../shared/cursos.model';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css'],
  providers: [CursosService]
})
export class CursoListaComponent implements OnInit {

  faCog = faCog;
  faEdit = faEdit;
  faTrash = faTrash;

  public cursos: Cursos[];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {

    this.cursosService.getCursos()
      .then((cursos: Cursos[]) => {
        this.cursos = JSON.parse(JSON.stringify(cursos));
        console.log(this.cursos);

      });
  }
  public excluir(id: Number): void {

    this.cursosService.excluir(id).subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Curso excluido com sucesso!');
        
        location.reload();
      }
    });
  }
}
