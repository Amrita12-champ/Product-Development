import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  name = 'Pratyusha';
  email = 'pratyusha@gmail.com';
  phone = '';
  location = '';
  farmName = '';

  saveProfile(): void {
    alert('Profile updated successfully!');
  }
}
