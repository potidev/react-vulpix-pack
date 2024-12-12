"use client";

import React from "react";
import { ChartConfig } from "../component";

export type ChartContextProps = {
  config: ChartConfig;
}

export const ChartContext = React.createContext<ChartContextProps | null>(null)

export function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}