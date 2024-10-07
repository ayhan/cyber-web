import ThemeToggle from "@/components/theme-toggle";
import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GradientBorderHexagonIcon from "@/components/gradient-border-polygon-icon";
import { MoonIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <DashboardLayout>
      <main className="flex">
        <aside className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <p className="text-md font-bold">60 Resolved</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-bold">+230</p>
                  <p className="text-xs text-success">+45%</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              {[1, 2, 3, 4].map(() => (
                <div>
                  <GradientBorderHexagonIcon />
                  <p className="text-xs text-muted-foreground">Critical</p>
                  <p className="text-sm">500</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map(() => (
              <Card className="w-full">
                <CardContent className="p-3">
                  <p className="text-md font-bold">2 Finding</p>
                  <div className="flex items-center justify-between space-x-4">
                    <p className="text-xs text-muted-foreground">
                      All time data
                    </p>
                    <div className="flex items-center space-x-1 text-xs">
                      <p className="font-bold">+230</p>
                      <p className="text-success">+45%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="w-full">
            <CardContent className="grid grid-cols-2 p-3">
              <div className="border-r-2 pr-4">
                <p className="text-md font-bold pb-2">Compliance</p>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>OSWAP 2017</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>OSWAP 2017</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>OSWAP 2017</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pl-4 space-y-1">
                <p className="text-md font-bold">Packages</p>
                <div className="flex items-center space-x-1">
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-sm font-bold">2983</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Safe</p>
                    <p className="text-sm font-bold">2983</p>
                    <p className="text-xs text-muted-foreground">(45%)</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Vulnerable</p>
                    <p className="text-sm font-bold">22983</p>
                    <p className="text-xs text-muted-foreground">(55%)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-success w-6/12 h-4"></div>
                  <div className="bg-danger w-7/12 h-4"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-3">
              <p className="text-md font-bold">
                Top 5 Packages with Vulnerabilities
              </p>
              {[1, 2, 3, 4, 5].map(() => (
                <div className="flex items-center justify-between space-x-4 space-y-4">
                  <p className="text-xs text-muted-foreground">Common</p>
                  <div className="flex justify-end items-center space-x-1 text-xs h-6 w-full bg-gradient-to-l from-primary">
                    <p className="font-bold text-secondary text-right pr-2">
                      +230
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
        <h1 className="flex-1">Radar Charts</h1>
      </main>
    </DashboardLayout>
  );
}
