import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoEditaComponent } from './curso-edita/curso-edita.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { DisciplinaNovoComponent } from './disciplina-novo/disciplina-novo.component';
import { DisciplinaEditaComponent } from './disciplina-edita/disciplina-edita.component';
import { PagamentoListaComponent } from './pagamento-lista/pagamento-lista.component';
import { PagamentoNovoComponent } from './pagamento-novo/pagamento-novo.component';
import { PagamentoEditaComponent } from './pagamento-edita/pagamento-edita.component';
import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditaComponent } from './profissional-edita/profissional-edita.component';
import { TurmaListaComponent } from './turma-lista/turma-lista.component';
import { TurmaNovoComponent } from './turma-novo/turma-novo.component';
import { TurmaEditaComponent } from './turma-edita/turma-edita.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "curso", component: CursoListaComponent},
  {path: "curso/novo", component: CursoNovoComponent},
  {path: "curso/edita/:id", component: CursoEditaComponent},
  {path: "disciplina", component: DisciplinaListaComponent},
  {path: "disciplina/novo", component: DisciplinaNovoComponent},
  {path: "disciplina/edita/:id", component: DisciplinaEditaComponent},
  {path: "pagamento", component: PagamentoListaComponent},
  {path: "pagamento/novo", component: PagamentoNovoComponent},
  {path: "pagamento/edita/:id", component: PagamentoEditaComponent},
  {path: "profissional", component: ProfissionalListaComponent},
  {path: "profissional/novo", component: ProfissionalNovoComponent},
  {path: "profissional/edita/:id", component: ProfissionalEditaComponent},
  {path: "turma", component: TurmaListaComponent},
  {path: "turma/novo", component: TurmaNovoComponent},
  {path: "turma/edita/:id", component: TurmaEditaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
