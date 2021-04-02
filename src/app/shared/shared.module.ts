import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ]
})
export class SharedModule { }
