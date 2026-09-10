import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.css']
})
export class LanguageSelectorComponent implements OnInit {
  currentLang: string = 'en';
  labels: { [key: string]: string } = {};

  languages = [
    { code: 'en', key: 'ENGLISH' },
    { code: 'hi', key: 'HINDI' },
    { code: 'or', key: 'ODIA' }
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    let savedLang = 'en';
    if (isPlatformBrowser(this.platformId)) {
      savedLang = localStorage.getItem('selectedLanguage') || 'en';
    }
    this.currentLang = savedLang;
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang).subscribe(() => {
      this.loadLabels();
    });
  }

  loadLabels(): void {
    this.translate.get(['SELECT_LANGUAGE', 'ENGLISH', 'HINDI', 'ODIA']).subscribe(res => {
      this.labels = res;
    });
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      this.currentLang = target.value;
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('selectedLanguage', this.currentLang);
      }
      this.setLanguage(this.currentLang);
    }
  }
}