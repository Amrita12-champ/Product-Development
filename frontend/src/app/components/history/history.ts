import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History {}