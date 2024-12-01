"use client";

import React, { useMemo } from "react";

import { cn } from "@/utils/ClassNameUtils";
import { SidebarControlButton } from "../SidebarControlButton/component";

import { SidebarHeaderProps } from "./types";
import styles from './styles.module.scss';
import sharedStyles from '../SidebarItem/shared.module.scss';
import { useSidebarContext } from "@/contexts/Clean/SidebarProvider";
import { Span } from "@/components/Common/Span";

export const SidebarHeader = ({ className, title, usingToolbar = false, logo }: SidebarHeaderProps) => {
  const { sidebarIsOpen } = useSidebarContext();

  const usingToolbarContainerClass = useMemo(() => usingToolbar ? styles.usingToolbarContainer : undefined, [usingToolbar])
  const usingToolbarButtonClass = useMemo(() => usingToolbar ? styles.usingToolbarButton : undefined, [usingToolbar])

  const closeContainerUsingToolbarClass = useMemo(() => sidebarIsOpen === false && usingToolbar === true ?  styles.closeContainerUsingToolbar : undefined, [sidebarIsOpen, usingToolbar])

  return (
    <li className={cn.get(styles.container,  className, usingToolbarContainerClass, closeContainerUsingToolbarClass)}>
      {title || logo ? ( 
        <div className={cn.get(sharedStyles.sidebarItemContainer)}>
          {logo}
          {title && <Span size="small" className={cn.get(styles.title)}>{title}</Span>}
        </div>
      ) : null}
      <SidebarControlButton className={cn.get(styles.button, usingToolbarButtonClass)} />
    </li>
  );
};