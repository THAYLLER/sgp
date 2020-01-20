import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Disciplinas } from '../shared/disciplinas.model';
import { DisciplinasService } from '../services/disciplinas.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-edita',
  templateUrl: './disciplina-edita.component.html',
  styleUrls: ['./disciplina-edita.component.css'],
  providers: [DisciplinasService]
})
export class DisciplinaEditaComponent implements OnInit {
  
  public id;
  
  public formulario: FormGroup = new FormGroup({
    '_id': new FormControl(null),
    'carga_horaria_disciplina': new FormControl(null),
    'descricao': new FormControl(null) 
  });
  constructor(private disciplinasService:DisciplinasService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { 

    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.carregar();
    
  }

  public carregar(): void {

    this.disciplinasService.find(this.id)
    .then((disciplinas: Disciplinas[]) => {
      
      this.formulario = this.formBuilder.group({
        _id: [disciplinas['id']],
        carga_horaria_disciplina: [disciplinas['carga_horaria_disciplina']],
        descricao: [disciplinas['descricao']]
      });

    });
    
  }
  public atualizar(): void {

    let disciplina: Disciplinas = new Disciplinas(
      this.formulario.value.carga_horaria_disciplina,
      this.formulario.value.descricao
    );
      console.log
    this.disciplinasService.enviar(disciplina)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Disciplina atualizada com sucesso!');
        this.router.navigate(['/disciplina']);
      }
      
    });
  }

}
