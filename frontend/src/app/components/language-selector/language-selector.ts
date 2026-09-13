import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.css']
})
export class LanguageSelectorComponent implements OnInit {
  currentLang: string = 'en';

  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी (Hindi)' },
    { code: 'or', label: 'ଓଡ଼ିଆ (Odia)' }
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('selectedLanguage') || 'en';
      this.currentLang = savedLang;
      this.translate.use(savedLang);
    }
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.currentLang = target.value;
      this.translate.use(this.currentLang);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('selectedLanguage', this.currentLang);
      }
    }
  }
}