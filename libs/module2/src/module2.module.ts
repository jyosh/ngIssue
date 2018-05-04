import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module2homeComponent } from './containers/module2home/module2home.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: Module2homeComponent }
    ])
  ],
  declarations: [Module2homeComponent, ChildComponent]
})
export class Module2Module {}
