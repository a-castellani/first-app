export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  bathrooms: number;
  wifi: string;
  laundry: string;
  numeros: [string, string, string];
}
