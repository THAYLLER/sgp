import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profissionais } from '../shared/profissionais.model';
import { ProfissionaisService } from '../services/profissionais.services';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profissional-novo',
  templateUrl: './profissional-novo.component.html',
  styleUrls: ['./profissional-novo.component.css'],
  providers: [ProfissionaisService]
})
export class ProfissionalNovoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({

    'data_inicio': new FormControl(null),
    'nome': new FormControl(null),
    'cargo': new FormControl(null),
    'matricula': new FormControl(null),
    'titulacao': new FormControl(null),
    'rg': new FormControl(null),
    'orgao_expedidor': new FormControl(null),
    'uf': new FormControl(null),
    'cpf': new FormControl(null),
    'pis': new FormControl(null),
    'banco': new FormControl(null),
    'agencia': new FormControl(null),
    'conta': new FormControl(null),
    'endereco': new FormControl(null),
    'bairro': new FormControl(null),
    'cidade': new FormControl(null),
    'estado': new FormControl(null),
    'cep': new FormControl(null),
    'telefone': new FormControl(null),
    'data_nascimento': new FormControl(null),
    'declaracao': new FormControl(null),
  });
  constructor(private profissionaisService:ProfissionaisService, private router: Router) { }

  ngOnInit() {
  }

  public enviar(): void {

    let curso: Profissionais = new Profissionais(
      this.formulario.value.nome,
      this.formulario.value.cargo,
      this.formulario.value.matricula,
      this.formulario.value.titulacao,
      this.formulario.value.rg,
      this.formulario.value.orgao_expedidor,
      this.formulario.value.uf,
      this.formulario.value.cpf,
      this.formulario.value.pis,
      this.formulario.value.banco,
      this.formulario.value.agencia,
      this.formulario.value.conta,
      this.formulario.value.endereco,
      this.formulario.value.bairro,
      this.formulario.value.cidade,
      this.formulario.value.estado,
      this.formulario.value.cep,
      this.formulario.value.telefone,
      this.formulario.value.data_nascimento+' 00:00:00',
      this.formulario.value.declaracao,
    );

    this.profissionaisService.enviar(curso)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Cadastro do profissional realizado com sucesso!');
        this.router.navigate(['/disciplina']);
      }
      
    });
  }


}
