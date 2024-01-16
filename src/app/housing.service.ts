import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 17657652,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      bathrooms: 3,
      wifi: 'Yes',
      laundry: 'Yes',
      numeros: [
        `../assets/home1.jpeg`,
        `../assets/living2.avif`,
        `../assets/swimming2.avif`,
      ],
    },
    {
      id: 1987234,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 1,
      bathrooms: 2,
      wifi: 'No',
      laundry: 'Yes',
      numeros: [
        `../assets/home2.jpeg`,
        `../assets/living2.avif`,
        `../assets/swimming2.avif`,
      ],
    },
    {
      id: 22876234,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      bathrooms: 4,
      wifi: 'No',
      laundry: 'No',
      numeros: [
        `../assets/home8.jpeg`,
        `../assets/living1.avif`,
        `../assets/living2.avif`,
      ],
    },
    {
      id: 32348764,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      bathrooms: 2,
      wifi: 'Yes',
      laundry: 'No',
      numeros: [
        `../assets/home4.jpeg`,
        `../assets/living1.avif`,
        `../assets/living2.avif`,
      ],
    },
    {
      id: 4234876,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      bathrooms: 2,
      wifi: 'Yes',
      laundry: 'No',
      numeros: [
        `../assets/home5.jpeg`,
        `../assets/living1.avif`,
        `../assets/living2.avif`,
      ],
    },
    {
      id: 523489724,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      bathrooms: 1,
      wifi: 'Yes',
      laundry: 'Yes',
      numeros: [
        `../assets/home6.jpeg`,
        `../assets/living2.avif`,
        `../assets/swimming2.avif`,
      ],
    },
    {
      id: 627348,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      bathrooms: 3,
      wifi: 'Yes',
      laundry: 'Yes',
      numeros: [
        `../assets/home7.jpeg`,
        `../assets/living1.avif`,
        `../assets/swimming1.avif`,
      ],
    },
    {
      id: 7234876234,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      bathrooms: 1,
      wifi: 'Yes',
      laundry: 'Yes',
      numeros: [
        `../assets/home8.jpeg`,
        `../assets/living1.avif`,
        `../assets/swimming1.avif`,
      ],
    },
    {
      id: 8234234,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      bathrooms: 4,
      wifi: 'No',
      laundry: 'No',
      numeros: [
        `../assets/home9.jpeg`,
        `../assets/living1.avif`,
        `../assets/living2.avif`,
      ],
    },
    {
      id: 92349234,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      bathrooms: 3,
      wifi: 'Yes',
      laundry: 'Yes',
      numeros: [
        `../assets/home10.jpeg`,
        `../assets/living1.avif`,
        `../assets/swimming1.avif`,
      ],
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    return `${firstName} ${lastName}, your application was correctly recived. We'll answered you at ${email}.`;
  }
}
