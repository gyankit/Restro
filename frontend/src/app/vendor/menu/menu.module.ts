import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './menu.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    MenuComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuModule { }
