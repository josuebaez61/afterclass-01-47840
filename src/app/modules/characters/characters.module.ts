import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [CharactersComponent],
})
export class CharactersModule {}
