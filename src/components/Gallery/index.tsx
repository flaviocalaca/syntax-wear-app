import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import tenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import modelo from "@/assets/images/galeria-modelo.jpg";
import tenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import tenisBrancoPreto from "@/assets/images/tenis-branco-e-preto.jpg";
import tenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";

import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { useRouter } from "@tanstack/react-router";

type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  className: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "highlight",
    image: galeriaHomem,
    alt: "Modelo masculino usando peças da coleção Syntax Wear",
    className:
      "order-1 col-span-2 row-span-2 md:order-1 md:col-span-6 md:row-span-2",
  },
  {
    id: "sneaker-white",
    image: tenisBrancoPreto,
    alt: "Tênis branco e preto da coleção Syntax Wear",
    className: "order-2 col-span-2 md:order-5 md:col-span-6 md:row-span-1",
  },
  {
    id: "model",
    image: modelo,
    alt: "Modelo feminina usando peças da coleção Syntax Wear",
    className:
      "order-3 col-span-1 row-span-2 md:order-3 md:col-span-3 md:row-span-2",
  },
  {
    id: "sneaker-color",
    image: tenisColorido,
    alt: "Tênis colorido com detalhes vibrantes",
    className: "order-4 col-span-1 md:order-4 md:col-span-3 md:row-span-1",
  },
  {
    id: "sneaker-silver",
    image: tenisCinza,
    alt: "Tênis cinza da coleção Syntax Wear",
    className: "order-5 col-span-1 md:order-6 md:col-span-3 md:row-span-1",
  },
  {
    id: "sneaker-purple",
    image: tenisRoxo,
    alt: "Tênis roxo com acabamento texturizado",
    className: "order-6 col-span-2 md:order-2 md:col-span-6 md:row-span-1",
  },
];

export const Gallery = () => {
  const router = useRouter();
  return (
    <section className="container mb-10">
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-12 md:auto-rows-[300px] md:gap-7.5">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-[20px] ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover"
            />

            {item.id === "highlight" && (
              <>
                <div className="absolute inset-0 bg-black/20" />
                <Overlay
                  title="Kripton One"
                  subtitle="Estilo urbano com atitude"
                  classname="inset-0   justify-center"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      router.navigate({
                        to: "/products/category/$category",
                        params: { category: 'masculino' },
                      })
                    }
                  >
                    Masculino
                  </Button>
                  <Button variant="secondary" size="sm"
                  onClick={() =>
                      router.navigate({
                        to: "/products/category/$category",
                        params: { category: 'feminino' },
                      })
                    }
                  >
                    Feminino
                  </Button>
                </Overlay>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
