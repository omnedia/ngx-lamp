import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'om-lamp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-lamp.component.html",
  styleUrl: "./ngx-lamp.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLampComponent {
  @Input('styleClass')
  styleClass?: string;

  @Input('lampColor')
  set lampColor(color: string) {
    this.style['--om-lamp-color'] = color;
  }

  @Input('backgroundColor')
  set backgroundColor(color: string) {
    this.style['--om-lamp-background-color'] = color;
  }

  style: any = {};
}
