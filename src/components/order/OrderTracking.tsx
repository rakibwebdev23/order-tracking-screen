"use client";

import { useState } from "react";
import { Headphones } from "lucide-react";
import CommonWrapper from "@/components/common/CommonWrapper";
import DeliveryEstimate from "./DeliveryEstimate";
import DeliveryIssue from "./DeliveryIssue";
import OrderSummary from "./OrderSummary";
import StatusSwitcher from "./StatusSwitcher";
import StatusTimeline from "./StatusTimeline";
import SupportAction from "./SupportAction";
import SupportDialog from "./SupportDialog";
import orders from "@/data/mockOrder";
import { OrderStatus as OrderStatusType } from "@/types/order";

export default function OrderTracking() {
  const [status, setStatus] = useState<OrderStatusType>("delayed");
  const [supportOpen, setSupportOpen] = useState(false);
  const order = orders[status];

  return (
    <CommonWrapper className="tracking-shell">
      <header className="topbar">
        <a className="brand" href="#">Order tracking</a>
        <button className="help-link" onClick={() => setSupportOpen(true)}>
          <Headphones size={16} /> Contact support
        </button>
      </header>

      <div className="page-heading">
        <div>
          <p className="eyebrow">ORDER DETAILS</p>
          <h1>Track your order</h1>
        </div>
        <div className="order-ref"><span>ORDER NUMBER</span><strong>{order.id}</strong></div>
      </div>

      <StatusSwitcher value={status} onChange={setStatus} />

      <div className="tracking-grid">
        <div className="main-column">
          <section className="status-card">
            <div className="status-card-heading">
              <span className={`status-indicator ${status}`} />
              <span>{status === "delivered-not-received" ? "DELIVERED" : status === "tracking-unavailable" ? "TRACKING UPDATE" : "DELIVERY UPDATE"}</span>
            </div>
            <h2>{order.statusTitle}</h2>
            <p>{order.statusDescription}</p>
          </section>

          <StatusTimeline items={order.timeline} />
          <OrderSummary products={order.products} />
        </div>

        <aside className="side-column">
          <DeliveryEstimate date={order.estimatedDelivery} time={order.estimatedTime} />
          {status === "delivered-not-received" ? (
            <DeliveryIssue onClick={() => setSupportOpen(true)} />
          ) : (
            <SupportAction onClick={() => setSupportOpen(true)} />
          )}
        </aside>
      </div>

      <footer className="page-footer"><span>Order {order.id}</span><button onClick={() => setSupportOpen(true)}>Contact support</button></footer>
      <SupportDialog open={supportOpen} onOpenChange={setSupportOpen} />
    </CommonWrapper>
  );
}
