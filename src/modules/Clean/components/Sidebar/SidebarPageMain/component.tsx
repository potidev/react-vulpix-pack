"use client";

import React, { useMemo } from "react";

import { cn } from "@/utils/ClassNameUtils";

import { SidebarPageMainProps } from "./types";
import styles from './styles.module.scss';
import { useSidebarContext } from "@/modules/Clean/contexts/SidebarProvider";

export const SidebarPageMain = ({ className, children, fixedHeader, fixedHeaderOnlyOnMobile, defaultToolbarPadding = false, defaultContentPadding = false }: SidebarPageMainProps) => {
  const { sidebarIsOpen } = useSidebarContext();
  
  const containerOnOpenClass = useMemo(() => sidebarIsOpen ? styles.containerOnOpen : undefined, [sidebarIsOpen]);
  const fixedHeaderOnOpenClass = useMemo(() => !sidebarIsOpen ? styles.fixedHeaderOpen : undefined, [sidebarIsOpen]);

  const defaultToolbarPaddingClass = defaultToolbarPadding ? styles.defaultToolbarPadding : undefined;
  const defaultPaddingClass = defaultContentPadding ? styles.defaultPadding : undefined;

  return (
    <div className={cn.get(styles.container, defaultToolbarPaddingClass, className)}>
      {
        fixedHeader && (
          <header className={cn.get(styles.fixedHeader, fixedHeaderOnOpenClass)}>
            {fixedHeader}
          </header>
        )
      }
      {
        fixedHeaderOnlyOnMobile && (
          <header className={cn.get(styles.fixedHeader, styles.mobileHeader)}>
            {fixedHeaderOnlyOnMobile}
          </header>
        )
      }
      <div className={cn.get(containerOnOpenClass, defaultPaddingClass)}>
        {children}
      </div>
    </div>
  );
};