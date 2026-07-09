import { useRegisterForm, type RegisterFormData } from "./register-form.eschema";

export const RegisterForm = () => {
  const { handleSubmit, register, errors, isSubmitting } = useRegisterForm();

  const onSubmit = (data: RegisterFormData) => {
    // substituir por chamada de API / lógica de registro
    console.log("register data:", data);
  };

  return (
    <form className="text-black m-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-xs text-gray-600">Nome*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="text"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs text-error mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">Sobrenome*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="text"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-xs text-error mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">E-mail*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-error mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">Senha*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-error mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">Confirmar senha*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-error mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">CPF*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="text"
            {...register("cpf")}
          />
          {errors.cpf && (
            <p className="text-xs text-error mt-1">{errors.cpf.message}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">Data de nascimento*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="date"
            {...register("birthDate")}
          />
          {errors.birthDate && (
            <p className="text-xs text-error mt-1">
              {errors.birthDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-xs text-gray-600">Celular*</label>
          <input
            className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.phone ? "border-error focus:ring-red-300" : "border-border focus:ring-accent"}`}
            type="tel"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-error mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-accent text-white rounded-md font-semibold uppercase mt-4 translate-all hover:bg-accent-hover disabled:opacity-60  cursor-pointer"
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  );
};
