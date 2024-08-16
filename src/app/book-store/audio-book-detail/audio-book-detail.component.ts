import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-audio-book-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './audio-book-detail.component.html',
  styleUrl: './audio-book-detail.component.scss'
})
export class AudioBookDetailComponent {
@Input() bookInfoDetails: any;
}
