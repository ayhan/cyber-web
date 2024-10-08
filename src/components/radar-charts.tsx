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
  { month: "Code", critical: 186, high: 80, medium: 120 },
  { month: "OSS", critical: 305, high: 200, medium: 250 },
  { month: "Ai", critical: 237, high: 120, medium: 160 },
  { month: "Container", critical: 73, high: 190, medium: 110 },
  { month: "Other", critical: 209, high: 130, medium: 160 },
  { month: "All", critical: 214, high: 140, medium: 180 },
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
          fillOpacity={0.6}
        />
        <Radar dataKey="high" fill="hsl(var(--high-orange))" />
        <Radar dataKey="medium" fill="hsl(var(--medium-yellow))" />
        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
      </RadarChart>
    </ChartContainer>
  );
}

export default VulnerabilityRadarChart;
