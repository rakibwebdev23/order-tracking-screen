export type OrderStatus =
  | "delayed"
  | "delivered-not-received"
  | "tracking-unavailable";

export type TimelineStatus =
  | "completed"
  | "current"
  | "pending";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: TimelineStatus;
}

export interface Order {
  id: string;
  status: OrderStatus;
  statusTitle: string;
  statusDescription: string;
  estimatedDelivery: string;
  estimatedTime: string;
  products: Product[];
  timeline: TimelineItem[];
}




// export type OrderState =
//   | "delayed"
//   | "delivered-not-received"
//   | "tracking-unavailable";

// export type TimelineStatus = "completed" | "current" | "pending";

// export interface TimelineItem {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   status: TimelineStatus;
// }

// export interface Product {
//   id: string;
//   name: string;
//   quantity: number;
//   price: number;
//   image: string;
// }

// export interface DeliveryAddress {
//   name: string;
//   phone: string;
//   address: string;
//   city: string;
//   postalCode: string;
// }

// export interface PaymentInformation {
//   method: string;
//   lastFour?: string;
//   subtotal: number;
//   deliveryFee: number;
//   total: number;
// }

// export interface Order {
//   id: string;
//   state: OrderState;
//   statusTitle: string;
//   statusDescription: string;
//   estimatedDelivery: string;
//   estimatedTime: string;
//   trackingNumber: string;
//   carrier: string;
//   products: Product[];
//   timeline: TimelineItem[];
//   deliveryAddress: DeliveryAddress;
//   payment: PaymentInformation;
// }