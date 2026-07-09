const menus = [
  { title: "mascolino", itens: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "feminino", itens: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", itens: ["mascolino", "feminino"] },
  { title: "Sobre", itens: ["Quem somos", "Missão"] },
];

export const MenuItens = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, itens }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl">{title}</p>
            </li>
            {itens.map((item) => (
              <li key={`${title}-${item}`}>
                <a
                  className="font-medium hover:text-text-tertiary transition-colors text-xl"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
