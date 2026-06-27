type FormatCurrencyOptions = {
  showSymbol?: boolean;
  decimalPlaces?: number;
};

export const formatCurrency = (
  value: number,
  { showSymbol = true, decimalPlaces = 2 }: FormatCurrencyOptions = {}
): string => {
  if (!Number.isFinite(value)) value = 0;

  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);

  return showSymbol ? formatted : formatted.replace("R$", "").trim();
};

export const parseCurrency = (value: string): number => {
  const parsed = Number(
    value
      .replace(/[^\d,-]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );

  return Number.isFinite(parsed) ? parsed : 0;
};
