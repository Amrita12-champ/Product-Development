import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-risk',
  imports: [FormsModule],
  templateUrl: './risk.html',
  styleUrl: './risk.css'
})
export class Risk {

  cropType = '';
  temperature: number | null = null;
  humidity: number | null = null;
  rainfall: number | null = null;

  showResult = false;

  riskLevel = '-';
  warningMessage = '';


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


    /*
     * Frontend-only demo logic.
     * Backend/API can be connected here later.
     */

    if (
      this.humidity >= 80 &&
      this.rainfall >= 100
    ) {

      this.riskLevel = 'High';

      this.warningMessage =
        'High disease risk detected. High humidity and rainfall may increase the chance of crop disease.';

    } else if (
      this.humidity >= 60 ||
      this.rainfall >= 50
    ) {

      this.riskLevel = 'Medium';

      this.warningMessage =
        'Moderate disease risk detected. Keep monitoring your crop and maintain proper field conditions.';

    } else {

      this.riskLevel = 'Low';

      this.warningMessage =
        'Low disease risk detected. Current environmental conditions appear relatively safe for the crop.';

    }

    this.showResult = true;
  }
}