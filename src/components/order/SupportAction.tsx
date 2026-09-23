"use client";

import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface SupportActionProps {
  onClick: () => void;
}

export default function SupportAction({
  onClick,
}: SupportActionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <MessageCircle
            size={19}
            className="text-slate-700"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold text-slate-950">
            Need help?
          </h2>

          <p className="mt-1 text-sm leading-5 text-slate-500">
            Contact support about your delivery.
          </p>

          <button
            type="button"
            onClick={onClick}
            className="mt-3 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-slate-900 transition hover:border-b hover:border-slate-900 focus:outline-none focus:underline"
          >
            Contact support
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}