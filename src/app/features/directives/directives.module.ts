import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyChangeColorDirectiveDirective } from './directive/my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './directive/my-if-directive.directive';
import { DirectivesPageComponent } from './directives.component';
import { DirectivesRouting } from './directives-routing.module';

@NgModule({
  declarations: [ DirectivesPageComponent, MyChangeColorDirectiveDirective, MyIfDirectiveDirective ],
  imports: [ CommonModule, DirectivesRouting ],
  exports: []
})
export class DirectivesModule { }