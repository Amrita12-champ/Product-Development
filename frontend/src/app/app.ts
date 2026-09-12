import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    LanguageSelectorComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'crop-dashboard';
}

export { App as AppComponent };