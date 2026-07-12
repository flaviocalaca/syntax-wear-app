import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/currency-format";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContest";
import { CEPForm } from "../../../components/CEPForm";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
  head: ({params}) => {

    console.log(params);
    const filteredProduct = products.find(
      (product) => product.id === Number(params.productId),
    );

    const title = filteredProduct ? filteredProduct.name : "Produto não Encontrado - SyntaxWear";

    const meta = [{ title }];

    return { meta };
  },
});

function RouteComponent() {
  const { addToCart } = useContext(CartContext);
  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  if (!filteredProduct) {
    return (
      <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 flex flex-col justify-center items-center  text-black min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-6">
          O produto que você está procurando não existe ou foi removido.
        </p>
        <Link
          to="/products"
          className="text-accent hover:text-accent-hover hover:underline "
        >
          Voltar para a lista de produtos
        </Link>
      </section>
    );
  }

  const originalPrice = filteredProduct?.price ?? 0;

  const priceWithDiscount = originalPrice * 0.9;
  const inInstallmentsPrice = originalPrice / 3;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 px-4 md:px-10">
      <nav className="text-black text-sm mb-6 md:mb-10 ml-2 md:ml-10">
        <Link to="/" className="hover:underline">Home</Link> /{""}
        <Link to="/products" className="hover:underline ml-1">Produtos</Link> /{""}
        <span className="font-semibold ml-1">{filteredProduct?.name}</span>
      </nav>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-full md:w-125 aspect-square object-cover bg-white rounded-2xl shadow-sm"
        />
        <div className="text-black w-full md:flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{filteredProduct?.name}</h1>
          <p className="mb-4 text-gray-600">Cor: {filteredProduct?.color}</p>
          
          <div className="mb-6">
            <p className="line-through text-sm text-gray-400">
              {formatCurrency(originalPrice)}
            </p>
            <p className="font-bold text-3xl text-primary mb-1">
              {formatCurrency(priceWithDiscount)} <span className="text-lg font-normal text-gray-500">no PIX</span>
            </p>
            <p className="text-xs text-green-600 bg-green-50 inline-block px-2.5 py-0.5 rounded-full font-semibold mb-2">
              Economize 10%
            </p>
            <p className="text-sm text-gray-700">
              ou em até 6x de <span className="font-semibold">{formatCurrency(inInstallmentsPrice)}</span> sem juros
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{filteredProduct?.description}</p>
          
          <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <p className="font-semibold mb-2 text-sm text-gray-700">Calcular frete e prazo</p>
            <CEPForm />
          </div>
          
          <button
            className="bg-black text-white rounded-xl p-4 w-full cursor-pointer hover:bg-gray-800 active:scale-[0.98] transition-all font-semibold shadow-md"
            onClick={() => addToCart(filteredProduct)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
