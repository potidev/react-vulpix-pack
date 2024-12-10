export class MoneyUtils {
  static formatNumber(input: number, decimalPlaces = 2): string {
    if (isNaN(decimalPlaces) || decimalPlaces < 0) {
      throw new Error("decimalPlaces must be a positive number");
    }

    const formattedString = input.toLocaleString("pt-BR", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    return formattedString;
  }
}