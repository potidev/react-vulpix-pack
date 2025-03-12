import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign } from "lucide-react"
import { useTheme } from "next-themes"

import { SimpleChartCard } from '../component';
import { SimpleChartCardProps } from '../types';
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { baseColors } from "../../../../registry/registry-base-colors"
import { defaultDatsExemple } from "./DefaultDataExemple";

const meta: Meta<SimpleChartCardProps> = {
  title: 'Kit/Stats/SimpleChartCard',
  component: SimpleChartCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: "text",
    },
    title: {
      control: "text",
    },
  },
  decorators: (Story) => {
    return (
      <div className="flex flex-row justify-center items-center w-screen">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<SimpleChartCardProps>;


export const Default: Story = {
  render: () => {
    const { theme: mode } = useTheme()

    const baseColor = baseColors.find(
      (baseColor) => baseColor.name === "zinc"
    );

    return (
      <SimpleChartCard
        title="Exercise Minutes"
        description="Your exercise minutes are ahead of where you normally are."
        icon={<DollarSign />}
        className="w-[550px]"
      >
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={defaultDatsExemple}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span className="font-bold">
                              {payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  return null
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="average"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    opacity: 0.25,
                    "--theme-primary": `hsl(${
                      baseColor?.cssVars[mode === "dark" ? "dark" : "light"]
                        .primary
                    })`,
                  } as React.CSSProperties
                }
              />
              <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: { fill: "var(--theme-primary)" },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    "--theme-primary": `hsl(${
                      baseColor?.cssVars[mode === "dark" ? "dark" : "light"]
                        .primary
                    })`,
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SimpleChartCard>
    )
  }
};
