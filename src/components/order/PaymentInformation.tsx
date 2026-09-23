import SectionCard from "@/components/common/SectionCard";
import { PaymentInformation as PaymentType } from "@/types/order";

interface PaymentInformationProps {
  payment: PaymentType;
}

export default function PaymentInformation({
  payment,
}: PaymentInformationProps) {
  return (
    <SectionCard>
      <h2 className="mb-4 text-base font-semibold text-slate-900">
        Payment information
      </h2>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-slate-600">
          {payment.method}
          {payment.lastFour && ` •••• ${payment.lastFour}`}
        </span>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          Paid
        </span>
      </div>

      <div className="space-y-2 border-t border-slate-100 pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">Subtotal</span>
          <span>৳{payment.subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Delivery fee</span>
          <span>৳{payment.deliveryFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between border-t border-slate-100 pt-3 font-semibold">
          <span>Total</span>
          <span>৳{payment.total.toLocaleString()}</span>
        </div>
      </div>
    </SectionCard>
  );
}