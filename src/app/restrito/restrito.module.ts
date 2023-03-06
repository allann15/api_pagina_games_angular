import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { RestritoRoutingModule } from './restrito.routing.module';

import { RestritoComponent } from './restrito.component';
import { MenuRestritoComponent } from './menu-restrito/menu-restrito.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';


@NgModule({
  declarations: [
    RestritoComponent,
    MenuRestritoComponent,
    ListaProdutoComponent,
    CadastroProdutoComponent,
    AtualizaProdutoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    RestritoRoutingModule,
    FormsModule
  ]
})
export class RestritoModule { }