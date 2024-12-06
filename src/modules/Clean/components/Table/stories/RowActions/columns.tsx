"use client"

import React from "react";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Payment } from "../types";

import styles from "./styles.module.scss";
import { cn } from "@/utils";

import { Button } from "../../../Button";
import { DropdownMenu } from "../../../DropdownMenu";

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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>Actions</DropdownMenu.Label>
            <DropdownMenu.Item
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>View customer</DropdownMenu.Item>
            <DropdownMenu.Item>View payment details</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )
    },
  },
];
