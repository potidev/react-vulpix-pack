import { CursorType } from "@/types/tailwind-cursor";

export class CursorClassName {
  static get = (type: CursorType): string => {
    switch (type) {
      case "auto":
        return "cursor-auto";
      case "pointer":
        return "cursor-pointer";
      case "wait":
        return "cursor-wait";
      case "text":
        return "cursor-text";
      case "move":
        return "cursor-move";
      case "help":
        return "cursor-help";
      case "not-allowed":
        return "cursor-not-allowed";
      case "none":
        return "cursor-none";
      case "context-menu":
        return "cursor-context-menu";
      case "progress":
        return "cursor-progress";
      case "cell":
        return "cursor-cell";
      case "crosshair":
        return "cursor-crosshair";
      case "vertical-text":
        return "cursor-vertical-text";
      case "alias":
        return "cursor-alias";
      case "copy":
        return "cursor-copy";
      case "no-drop":
        return "cursor-no-drop";
      case "grab":
        return "cursor-grab";
      case "grabbing":
        return "cursor-grabbing";
      case "all-scroll":
        return "cursor-all-scroll";
      case "col-resize":
        return "cursor-col-resize";
      case "row-resize":
        return "cursor-row-resize";
      case "n-resize":
        return "cursor-n-resize";
      case "e-resize":
        return "cursor-e-resize";
      case "s-resize":
        return "cursor-s-resize";
      case "w-resize":
        return "cursor-w-resize";
      case "ne-resize":
        return "cursor-ne-resize";
      case "nw-resize":
        return "cursor-nw-resize";
      case "se-resize":
        return "cursor-se-resize";
      case "sw-resize":
        return "cursor-sw-resize";
      case "ew-resize":
        return "cursor-ew-resize";
      case "ns-resize":
        return "cursor-ns-resize";
      case "nesw-resize":
        return "cursor-nesw-resize";
      case "nwse-resize":
        return "cursor-nwse-resize";
      case "zoom-in":
        return "cursor-zoom-in";
      case "zoom-out":
        return "cursor-zoom-out";
      case "default":
      default:
        return "cursor-default";
    }
  };
}
