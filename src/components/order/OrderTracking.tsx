"use client";

import { useState } from "react";

import CommonWrapper from "@/components/common/CommonWrapper";
import DeliveryEstimate from "./DeliveryEstimate";
import DeliveryIssue from "./DeliveryIssue";
import OrderStatus from "./OrderStatus";
import OrderSummary from "./OrderSummary";
import StatusSwitcher from "./StatusSwitcher";
import StatusTimeline from "./StatusTimeline";
import SupportAction from "./SupportAction";
import SupportDialog from "./SupportDialog";

import orders from "@/data/mockOrder";
import { OrderStatus as OrderStatusType } from "@/types/order";

export default function OrderTracking() {
  const [status, setStatus] =
    useState<OrderStatusType>("delayed");

  const [supportOpen, setSupportOpen] =
    useState(false);

  const order = orders[status];

  const handleSupport = () => {
    setSupportOpen(true);
  };

  const handleDeliveryIssue = () => {
    alert("Delivery issue report selected.");
  };

  return (
    <CommonWrapper>
      <header className="mb-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Order tracking
        </p>

        <div className="mt-1 flex items-center justify-between gap-4">
          <h1 className="text-xl font-bold tracking-tight text-slate-950">
            {order.id}
          </h1>
        </div>
      </header>

      <StatusSwitcher
        value={status}
        onChange={setStatus}
      />

      <div className="mt-5 space-y-4">
        <OrderStatus
          status={order.status}
          title={order.statusTitle}
          description={order.statusDescription}
        />

        <DeliveryEstimate
          date={order.estimatedDelivery}
          time={order.estimatedTime}
        />

        <StatusTimeline
          items={order.timeline}
        />

        <OrderSummary
          products={order.products}
        />

        {status === "delivered-not-received" && (
          <DeliveryIssue
            onClick={handleDeliveryIssue}
          />
        )}

        {status === "delayed" && (
          <SupportAction
            onClick={handleSupport}
          />
        )}

        {status === "tracking-unavailable" && (
          <SupportAction
            onClick={handleSupport}
          />
        )}
      </div>

      <SupportDialog
        open={supportOpen}
        onOpenChange={setSupportOpen}
      />
    </CommonWrapper>
  );
}