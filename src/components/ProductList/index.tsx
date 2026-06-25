import type { product } from '../../assets/interfaces/product';
import { ProductCard } from "../ProductCard";


type ProductListProps = {
  products: product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
