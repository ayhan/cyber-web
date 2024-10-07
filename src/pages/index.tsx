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
import { CheckIcon, MoonIcon } from "@radix-ui/react-icons";
import VulnerabilityRadarChart from "@/components/radar-charts";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <DashboardLayout>
      <main className="flex space-x-2">
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
        <section className="flex-1">
          <Card className="w-full">
            <CardHeader className="font-bold">
              Finding Distribution Type
            </CardHeader>
            <CardContent className="p-3 flex">
              <div className="flex-1">
                <VulnerabilityRadarChart />
              </div>
              <Card>
                <CardContent className="p-3">
                  <p className="text-md font-bold">Code Findings</p>
                  <p className="text-xs text-muted-foreground">
                    from last scan
                  </p>
                  <p className="text-2xl font-bold py-4">300</p>
                  {[1, 2, 3, 4].map(() => (
                    <div className="flex items-center space-x-1 space-y-3">
                      <GradientBorderHexagonIcon size={25} />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Critical
                        </p>
                        <p className="text-sm">500</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CardContent>
            <CardFooter className="block space-y-1">
              <h3>Top 5 Code Finding</h3>
              {[1, 2, 3].map(() => (
                <Card className="w-full">
                  <CardContent className="p-4 grid grid-flow-col gap-24">
                    <div>
                      <div className="flex">
                        <GradientBorderHexagonIcon size={40} />
                        <div>
                          <div className="flex items-center">
                            <CheckIcon />
                            <p>Open</p>
                          </div>
                          <p className="text-xl font-bold">CVE-2023-512</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Avatar className="h-5 w-5">
                          <AvatarImage
                            src={"https://github.com/shadcn.png"}
                            alt={"avatar"}
                          />
                          <AvatarFallback className="uppercase">
                            U
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">
                          debbie.barker@example.com
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        CVSS score
                      </p>
                      <p className="font-bold text-md">20</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      A code injection technique that exploits a security
                      vulnerability in an application.
                    </div>
                    <div className="text-xs text-muted-foreground">
                      A code injection technique that exploits a security
                      vulnerability in an application. A code injection
                      technique that exploits a security vulnerability in an
                      application.
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardFooter>
          </Card>
        </section>
      </main>
    </DashboardLayout>
  );
}
