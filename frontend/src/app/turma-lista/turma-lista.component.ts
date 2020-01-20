import { Component, OnInit } from '@angular/core';
import { faCog,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Turmas } from '../shared/turma.model';
import { TurmasService } from '../services/turma.services';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';

@Component({
  selector: 'app-turma-lista',
  templateUrl: './turma-lista.component.html',
  styleUrls: ['./turma-lista.component.css'],
  providers: [TurmasService,CursosService]
})
export class TurmaListaComponent implements OnInit {

  faCog = faCog;
  faEdit = faEdit;
  faTrash = faTrash;

  public turmas: Turmas[];
  public cursos: Cursos[];
  private cursoDesc: String;

  constructor(private TurmasService: TurmasService, private cursosService: CursosService) { }

  ngOnInit() {

    this.TurmasService.getTurmas()
      .then((turmas: Turmas[]) => {
        this.turmas = JSON.parse(JSON.stringify(turmas));
        
      });

      // for (let i = 0; i < this.turmas.length; i++) {
        
      //   this.cursosService.find(this.turmas['curso']).then((cursos: Cursos[]) => {
      //     console.log(cursos);
      //     this.cursoDesc = cursos['descricao'];
      //   });  
      // }
      
      
  }
  public excluir(id: Number): void {

    this.TurmasService.excluir(id).subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Turma excluida com sucesso!');
        
        location.reload();
      }
    });
  }
}
