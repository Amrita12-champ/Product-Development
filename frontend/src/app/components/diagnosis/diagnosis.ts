import { Component } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.html',
  styleUrl: './diagnosis.css'
})
export class Diagnosis {

  selectedImage: string | null = null;

  showResult = false;
  isDiagnosing = false;

  disease = '-';
  confidence = '-';
  severity = '-';

  fileName = '';
  fileSize = '';
  diagnosisTime = '';

  onImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      return;
    }

    this.fileName = file.name;
    this.fileSize = (file.size / 1024 / 1024).toFixed(2) + ' MB';

    const reader = new FileReader();

    reader.onload = () => {
      this.selectedImage = reader.result as string;
      this.showResult = false;
      this.isDiagnosing = false;
    };

    reader.readAsDataURL(file);
  }

  diagnose(): void {

    if (!this.selectedImage) {
      return;
    }

    this.isDiagnosing = true;
    this.showResult = false;

    setTimeout(() => {

      this.disease = 'Leaf Spot';
      this.confidence = '92%';
      this.severity = 'Moderate';

      this.showResult = true;
      this.isDiagnosing = false;

      this.diagnosisTime = new Date().toLocaleTimeString();

    }, 1500);
  }

  removeImage(event: Event): void {

    event.stopPropagation();

    this.selectedImage = null;
    this.fileName = '';
    this.fileSize = '';
    this.showResult = false;
    this.isDiagnosing = false;
    this.diagnosisTime = '';
  }

  resetDiagnosis(): void {

    this.selectedImage = null;
    this.fileName = '';
    this.fileSize = '';

    this.showResult = false;
    this.isDiagnosing = false;

    this.disease = '-';
    this.confidence = '-';
    this.severity = '-';

    this.diagnosisTime = '';
  }
}