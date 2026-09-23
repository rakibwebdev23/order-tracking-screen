"use client";

import { OrderStatus } from "@/types/order";

interface StatusSwitcherProps {
  value: OrderStatus;
  onChange: (value: OrderStatus) => void;
}

const options: {
  label: string;
  value: OrderStatus;
}[] = [
  {
    label: "Delayed",
    value: "delayed",
  },
  {
    label: "Not received",
    value: "delivered-not-received",
  },
  {
    label: "Tracking unavailable",
    value: "tracking-unavailable",
  },
];

export default function StatusSwitcher({
  value,
  onChange,
}: StatusSwitcherProps) {
  return (
    <section className="mt-5">
      <p className="mb-2 text-xs font-medium text-slate-500">
        Preview order status
      </p>

      <div className="flex gap-2 overflow-x-auto p-2">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer ${
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
