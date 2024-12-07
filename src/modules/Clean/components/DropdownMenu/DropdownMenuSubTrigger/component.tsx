"use client";

import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

import itemStyles from "../item.module.scss";
import styles from "./styles.module.scss";

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn.get(
      itemStyles.dropdownItem,
      inset && styles.inset,
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export { DropdownMenuSubTrigger };