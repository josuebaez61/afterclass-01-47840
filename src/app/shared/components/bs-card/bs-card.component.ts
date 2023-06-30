import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.css']
})
export class BsCardComponent {
  @Input()
  title = '';

  @Input()
  description = '';

  @Input()
  img = '';

  @Input()
  alt = '';

  @Input()
  clickable = false;

  @Input()
  severity: 'success' | 'warning' | 'danger' | 'info' | '' = '';

  @Output()
  onClick = new EventEmitter();


  emitOnClick(event: MouseEvent): void {
    if (this.clickable)
      this.onClick.emit(event);
  }
}
