interface NameParts {
  firstName: string;
  lastName: string;
}

export class NameUtils {
  static formatFullName(name: string) {
    const nameArray = name.trim().toLocaleLowerCase().split(" ");
    let formattedName = "";

    for (let i = 0; i < nameArray.length; i++) {
      let word = nameArray[i];

      if (word.length <= 2) {
        word = word.charAt(0).toLowerCase() + word.slice(1);
      } else {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      formattedName += word + " ";
    }

    formattedName = formattedName.trim();
    return formattedName;
  }

  static getNameParts(fullName: string): NameParts {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    return {
      firstName,
      lastName,
    };
  }

  static isValidFullName(fullName: string) {
    const nameParts = fullName.trim().split(" ");
    return nameParts.length > 1;
  }
}