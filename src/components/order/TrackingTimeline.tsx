import { CalendarDays, Clock3 } from "lucide-react";
import SectionCard from "@/components/common/SectionCard";

interface DeliveryEstimateProps {
  date: string;
  time: string;
}

export default function DeliveryEstimate({
  date,
  time,
}: DeliveryEstimateProps) {
  return (
    <SectionCard>
      <h2 className="mb-4 text-sm font-semibold text-slate-900">
        Delivery estimate
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <CalendarDays size={18} className="mb-2 text-slate-600" />
          <p className="text-xs text-slate-500">Date</p>
          <p className="mt-1 text-sm font-medium text-slate-900">{date}</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <Clock3 size={18} className="mb-2 text-slate-600" />
          <p className="text-xs text-slate-500">Time</p>
          <p className="mt-1 text-sm font-medium text-slate-900">{time}</p>
        </div>
      </div>
    </SectionCard>
  );
}