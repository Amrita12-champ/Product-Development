import { Routes } from '@angular/router';
import { CropDiagnosis } from './components/crop-diagnosis/crop-diagnosis';
import { Diagnosis } from './components/diagnosis/diagnosis';
import { Risk } from './components/risk/risk';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'diagnosis',
    pathMatch: 'full'
  },
  {
    path: 'diagnosis',
    component: Diagnosis
  },
  {
    path: 'crop-diagnosis',
    component: CropDiagnosis
  },
  {
    path: 'risk',
    component: Risk
  }
];