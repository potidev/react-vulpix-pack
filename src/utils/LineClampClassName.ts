export class LineClampClassName {
  static get(value: number) {
    switch(value) {
      case 1: return "line-clamp-1";
      case 2: return "line-clamp-2"
      case 3: return "line-clamp-3";
      case 4: return "line-clamp-4";
      case 5: return "line-clamp-5";
      case 6: return "line-clamp-6";
      default: return "line-clamp-none"
    }
  }
} 