"use client";

import { ArrowDownFromLine, ArrowUpFromLine, TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart with icons";

const chartData = [
  { month: "January", critical: 186, high: 80, medium: 120 },
  { month: "February", critical: 305, high: 200, medium: 250 },
  { month: "March", critical: 237, high: 120, medium: 160 },
  { month: "April", critical: 73, high: 190, medium: 110 },
  { month: "May", critical: 209, high: 130, medium: 160 },
  { month: "June", critical: 214, high: 140, medium: 180 },
];

const chartConfig = {
  critical: {
    label: "Critical",
    color: "hsl(var(--chart-1))",
    icon: ArrowDownFromLine,
  },
  high: {
    label: "high",
    color: "hsl(var(--chart-2))",
    icon: ArrowUpFromLine,
  },
  medium: {
    label: "medium",
    color: "hsl(var(--chart-3))",
    icon: ArrowUpFromLine,
  },
} satisfies ChartConfig;

function VulnerabilityRadarChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[450px]"
    >
      <RadarChart
        data={chartData}
        margin={{
          top: -40,
          bottom: -10,
        }}
      >
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar
          dataKey="critical"
          fill="hsl(var(--chart-1))"
          fillOpacity={0.6}
        />
        <Radar dataKey="high" fill="hsl(var(--chart-2))" />
        <Radar dataKey="medium" fill="hsl(var(--chart-3))" />
        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
      </RadarChart>
    </ChartContainer>
  );
}

export default VulnerabilityRadarChart;
