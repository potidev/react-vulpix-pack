import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign, TrendingUp } from "lucide-react"
import { useTheme } from "next-themes"

import { StatisticCard, StatisticCardProps } from '../component';
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { baseColors } from "../../../../registry/registry-base-colors"
import { lineChartDataExemple } from "./LineChartDataExemple";

const meta: Meta<StatisticCardProps> = {
  title: 'Kit/Stats/StatisticCard',
  component: StatisticCard,
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
      <div className="flex flex-row justify-center items-center w-full">
        <Story />
      </div>
    )
  }
};

export default meta;
type Story = StoryObj<StatisticCardProps>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$1,250.00",
    valueDescription: "/ Per day",
    description: "Visitors for the last 6 months",
    icon: DollarSign,
    className: "w-full max-w-[385px]",
    label: "Trending up this month",
    labelIcon: TrendingUp,
    badge: "+12.5%",
    badgeLeftIcon: TrendingUp,
  },
};

export const Basic: Story = {
  args: {
    title: "Total Revenue",
    value: "$1,250.00",
    icon: DollarSign,
  },
};

export const BasicWithDescription: Story = {
  args: {
    title: "Total Revenue",
    value: "$1,250.00",
    icon: DollarSign,
    description: "Visitors for the last 6 months"
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
      <StatisticCard
        title="Total Revenue"
        value="$1,250.00"
        valueDescription="/ Per day"
        label="Trending up this month"
        labelIcon={TrendingUp}
        description="Visitors for the last 6 months"
        icon={DollarSign}
        className="w-[385px]"
      >
        <div className="h-20">
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
      </StatisticCard>
    )
  }
};
