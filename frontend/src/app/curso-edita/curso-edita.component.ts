import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Cursos } from '../shared/cursos.model';
import { CursosService } from '../services/cursos.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-edita',
  templateUrl: './curso-edita.component.html',
  styleUrls: ['./curso-edita.component.css'],
  providers: [CursosService]
})
export class CursoEditaComponent implements OnInit {

  public id;

  public formulario: FormGroup = new FormGroup({
    '_id': new FormControl(null),
    'data_inicio': new FormControl(null),
    'descricao': new FormControl(null),
    'ultima_parcela_paga_coordenador': new FormControl(null) 
  });

  constructor(private cursosService:CursosService, private route: ActivatedRoute, private formBuilder: FormBuilder, private routers: Router) { 

    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.carregar();
    
  }

  public carregar(): void {

    this.cursosService.find(this.id)
    .then((curso: Cursos[]) => {
      console.log(curso)
      this.formulario = this.formBuilder.group({
        _id: [curso['id']],
        data_inicio: [curso['data_inicio'].split('T')[0]],
        descricao: [curso['descricao']],
        ultima_parcela_paga_coordenador: [curso['ultima_parcela_paga_coordenador'] ]
      });

    });
    
  }
  public atualizar(): void {

    let curso: Cursos = new Cursos(
      this.formulario.value.data_inicio+' 00:00:00',
      this.formulario.value.ultima_parcela_paga_coordenador,
      this.formulario.value.descricao
    );

    this.cursosService.atualiza(curso,this.formulario.value._id)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro atualizado com sucesso!');
        this.routers.navigate(['curso']);
      }
      
    });
  }

}
