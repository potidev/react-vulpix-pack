import { cpf, cnpj } from "cpf-cnpj-validator";

export class DocumentUtils {
  static isValidCPF = (cpfNumber: string) => cpf.isValid(cpfNumber);
  static isValidCNPJ = (cnpjNumber: string) => cnpj.isValid(cnpjNumber);
}