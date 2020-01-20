import { Component, OnInit } from '@angular/core';
import { faCog,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProfissionaisService } from '../services/profissionais.services';
import { Profissionais } from '../shared/profissionais.model';

@Component({
  selector: 'app-profissional-lista',
  templateUrl: './profissional-lista.component.html',
  styleUrls: ['./profissional-lista.component.css'],
  providers: [ProfissionaisService]
})
export class ProfissionalListaComponent implements OnInit {

  faCog = faCog;
  faEdit = faEdit;
  faTrash = faTrash;

  public profissionais: Profissionais[];

  constructor(private ProfissionaisService: ProfissionaisService) { }

  ngOnInit() {

    this.ProfissionaisService.getProfissionais()
      .then((profissionais: Profissionais[]) => {
        this.profissionais = JSON.parse(JSON.stringify(profissionais));
      });
  }
  public excluir(id: Number): void {

    this.ProfissionaisService.excluir(id).subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Profissional excluido com sucesso!');
        
        location.reload();
      }
    });
  }
}