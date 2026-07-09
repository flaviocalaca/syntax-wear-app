import { createFileRoute } from "@tanstack/react-router";
import ourStoresManner from "@/assets/images/banner-our-stores.png";
import ourStoresImg1 from "@/assets/images/loja-1.png";
import ourStoresImg2 from "@/assets/images/loja-2.png";

export const Route = createFileRoute("/_app/our-stores/")({
  component: RouteComponent,
   head: () => ({
    meta: [{ title: "Nossas Lojas - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="container py-6">
      <img
        className="rounded-[20px] h-80 md:h-125 object-cover w-full"
        src={ourStoresManner}
        alt="banner interior da loja, com tênis dispostos "
      />

      <div>
        <h1 className="text-black text-2xl max-w-7xl m-auto my-20 text-center">
          Nossas lojas são o coração da nossa marca. Explore a coleção mais
          recente, experimente seus modelos favoritos e sinta o conforto da
          SyntaxWear pessoalmente.
        </h1>
        <section className="text-black w-full space-y-10">
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <div className='text-center py-6'>
              <h2 className='text-3xl mb-5'>Novidades ao vivo</h2>
              <p>
                descubra os Lançamentos da temporada antes de todo mundo e
                experimente nossos estilos mais recentes de perto.
              </p>
            </div>
            <img className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full" src={ourStoresImg1} alt="imagem de um tenis da loja" />
          </div>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <img className="rounded-[20px] md:max-w-[42vw] aspect-10/7 object-cover size-full" src={ourStoresImg2} alt="imagem de um tenis da loja" />
            <div className='text-center py-6 px-3'>
              <h2 className='text-3xl mb-5'>Atendimento personalizado</h2>
              <p>
                Conte com dicas de estilo, sugestões exclusivas e suporte personalizado de quem realmente entende de moda.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
