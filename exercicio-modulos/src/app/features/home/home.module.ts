import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsModule } from '../collaborators/collaborators.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CollaboratorsModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
