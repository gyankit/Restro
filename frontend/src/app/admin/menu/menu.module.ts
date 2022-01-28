import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from '../components/error/error.component';


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    MenuComponent,
    AddComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuModule { }
