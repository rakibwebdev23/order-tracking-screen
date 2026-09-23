import { Check } from "lucide-react";
import { TimelineItem } from "@/types/order";

interface StatusTimelineProps {
  items: TimelineItem[];
}

export default function StatusTimeline({
  items,
}: StatusTimelineProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-950">
        Delivery progress
      </h2>

      <div className="mt-6">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <div
              key={item.id}
              className="flex gap-3"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                    item.status === "completed"
                      ? "border-slate-900 bg-slate-900 text-white"
                      : item.status === "current"
                        ? "border-slate-900 bg-white text-slate-900"
                        : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  {item.status === "completed" ? (
                    <Check
                      size={16}
                      strokeWidth={2.5}
                    />
                  ) : (
                    <span className="h-2.5 w-2.5 rounded-full bg-current" />
                  )}
                </div>

                {!last && (
                  <div
                    className={`h-12 w-px ${
                      item.status === "completed"
                        ? "bg-slate-900"
                        : "bg-slate-200"
                    }`}
                  />
                )}
              </div>

              <div className="pb-6 last:pb-0">
                <h3
                  className={`text-sm font-semibold ${
                    item.status === "pending"
                      ? "text-slate-400"
                      : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.date} · {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}