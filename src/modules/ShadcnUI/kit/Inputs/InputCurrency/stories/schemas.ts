import z from "zod";

const inputCurrencyExempleSchema = z.object({
  value: z.coerce.number().min(0.01, "Min value in 0.01"),
});

export { inputCurrencyExempleSchema };
