import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BlogTabComponent } from '../blog-tab/blog-tab.component';
import { ProductTabComponent } from '../product-tab/product-tab.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { AudioBookLibraryComponent } from '@app/book-store/audio-book-library/audio-book-library.component';

@Component({
  selector: 'app-landing-pg',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BlogTabComponent,
    ProductTabComponent,
    ProductListComponent,
    AudioBookLibraryComponent
  ],
  templateUrl: './landing-pg.component.html',
  styleUrl: './landing-pg.component.scss',
})
export class LandingPgComponent {}
