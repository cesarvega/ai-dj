import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { WaveComponentComponent } from '../wave-component/wave-component.component';

@Component({
  selector: 'app-raw-spinner',
  standalone: true,
  imports: [WaveComponentComponent],
  templateUrl: './raw-spinner.component.html',
  styleUrl: './raw-spinner.component.scss'
})
export class RawSpinnerComponent implements OnInit {
  speed: number = 0.5; // Time interval in seconds for toggling the class
  displayTime: number = 3; // Time in seconds before hiding the spinner

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.showSpinner();
  }

  showSpinner(): void {
    const spinner = this.el.nativeElement.querySelector('#qodef-page-spinner');
    const paths = Array.from(spinner.querySelectorAll('path')) as SVGPathElement[];
    if (paths.length > 0) {
      // Set display to block
      this.renderer.setStyle(spinner, 'display', 'block');

      // Immediately toggle the first path
      this.toggleClass(paths, 0);

      // Interval to toggle the class on each path
      let currentIndex = 1;
      const interval = setInterval(() => {
        this.toggleClass(paths, currentIndex);
        currentIndex = (currentIndex + 1) % paths.length;
      }, this.speed * 1000);

      // Hide spinner after displayTime and clear interval
      setTimeout(() => {
        clearInterval(interval);
        this.renderer.setStyle(spinner, 'display', 'none');
        paths.forEach((path: SVGPathElement) => {
          this.renderer.removeClass(path, 'qodef--active');
        });
      }, this.displayTime * 1000);
    }
  }

  toggleClass(paths: SVGPathElement[], index: number): void {
    paths.forEach((path: SVGPathElement, i: number) => {
      if (i === index) {
        this.renderer.addClass(path, 'qodef--active');
      } else {
        this.renderer.removeClass(path, 'qodef--active');
      }
    });
  }
}