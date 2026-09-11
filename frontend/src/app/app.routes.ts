import { Routes } from '@angular/router';
import { CropDiagnosis } from './components/crop-diagnosis/crop-diagnosis';

export const routes: Routes = [
  { path: '', redirectTo: 'diagnosis', pathMatch: 'full' },
  { path: 'diagnosis', component: CropDiagnosis }
];