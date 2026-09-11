import { Routes } from '@angular/router';
import { Diagnosis } from './components/diagnosis/diagnosis';
import { Risk } from './components/risk/risk';

export const routes: Routes = [
  {
    path: 'diagnosis',
    component: Diagnosis
  },
  {
    path: 'risk',
    component: Risk
  }
];
