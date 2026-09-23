import { ArrowLeft, MoreVertical } from "lucide-react";
import IconButton from "../common/IconButton";

interface OrderHeaderProps {
  orderId: string;
}

export default function OrderHeader({ orderId }: OrderHeaderProps) {
  return (
    <header className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <IconButton aria-label="Go back">
          <ArrowLeft size={20} />
        </IconButton>

        <div>
          <p className="text-xs text-slate-500">Order</p>
          <h1 className="text-base font-semibold text-slate-900">
            {orderId}
          </h1>
        </div>
      </div>

      <IconButton aria-label="More options">
        <MoreVertical size={20} />
      </IconButton>
    </header>
  );
}