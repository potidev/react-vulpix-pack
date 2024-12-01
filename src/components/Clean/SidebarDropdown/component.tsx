"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MdOutlineKeyboardArrowDown as Arrow } from "react-icons/md";

import { cn } from "@/utils/ClassNameUtils";
import { useSidebarDropdownContext } from "@/contexts/Clean/SidebarDropdownProvider";

import { SidebarDropdownProps } from "./types";
import styles from './styles.module.scss';
import { SidebarDropdownItem } from "../SidebarDropdownItem/component";
import sharedStyles from '../SidebarItem/shared.module.scss';
import { useSidebarContext } from "@/contexts/Clean/SidebarProvider";
import { Span } from "@/components/Common/Span";

export const SidebarDropdown = ({ className, title, icon, options = [], openId }: SidebarDropdownProps) => {
  const [open, setOpen] = useState(false);
  const { currentOpenId, setCurrentOpenId, singleOpen } = useSidebarDropdownContext();
  const { openSidebar, sidebarIsOpen } = useSidebarContext();

  const openFinalState = useMemo(() => {
    if(singleOpen !== undefined && singleOpen === true) {
      if(openId && currentOpenId !== undefined && currentOpenId === openId) {
        return true;
      }
      return false;
    }
    return open;
  }, [currentOpenId, open])

  const openClass = useMemo(() => openFinalState ? { submenuOpenClass: styles.show, arrowOpenClass: styles.rotateArrow } : undefined, [openFinalState])

  const handleOnClick = () => {
    openSidebar(true);

    if(singleOpen !== undefined && singleOpen === true && openId && setCurrentOpenId) {
      setCurrentOpenId(openId);
      return;
    } 

    setOpen((state) => !state);
  }

  useEffect(() => {
    if(sidebarIsOpen === false) {
      if(singleOpen !== undefined && singleOpen === true && openId && setCurrentOpenId) {
        setCurrentOpenId(undefined);
        return;
      } 
  
      setOpen(false);
    }
  }, [sidebarIsOpen]);

  return (
    <li className={cn.get(styles.container, className)}>
      <button className={cn.get(styles.dropdownButton, sharedStyles.sidebarItemContainer)} onClick={handleOnClick}>
        <div className={cn.get(sharedStyles.icon)}>
          {icon}
        </div>
        <Span size="small" className={styles.title}>
          {title}
        </Span>
        <div className={cn.get(sharedStyles.icon, styles.arrow, openClass?.arrowOpenClass)}>
          <Arrow />
        </div>
      </button>
      <ul className={cn.get(styles.submenu, openClass?.submenuOpenClass)}>
        <div>
          {
            options.length > 0 && options.map((option, index) => (
              <SidebarDropdownItem {...option} />
            ))
          }
        </div>
      </ul>
    </li>
  );
};