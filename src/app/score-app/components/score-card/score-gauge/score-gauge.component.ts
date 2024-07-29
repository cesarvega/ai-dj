import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-score-gauge',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './score-gauge.component.html',
  styleUrl: './score-gauge.component.scss'
})
export class ScoreGaugeComponent {
  @Input() score: number = 30;
  dashArray: string = '100, 100';
  dashOffset: string = '100';

  ngOnChanges() {
    const progress = this.score / 100;
    this.dashArray = `${progress * 100}, 100`;
    this.dashOffset = `${100 - progress * 100}`;
  }
}
