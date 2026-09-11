import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { LanguageSelectorComponent } from './components/language-selector/language-selector';
import { CropDiagnosis } from './components/crop-diagnosis/crop-diagnosis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    LanguageSelectorComponent,
    CropDiagnosis
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'frontend';
}

export { App as AppComponent };