import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-pg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-pg.component.html',
  styleUrl: './home-pg.component.scss',
})
export class HomePgComponent {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  img: any;

  getImages(): void {
    this.http.get('assets/db/images.json').subscribe((res) => {
      this.img = res;
    });
  }

  ngOnInit() {
    this.getImages();
  }
}
