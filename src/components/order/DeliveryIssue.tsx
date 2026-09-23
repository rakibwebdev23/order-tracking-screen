import { AlertCircle, ArrowRight } from "lucide-react";

interface DeliveryIssueProps {
  onClick: () => void;
}

export default function DeliveryIssue({
  onClick,
}: DeliveryIssueProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
          <AlertCircle
            size={19}
            className="text-slate-700"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-base font-semibold text-slate-950">
            Delivery issue?
          </h2>

          <p className="mt-1 text-sm leading-5 text-slate-500">
            Report a problem with your delivery.
          </p>

          <button
            type="button"
            onClick={onClick}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 focus:outline-none focus:underline"
          >
            Report delivery issue
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}