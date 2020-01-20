import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
''
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditaComponent } from './profissional-edita/profissional-edita.component';
import { ProfissionalListaComponent } from './profissional-lista/profissional-lista.component';
import { PagamentoNovoComponent } from './pagamento-novo/pagamento-novo.component';
import { PagamentoEditaComponent } from './pagamento-edita/pagamento-edita.component';
import { PagamentoListaComponent } from './pagamento-lista/pagamento-lista.component';
import { TurmaListaComponent } from './turma-lista/turma-lista.component';
import { TurmaNovoComponent } from './turma-novo/turma-novo.component';
import { TurmaEditaComponent } from './turma-edita/turma-edita.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoEditaComponent } from './curso-edita/curso-edita.component';
import { DisciplinaEditaComponent } from './disciplina-edita/disciplina-edita.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { DisciplinaNovoComponent } from './disciplina-novo/disciplina-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    ProfissionalNovoComponent,
    ProfissionalEditaComponent,
    ProfissionalListaComponent,
    PagamentoNovoComponent,
    PagamentoEditaComponent,
    PagamentoListaComponent,
    TurmaListaComponent,
    TurmaNovoComponent,
    TurmaEditaComponent,
    CursoNovoComponent,
    CursoListaComponent,
    CursoEditaComponent,
    DisciplinaEditaComponent,
    DisciplinaListaComponent,
    DisciplinaNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
