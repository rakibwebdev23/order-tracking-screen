import { Product } from "@/types/order";
import ProductItem from "./ProductItem";

interface OrderSummaryProps {
  products: Product[];
}

export default function OrderSummary({
  products,
}: OrderSummaryProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">
          Order summary
        </h2>

        <span className="text-xs text-slate-500">
          {products.length} products
        </span>
      </div>

      <div className="mt-3 divide-y divide-slate-100">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}