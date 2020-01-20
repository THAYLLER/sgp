import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Profissionais } from '../shared/profissionais.model';
import { ProfissionaisService } from '../services/profissionais.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profissional-edita',
  templateUrl: './profissional-edita.component.html',
  styleUrls: ['./profissional-edita.component.css'],
  providers: [ProfissionaisService]
})
export class ProfissionalEditaComponent implements OnInit {

  public id;

  public formulario: FormGroup = new FormGroup({
    '_id': new FormControl(null),
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
  constructor(private profissionaisService:ProfissionaisService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { 

    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.carregar();
    
  }

  public carregar(): void {

    this.profissionaisService.find(this.id)
    .then((profissionais: Profissionais[]) => {
      
      this.formulario = this.formBuilder.group({
        _id: [profissionais['id']],
        data_inicio: [profissionais['data_inicio']],
        nome: [profissionais['nome']],
        cargo: [profissionais['cargo']],
        matricula: [profissionais['matricula']],
        titulacao: [profissionais['titulacao']],
        rg: [profissionais['rg']],
        orgao_expedidor: [profissionais['orgao_expedidor']],
        uf: [profissionais['uf']],
        cpf: [profissionais['cpf']],
        pis: [profissionais['pis']],
        banco: [profissionais['banco']],
        agencia: [profissionais['agencia']],
        conta: [profissionais['conta']],
        endereco: [profissionais['endereco']],
        bairro: [profissionais['bairro']],
        cidade: [profissionais['cidade']],
        estado: [profissionais['estado']],
        cep: [profissionais['cep']],
        telefone: [profissionais['telefone']],
        data_nascimento: [profissionais['data_nascimento'].split('T')[0]],
        declaracao: [profissionais['declaracao']],
      });

    });
    
  }
  public atualizar(): void {

    let profissional: Profissionais = new Profissionais(
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

    this.profissionaisService.atualiza(profissional,this.id)
    .subscribe((retorno: any) =>{

      if(!retorno.isFulfilled && !retorno.isRejected){

        alert('Profissional atualizado com sucesso!');
        this.router.navigate(['/profissional']);
      }
      
    });
  }


}
