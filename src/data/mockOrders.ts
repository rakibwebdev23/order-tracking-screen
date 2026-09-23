import { Order, OrderState } from "@/types/order";

const baseTimeline = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order has been confirmed",
    date: "Sep 20, 2026",
    time: "10:24 AM",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Order confirmed",
    description: "Seller has confirmed your order",
    date: "Sep 20, 2026",
    time: "11:10 AM",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Shipped",
    description: "Package has left the seller",
    date: "Sep 21, 2026",
    time: "08:45 AM",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Out for delivery",
    description: "Courier is on the way",
    date: "Sep 23, 2026",
    time: "09:30 AM",
    status: "current" as const,
  },
  {
    id: "5",
    title: "Delivered",
    description: "Package delivered to your address",
    date: "Sep 23, 2026",
    time: "—",
    status: "pending" as const,
  },
];

const products = [
  {
    id: "product-1",
    name: "Wireless Headphones",
    quantity: 1,
    price: 3499,
    image: "/images/product-placeholder.svg",
  },
  {
    id: "product-2",
    name: "USB-C Charging Cable",
    quantity: 2,
    price: 799,
    image: "/images/product-placeholder.svg",
  },
];

const deliveryAddress = {
  name: "Md Rakib Hasan",
  phone: "+880 1XXX-XXXXXX",
  address: "House 12, Road 5, Mirpur",
  city: "Dhaka",
  postalCode: "1216",
};

const payment = {
  method: "Visa",
  lastFour: "4242",
  subtotal: 5097,
  deliveryFee: 60,
  total: 5157,
};

const orders: Record<OrderState, Order> = {
  delayed: {
    id: "#ORD-2026-0923",
    state: "delayed",
    statusTitle: "Your delivery is delayed",
    statusDescription:
      "We’re sorry. Your package is taking longer than expected.",
    estimatedDelivery: "September 25, 2026",
    estimatedTime: "By 8:00 PM",
    trackingNumber: "TRK-83920145",
    carrier: "Fast Delivery",
    products,
    timeline: baseTimeline,
    deliveryAddress,
    payment,
  },

  "delivered-not-received": {
    id: "#ORD-2026-0923",
    state: "delivered-not-received",
    statusTitle: "Marked as delivered",
    statusDescription:
      "Your package was marked as delivered, but you haven't received it.",
    estimatedDelivery: "September 23, 2026",
    estimatedTime: "Delivered at 4:35 PM",
    trackingNumber: "TRK-83920145",
    carrier: "Fast Delivery",
    products,
    timeline: baseTimeline.map((item) => ({
      ...item,
      status: "completed" as const,
    })),
    deliveryAddress,
    payment,
  },

  "tracking-unavailable": {
    id: "#ORD-2026-0923",
    state: "tracking-unavailable",
    statusTitle: "Tracking unavailable",
    statusDescription:
      "We can't get the latest tracking information right now.",
    estimatedDelivery: "September 25, 2026",
    estimatedTime: "Expected by 8:00 PM",
    trackingNumber: "TRK-83920145",
    carrier: "Fast Delivery",
    products,
    timeline: baseTimeline.map((item, index) => ({
      ...item,
      status:
        index < 2
          ? ("completed" as const)
          : index === 2
            ? ("current" as const)
            : ("pending" as const),
    })),
    deliveryAddress,
    payment,
  },
};

export default orders;