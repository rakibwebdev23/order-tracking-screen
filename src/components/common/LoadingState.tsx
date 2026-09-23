import { LoaderCircle } from "lucide-react";

export default function LoadingState() {
  return (
    <div
      className="flex min-h-[300px] items-center justify-center"
      role="status"
      aria-label="Loading order information"
    >
      <div className="flex flex-col items-center gap-3">
        <LoaderCircle
          size={28}
          className="animate-spin text-slate-700"
        />

        <p className="text-sm text-slate-500">
          Loading order information...
        </p>
      </div>
    </div>
  );
}