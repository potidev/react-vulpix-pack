"use client"

import React from "react";

import { ColumnDef } from "@tanstack/react-table"
import { Payment } from "../types";

import styles from "./styles.module.scss";
import { cn } from "@/utils";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className={cn.get(styles.amountHeader)}>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);
 
      return <div className={styles.amountCell}>{formatted}</div>
    },
  }
];
