import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <!-- <p>
        {{ housingLocation?.numeros }}
        {{ displayPhotoLeft(housingLocation?.numeros) }}
      </p>
      <div (click)="displayPhotoLeft(housingLocation?.numeros)">←</div>
      <div (click)="displayPhotoRight(housingLocation?.numeros)">→</div> -->
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this house</h2>
        <ul>
          <li>
            <i class="fa-solid fa-bed"></i>
            {{ housingLocation?.availableUnits }}
          </li>
          <li>
            <i class="fa-solid fa-bath"></i>
            {{ housingLocation?.bathrooms }}
          </li>
          <li><i class="fa-solid fa-wifi"></i> {{ housingLocation?.wifi }}</li>
          <li>
            <i class="fa-solid fa-person-swimming"></i>
            {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
      <section [hidden]="isShowDiv" class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name *</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name *</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email *</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
      <section>
        <div class="one"></div>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private elementRef: ElementRef) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  // submitApplication() {
  //   this.housingService.submitApplication(
  //     this.applyForm.value.firstName ?? '',
  //     this.applyForm.value.lastName ?? '',
  //     this.applyForm.value.email ?? ''
  //   );
  // }
  submitApplication() {
    this.getSubmitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.toggleDisplayDiv();
  }
  getSubmitApplication(firstName: string, lastName: string, email: string) {
    const appGretting = `
    <h1>${firstName} ${lastName} your application was correctly sent. We'll answer you at ${email} as soon as possible.</h1>
    `;
    const d1 = this.elementRef.nativeElement.querySelector('.one');
    d1.insertAdjacentHTML('beforeend', appGretting);
    return appGretting;
  }

  isShowDiv = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  // i = 0;
  // currentNumber = 0;

  // displayPhotoLeft(numeros: any) {
  //   if (this.i === 0) console.log(numeros[this.i]);
  //   if (this.i > 0) {
  //     this.i--;
  //     console.log(numeros[this.i]);
  //   }
  //   return numeros[this.i];
  // }

  // displayPhotoRight(numeros: any) {
  //   if (this.i === numeros.length - 1) console.log(numeros[this.i]);
  //   if (this.i < numeros.length - 1) {
  //     this.i++;
  //     console.log(numeros[this.i]);
  //   }
  //   return numeros[this.i];
  // }
}
