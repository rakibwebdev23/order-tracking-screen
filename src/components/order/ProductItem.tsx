import Image from "next/image";
import { Product } from "@/types/order";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex gap-3 py-3 first:pt-0 last:pb-0">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-slate-900">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Qty: {product.quantity}
        </p>
      </div>

      <p className="text-sm font-semibold text-slate-900">
        ৳{product.price.toLocaleString()}
      </p>
    </div>
  );
}