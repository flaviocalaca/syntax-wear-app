import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "../../components/RegisterForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import GoogleIcom from "@/assets/google-icon.png";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
   head: () => ({
    meta: [{ title: "Cadastre-se - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#F5F5F5] p-5'>
      <div className='w-122 bg-white rounded-2xl p-5 flex flex-col '>
        <Logo />
        <RegisterForm />
        <Separator />

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
          <img className="w-5 h-5" src={GoogleIcom} alt="Icone do google" />
          <span className="text-sm font-medium text-black">
            Entrar com o Google
          </span>
        </button>
        <p className="text-sm text-gray-600 mt-6 text-center">
          Já possui uma conta?
          <a
            href="/sign-in"
            className="font-medium text-[#6329A2] hover:underline"
          >
            Entre
          </a>
        </p>
      </div>
    </section>
  );
}
