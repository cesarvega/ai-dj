export type OmniLocation  = {
    id: string;
    name: string;
    code: string;
    email: string;
    address: string;
    lat: number;
    lng: number;
    qrCode: string;
    timezone: string;
    price: number; // Assuming price is in cents
    reparkingFee: number;
    createdAt: string | null;
    modifiedAt: string | null;
    surchargeTax: number;
    salesTax: number;
    surchargeTaxEnabled: boolean;
    salesTaxEnabled: boolean;
    workingHourFrom: string; // Format: "HH:mm:ss"
    workingHourTo: string;   // Format: "HH:mm:ss"
    allowMultipleDaysBooking: boolean;
    active: boolean;
  }