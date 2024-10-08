import GradientBorderPolygonIcon from "./gradient-border-polygon-icon";

const SeverityIcon = ({
  severity,
  size,
}: {
  severity: string;
  size?: number;
}) => {
  switch (severity) {
    case "critical":
      return (
        <GradientBorderPolygonIcon
          size={size}
          borderGradientStart="hsl(var(--critical-red))"
          borderGradientEnd="hsl(var(--background))"
          fillGradientStart="hsl(var(--critical-red))"
          fillGradientEnd="hsl(var(--background))"
        />
      );

    case "high":
      return (
        <GradientBorderPolygonIcon
          size={size}
          borderGradientStart="hsl(var(--high-orange))"
          borderGradientEnd="hsl(var(--background))"
          fillGradientStart="hsl(var(--high-orange))"
          fillGradientEnd="hsl(var(--background))"
        />
      );

    case "medium":
      return (
        <GradientBorderPolygonIcon
          size={size}
          borderGradientStart="hsl(var(--medium-yellow))"
          borderGradientEnd="hsl(var(--background))"
          fillGradientStart="hsl(var(--medium-yellow))"
          fillGradientEnd="hsl(var(--background))"
        />
      );

    case "low":
      return (
        <GradientBorderPolygonIcon
          size={size}
          borderGradientStart="hsl(var(--low-gray))"
          borderGradientEnd="hsl(var(--background))"
          fillGradientStart="hsl(var(--low-gray))"
          fillGradientEnd="hsl(var(--background))"
        />
      );

    default:
      return (
        <GradientBorderPolygonIcon
          size={size}
          borderGradientStart="hsl(var(--low-gray))"
          borderGradientEnd="hsl(var(--background))"
          fillGradientStart="hsl(var(--low-gray))"
          fillGradientEnd="hsl(var(--background))"
        />
      );
  }
};

export default SeverityIcon;
