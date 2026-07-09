import { createFileRoute, Link } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcom from "@/assets/google-icon.png";
import { Separator } from '../../components/Separator';

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
   head: () => ({
    meta: [{ title: "Entrar - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="text-black bg-surface min-h-screen w-full flex justify-center items-center p-5">
      <div className="w-112.5 bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />
          <p className="text-black font-bold text-[21px] mb-2">Entrar</p>
          <p className="mb-3">Escolha como fazer login</p>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <img className="w-5 h-5" src={GoogleIcom} alt="Icone do google" />
            <span className="text-sm font-medium text-black">
              Entrar com o Google
            </span>
          </button>
          <Separator />
          <LoginForm />
          <p className="text-sm text-gray-600 mt-6 text-center">
          Ainda não possui uma conta? {" "}
          <Link to="/sign-up"
            className="font-medium text-accent hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
        </div>
      </div>
    </section>
  );
}
