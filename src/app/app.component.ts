import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'casco';

  constructor() {}

  ngAfterViewInit(): void {
    document.querySelectorAll('.accordion__item').forEach((el) => {
      el.addEventListener('click', () => {
        el.classList.toggle('open');
      });
    });
  }
}
