import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-audio-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './audio-book-detail.component.html',
  styleUrl: './audio-book-detail.component.scss'
})
export class AudioBookDetailComponent {
@Input() bookInfoDetails: any;
}
