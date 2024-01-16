import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <div class="container-photo">
        <img
          class="listing-photo"
          [src]="getPhoto(housingLocation.numeros)"
          alt="Exterior photo of {{ housingLocation.name }}"
        />
        <div
          class="arrow-left"
          (click)="displayPhotoLeft(housingLocation.numeros)"
        >
          ←
        </div>
        <div
          class="arrow-right"
          (click)="displayPhotoRight(housingLocation.numeros)"
        >
          →
        </div>
      </div>

      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  getPhoto(numeros: any) {
    const appGretting = `${numeros[this.i]}`;
    return appGretting;
  }

  i = 0;

  displayPhotoLeft(numeros: any) {
    if (this.i > 0) {
      this.i--;
    }
    return numeros[this.i];
  }

  displayPhotoRight(numeros: any) {
    if (this.i < numeros.length - 1) {
      this.i++;
    }
    return numeros[this.i];
  }
}
