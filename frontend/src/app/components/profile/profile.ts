import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  name = 'Pratyusha';
  email = 'pratyusha@gmail.com';
  phone = '';
  location = '';
  farmName = '';

  constructor(private translate: TranslateService) {}

  saveProfile(): void {
    this.translate.get('profile.updateSuccess').subscribe((msg: string) => {
      alert(msg);
    });
  }
}