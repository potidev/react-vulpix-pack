"use client";

export class ScrollUtils {
  static disablePageScroll() {
    document.body.style.overflow = "hidden";
  }

  static enablePageScroll() {
    document.body.style.overflow = "auto";
  }
}