import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign } from "lucide-react"
import { useTheme } from "next-themes"

import { SimpleStatsCard } from '../component';
import { SimpleStatsCardProps } from '../types';
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { baseColors } from "../../../../registry/registry-base-colors"
import { lineChartDataExemple } from "./LineChartDataExemple";

const meta: Meta<SimpleStatsCardProps> = {
  title: 'Shadcn UI/Kit/Stats/SimpleStatsCard',
  component: SimpleStatsCard,
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
    value: {
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
type Story = StoryObj<SimpleStatsCardProps>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: <DollarSign />,
    className: "w-[250px]"
  },
};


export const WithLineChart: Story = {
  render: () => {
    const { theme: mode } = useTheme()

    const baseColor = baseColors.find(
      (baseColor) => baseColor.name === "zinc"
    );

    console.log(baseColor);
    console.log(lineChartDataExemple);

    return (
      <SimpleStatsCard
        title="Total Revenue"
        value="$15,231.89"
        description="+20.1% from last month"
        icon={<DollarSign />}
        className="w-[250px]"
      >
        <div className="h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineChartDataExemple}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="revenue"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "var(--theme-primary)",
                    "--theme-primary": `hsl(${baseColor?.cssVars[mode === "dark" ? "dark" : "light"].primary })`,
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SimpleStatsCard>
    )
  }
};
