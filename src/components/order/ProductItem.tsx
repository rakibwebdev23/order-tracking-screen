import { Package } from "lucide-react";
import { Product } from "@/types/order";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({
  product,
}: ProductItemProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100">
        <Package
          size={22}
          className="text-slate-500"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Quantity: {product.quantity}
        </p>
      </div>

      <p className="text-sm font-semibold text-slate-900">
        ৳{product.price.toLocaleString()}
      </p>
    </div>
  );
}