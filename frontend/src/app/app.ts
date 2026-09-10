import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './components/language-selector/language-selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'frontend';
}

// Alias to satisfy any other imports expecting AppComponent
export { App as AppComponent };