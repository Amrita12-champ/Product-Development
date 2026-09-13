import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-risk',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './risk.html',
  styleUrl: './risk.css'
})
export class Risk {

  cropType = '';
  temperature: number | null = null;
  humidity: number | null = null;
  rainfall: number | null = null;

  showResult = false;

  riskLevelKey = '';
  warningKey = '';

  checkRisk(): void {
    if (
      !this.cropType ||
      this.temperature === null ||
      this.humidity === null ||
      this.rainfall === null
    ) {
      this.showResult = false;
      return;
    }

    if (this.humidity >= 80 && this.rainfall >= 100) {
      this.riskLevelKey = 'high';
      this.warningKey = 'highDesc';
    } else if (this.humidity >= 60 || this.rainfall >= 50) {
      this.riskLevelKey = 'medium';
      this.warningKey = 'mediumDesc';
    } else {
      this.riskLevelKey = 'low';
      this.warningKey = 'lowDesc';
    }

    this.showResult = true;
  }
}