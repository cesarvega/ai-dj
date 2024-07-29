import { Component } from '@angular/core';
import { ScoreGaugeComponent } from './score-gauge/score-gauge.component';

@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [ScoreGaugeComponent],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.scss'
})
export class ScoreCardComponent {

}
