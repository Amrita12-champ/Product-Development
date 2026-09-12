import { Routes } from '@angular/router';
import { CropDiagnosis } from './components/crop-diagnosis/crop-diagnosis';
import { Diagnosis } from './components/diagnosis/diagnosis';
import { Risk } from './components/risk/risk';
import { Monitoring } from './components/monitoring/monitoring';
import { Profile } from './components/profile/profile';
import { History } from './components/history/history';
import { Analytics } from './components/analytics/analytics';
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
  },
  {
  path: 'monitoring',
  component: Monitoring
},
{
  path: 'profile',
  component: Profile
},
{
    path: 'history',
    component: History
  },
  {
    path: 'analytics',
    component: Analytics
  }
];