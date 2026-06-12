import banner from "@/assets/images/banner.jpg";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-126 rounded-3xl mb-10">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={banner}
          alt="Homen sentado com tênis syntaxwear"
        />
        <div className='absolute  w-full bottom-0 flex justify-end items-center text-center px-6 md:px-24 pb-32'>
          <div className='flex flex-col text-white items-center w-97'>
            <h2 className='text-xl font-medium leading-normal tracking-wider mb-2.5' >Krypton One</h2>
            <h1 className='text-2xl leading-9 tracking-widest mb-10'>Transforme qualquer passo em presença.</h1>
            <div className='flex gap-10'>
              <button>Ver Modelos</button>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
