import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ZeroCross} from '../ZeroCross';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent implements OnInit {

  @Input() public piece: ZeroCross = ZeroCross.EMPTY;
  @Input() public row: number;
  @Input() public col: number;

  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
