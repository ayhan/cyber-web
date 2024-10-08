import { ArrowDownFromLine, ArrowUpFromLine } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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
  { month: "Code", critical: 150, high: 280, medium: 270 },
  { month: "OSS", critical: 250, high: 280, medium: 220 },
  { month: "Ai", critical: 150, high: 280, medium: 270 },
  { month: "Container", critical: 150, high: 280, medium: 200 },
  { month: "Other", critical: 200, high: 280, medium: 220 },
  { month: "All", critical: 160, high: 280, medium: 250 },
];

const chartConfig = {
  critical: {
    label: "Critical",
    color: "hsl(var(--critical-red))",
    icon: ArrowDownFromLine,
  },
  high: {
    label: "high",
    color: "hsl(var(--high-orange))",
    icon: ArrowUpFromLine,
  },
  medium: {
    label: "medium",
    color: "hsl(var(--medium-yellow))",
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
          fill="hsl(var(--critical-red))"
          fillOpacity={0.9}
        />
        <Radar
          dataKey="high"
          fill="hsl(var(--high-orange))"
          fillOpacity={0.3}
        />
        <Radar
          dataKey="medium"
          fill="hsl(var(--medium-yellow))"
          fillOpacity={0.5}
        />
        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
      </RadarChart>
    </ChartContainer>
  );
}

export default VulnerabilityRadarChart;
