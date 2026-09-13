import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class Analytics {}