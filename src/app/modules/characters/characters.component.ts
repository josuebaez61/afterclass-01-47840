import { Component } from '@angular/core';
import { characters } from 'src/app/data/characters.data';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters: Character[] = characters;

  onClickCard(event: MouseEvent, character: Character): void {
    console.log(character);
  }
}
