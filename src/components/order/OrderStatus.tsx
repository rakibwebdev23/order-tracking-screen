import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
} from "lucide-react";
import { OrderStatus as OrderStatusType } from "@/types/order";

interface OrderStatusProps {
  status: OrderStatusType;
  title: string;
  description: string;
}

export default function OrderStatus({
  status,
  title,
  description,
}: OrderStatusProps) {
  const Icon =
    status === "delayed"
      ? AlertTriangle
      : status === "delivered-not-received"
        ? CheckCircle2
        : CircleHelp;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <Icon
            size={24}
            className="text-slate-800"
          />
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            Current status
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}