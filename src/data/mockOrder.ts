import { Order, OrderStatus } from "@/types/order";

const products = [
  {
    id: "product-1",
    name: "Wireless Headphones",
    quantity: 1,
    price: 3499,
  },
  {
    id: "product-2",
    name: "USB-C Charging Cable",
    quantity: 2,
    price: 799,
  },
];

const delayedTimeline = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order was successfully placed.",
    date: "Sep 20, 2026",
    time: "10:24 AM",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Order confirmed",
    description: "Your order has been confirmed.",
    date: "Sep 20, 2026",
    time: "11:10 AM",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Shipped",
    description: "Your order has been shipped.",
    date: "Sep 21, 2026",
    time: "08:45 AM",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Delivery delayed",
    description: "The estimated delivery window has passed.",
    date: "Sep 23, 2026",
    time: "09:30 AM",
    status: "current" as const,
  },
  {
    id: "5",
    title: "Delivered",
    description: "Waiting for delivery.",
    date: "Sep 23, 2026",
    time: "—",
    status: "pending" as const,
  },
];

const deliveredTimeline = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order was successfully placed.",
    date: "Sep 20, 2026",
    time: "10:24 AM",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Order confirmed",
    description: "Your order has been confirmed.",
    date: "Sep 20, 2026",
    time: "11:10 AM",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Shipped",
    description: "Your order has been shipped.",
    date: "Sep 21, 2026",
    time: "08:45 AM",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Out for delivery",
    description: "Your order was out for delivery.",
    date: "Sep 23, 2026",
    time: "09:30 AM",
    status: "completed" as const,
  },
  {
    id: "5",
    title: "Delivered",
    description: "Your order was marked as delivered.",
    date: "Sep 23, 2026",
    time: "04:35 PM",
    status: "completed" as const,
  },
];

const unavailableTimeline = [
  {
    id: "1",
    title: "Order placed",
    description: "Your order was successfully placed.",
    date: "Sep 20, 2026",
    time: "10:24 AM",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Order confirmed",
    description: "Your order has been confirmed.",
    date: "Sep 20, 2026",
    time: "11:10 AM",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Tracking information",
    description: "Tracking information is not available yet.",
    date: "—",
    time: "—",
    status: "current" as const,
  },
  {
    id: "4",
    title: "Out for delivery",
    description: "Waiting for tracking information.",
    date: "—",
    time: "—",
    status: "pending" as const,
  },
  {
    id: "5",
    title: "Delivered",
    description: "Waiting for delivery.",
    date: "—",
    time: "—",
    status: "pending" as const,
  },
];

const orders: Record<OrderStatus, Order> = {
  delayed: {
    id: "#ORD-2026-0923",
    status: "delayed",
    statusTitle: "Your delivery is delayed",
    statusDescription:
      "Your estimated delivery time has passed. We’re sorry for the delay.",
    estimatedDelivery: "September 23, 2026",
    estimatedTime: "By 8:00 PM",
    products,
    timeline: delayedTimeline,
  },

  "delivered-not-received": {
    id: "#ORD-2026-0923",
    status: "delivered-not-received",
    statusTitle: "Order marked as delivered",
    statusDescription:
      "The system says your order was delivered, but you reported that you did not receive it.",
    estimatedDelivery: "September 23, 2026",
    estimatedTime: "Delivered at 4:35 PM",
    products,
    timeline: deliveredTimeline,
  },

  "tracking-unavailable": {
    id: "#ORD-2026-0923",
    status: "tracking-unavailable",
    statusTitle: "Tracking information isn't available yet",
    statusDescription:
      "Your order exists, but tracking information is not available yet. Please check again later.",
    estimatedDelivery: "September 25, 2026",
    estimatedTime: "Expected by 8:00 PM",
    products,
    timeline: unavailableTimeline,
  },
};

export default orders;
