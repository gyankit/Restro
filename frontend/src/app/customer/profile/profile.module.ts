import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProfileModule { }
