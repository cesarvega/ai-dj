// ticket.model.ts
export interface Ticket {
  id?: string;              // ID del ticket, opcional que realizo el pago
  pay_type: string;         // Tipo de pago, como "Stripe" que realizo el pago
  amount_total: number;     // Monto total, convertido a número que realizo el pago
  status: string;           // Estado del pago, como "complete" que realizo el pago
  currency: string;         // Moneda, como "usd" que realizo el pago
  country: string;          // País, como "US" que realizo el pago
  email: string;            // Email del usuario que realizo el pago
  name: string;             // Nombre del usuario  que realizo el pago
  phone?: string | null;    // Teléfono, opcional o null si no se proporciona que realizo el pago
  mode: string;             // Modo de pago, como "payment" que realizo el pago
  payment_status: string;   // Estado del pago, como "paid" que realizo el pago
  session_id: string;       // ID de la sesión de pago
  user_role: string;        // Rol del usuario, como "customer" valet parking
  user_firstname: string;   // Nombre del usuario valet parking
  user_lastname: string;    // Apellido del usuario valet parking
  user_id: string;          // ID del usuario valet parking
  location_name: string;    // Nombre del lugar
  location_id: string;      // ID del lugar
  location_address: string; // Dirección del lugar
  license_plate: string;    // Placa del vehículo


}
