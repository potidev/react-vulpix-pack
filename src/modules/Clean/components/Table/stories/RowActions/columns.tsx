"use client"

import React from "react";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Payment } from "../types";

import styles from "./styles.module.scss";
import { cn } from "@/utils";

import { Button } from "../../../Button";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../DropdownMenu";

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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenuRoot>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" style={{ padding: 0, width: 32, height: 32 }}>
              <span className={styles.openMenuText}>Open menu</span>
              <MoreHorizontal style={{ padding: 0, width: 16, height: 16 }} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      )
    },
  },
];
