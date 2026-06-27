import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/currency-format";
import { Button } from "../../../components/Button";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  const originalPrice = filteredProduct?.price ?? 0;

  const priceWithDiscount = originalPrice * 0.9;
  const inInstallmentsPrice = originalPrice / 3;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 ">
      <nav className="text-black text-sm mb-15 ml-10 ">
        <Link to="/">Home</Link> /{""}
        <Link to="/products">Produtos</Link> /{""}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>
      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-125 bg-white rounded-2xl"
        />
        <div className="text-black">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>
          <p className="mb-2">Cor: {filteredProduct?.color}</p>
          <p className="line-through text-sm text-[#878787">
            R{formatCurrency(originalPrice)}
          </p>
          <p className="font-bold text-3xl mb-2">
            {formatCurrency(priceWithDiscount)} no PIX
          </p>
          <p className="text-sm text-[#878787]">
            Você ecomomiza: <span className="font-semibold">10%</span>
          </p>
          <p className="mb-2">
            <span className="text-[#38373A] font-semibold">ou em até{""}</span>{" "}
            6X de{" "}
            <span className="text-[#38373A] font-semibold">
              {formatCurrency(inInstallmentsPrice)}
            </span>
          </p>
          <p className="max-w-125 my-5">{filteredProduct?.description}</p>
          <div className="mb-6">
            <p>Calcular frete</p>
            <form className="flex gap-3">
              <input
                type="text"
                placeholder="digite seu CEP"
                className="border border-[#c0c0c0] rounded-2xl p-3"
              />
              <Button variant="primary" size="lg">
                Calcular
              </Button>
            </form>
          </div>
          <Button variant="primary" size="lg" className="w-full">
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </section>
  );
}
