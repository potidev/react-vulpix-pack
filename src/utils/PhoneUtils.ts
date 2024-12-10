export class PhoneUtils {
  static validate(phone: string) {
    throw new Error("method not implemented");
  }

  static getPhoneNumbers(phone: string) {
    return phone.replace(/\D/g, "");
  }

  static formatPhone(phoneOnlyNumbers: string) {
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    if (!regex.test(phoneOnlyNumbers)) {
      return phoneOnlyNumbers; // Retorna o número original se não estiver no formato esperado
    }
    return phoneOnlyNumbers.replace(regex, "($1) $2-$3");
  }
}