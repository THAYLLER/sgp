import { Component, OnInit } from '@angular/core';
import { faCog,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';


import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css'],
  providers: [DisciplinasService]
})
export class DisciplinaListaComponent implements OnInit {
  faCog = faCog;
  faEdit = faEdit;
  faTrash = faTrash;

  public disciplinas: Disciplinas[];

  constructor(private disciplinasService: DisciplinasService,private location: Location) { }

  ngOnInit() {

    this.disciplinasService.getdisciplinas()
      .then((disciplinas: Disciplinas[]) => {
        this.disciplinas = JSON.parse(JSON.stringify(disciplinas));
        console.log(this.disciplinas);

      });
  }
  public excluir(id: Number): void {

    this.disciplinasService.excluir(id).subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Disciplina excluida com sucesso!');
        
        location.reload();
      }
    });
  }
}