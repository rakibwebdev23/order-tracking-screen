import { CalendarDays, Clock3 } from "lucide-react";

interface DeliveryEstimateProps {
  date: string;
  time: string;
}

export default function DeliveryEstimate({
  date,
  time,
}: DeliveryEstimateProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-950">
        Estimated delivery
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <CalendarDays
            size={18}
            className="text-slate-600"
          />

          <p className="mt-3 text-xs text-slate-500">
            Date
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {date}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <Clock3
            size={18}
            className="text-slate-600"
          />

          <p className="mt-3 text-xs text-slate-500">
            Time
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {time}
          </p>
        </div>
      </div>
    </section>
  );
}