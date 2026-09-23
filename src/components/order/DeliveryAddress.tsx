import { MapPin, Phone } from "lucide-react";
import SectionCard from "@/components/common/SectionCard";
import { DeliveryAddress as DeliveryAddressType } from "@/types/order";

interface DeliveryAddressProps {
  address: DeliveryAddressType;
}

export default function DeliveryAddress({
  address,
}: DeliveryAddressProps) {
  return (
    <SectionCard>
      <h2 className="mb-4 text-base font-semibold text-slate-900">
        Delivery address
      </h2>

      <div className="flex gap-3">
        <MapPin className="mt-0.5 shrink-0 text-slate-500" size={18} />

        <div>
          <p className="text-sm font-medium text-slate-900">
            {address.name}
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            {address.address}, {address.city} - {address.postalCode}
          </p>

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <Phone size={14} />
            {address.phone}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}