// ticket.model.ts
export interface Ticket {
    id?: string;
    vehicleNumber: string;
    driverName: string;
    parkingSpot: string;
    entryTime: Date;
    exitTime?: Date;
    // Add other relevant fields
  }