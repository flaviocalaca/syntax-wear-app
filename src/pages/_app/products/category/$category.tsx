import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
   head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),
});

function RouteComponent() {
  const { category } = Route.useParams();

  const filteredProducts = products.filter(
    (product) =>
      (product.category?.name ?? "").toLowerCase() === category.toLowerCase(),
  );

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black bg-surface min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center mb-3">Lista de produtos</h1>
      <h2 className="text-center mb-10 p-4 ">
        Conforto expecional para suas aventuras do dia-a-dia
      </h2>

      {filteredProducts.length === 0 ? (
        <>
          <p className="text-center">
            Não encontramos nenhum produto para essa categoria
          </p>
          <Link
            to="/products"
            className="text-accent hover:text-accent-hover hover:underline "
          >
            Voltar para a lista de produtos
          </Link>
        </>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </section>
  );
}
