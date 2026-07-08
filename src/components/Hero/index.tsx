import banner from "@/assets/images/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { useRouter } from "@tanstack/react-router";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="container">
      <section className="relative h-126 rounded-3xl mb-10">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={banner}
          alt="Homen sentado com tênis syntaxwear"
        />
        <Overlay
          title="Kripton One"
          subtitle="Transforme qualquer passo em presença"
          classname="bottom-0  justify-end px-6 pb-32  md:px-24 md:items-end"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.navigate({ to: "/products" })}
          >
            Ver modelos
          </Button>
          <Button variant="primary" size="sm">
            Comprar
          </Button>
        </Overlay>
      </section>
    </div>
  );
};
