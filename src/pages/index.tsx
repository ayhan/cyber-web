import DashboardLayout from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, MoonIcon } from "@radix-ui/react-icons";
import VulnerabilityRadarChart from "@/components/radar-charts";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import SeverityIcon from "@/components/severityIcon";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const cookies = parseCookies({ req });

  const accessToken = cookies.access_token;

  if (!accessToken) {
    res.writeHead(302, { Location: "/login" });
    res.end();
    return { props: {} };
  }

  return {
    props: {},
  };
};

const Home = () => {
  const findingsData = [
    { id: 1, name: "Critical", number: 500 },
    { id: 2, name: "High", number: 300 },
    { id: 3, name: "Medium", number: 400 },
    { id: 4, name: "Low", number: 300 },
  ];
  const resolvedCardsData = [
    {
      id: 1,
      title: "300 Resolved",
      description: "since last scan",
      number: "-5",
      percentage: "-7%",
    },
    {
      id: 2,
      title: "600 New Findings",
      description: "since last scan",
      number: "-5",
      percentage: "-7%",
    },
    {
      id: 3,
      title: "3 mins",
      description: "last scan",
      number: "+1.1",
      percentage: "+22%",
    },
    {
      id: 4,
      title: "2.3 mins",
      description: "avg scan",
      number: "0.1",
      percentage: "+1%",
    },
  ];
  const top5PackagesData = [
    { id: 1, name: "Common", number: 34, width: "100%" },
    { id: 2, name: "FastInfoset-1.2.15", number: 93, width: "90%" },
    { id: 3, name: "HikariCP-3.2.0", number: 49, width: "80%" },
    { id: 4, name: "SCF-1.0", number: 87, width: "80%" },
    { id: 5, name: "activation-1.1", number: 41, width: "64%" },
  ];
  return (
    <DashboardLayout>
      <main className="flex space-x-2">
        <aside className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <p className="text-lg font-bold">1500 Findings</p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-bold">+230</p>
                  <p className="text-xs text-success">+45%</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              {findingsData?.map((el) => (
                <div key={el.id}>
                  <SeverityIcon severity={el.name.toLocaleLowerCase()} />
                  <p className="text-xs text-muted-foreground">{el.name}</p>
                  <p className="text-sm">{el.number}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-2">
            {resolvedCardsData?.map((el) => (
              <Card key={el.id} className="w-full">
                <CardContent className="p-3">
                  <p className="text-lg font-bold">{el.title}</p>
                  <div className="flex items-center justify-between space-x-4">
                    <p className="text-xs text-muted-foreground">
                      {el.description}
                    </p>
                    <div className="flex items-center space-x-1 text-xs">
                      <p className="font-bold">{el.number}</p>
                      <p className="text-success">{el.percentage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="w-full">
            <CardContent className="grid grid-cols-2 p-3">
              <div className="border-r-2 pr-4">
                <p className="text-lg font-bold pb-2">Compliance</p>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>OSWAP 2017</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>OSWAP 2021</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>PCI DSS</span>
                    <span>
                      <MoonIcon />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pl-4 space-y-1">
                <p className="text-lg font-bold">Packages</p>
                <div className="flex items-center space-x-1">
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-sm font-bold">2983</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Safe</p>
                    <p className="text-sm font-bold">1232</p>
                    <p className="text-xs text-muted-foreground">(45%)</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Vulnerable</p>
                    <p className="text-sm font-bold">1213</p>
                    <p className="text-xs text-muted-foreground">(55%)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-success w-6/12 h-4 shadow-success"></div>
                  <div className="bg-danger w-7/12 h-4 shadow-danger"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-3">
              <p className="text-lg font-bold">
                Top 5 Packages with Vulnerabilities
              </p>
              {top5PackagesData?.map((el) => (
                <div
                  key={el.id}
                  className="flex items-center justify-between space-x-4 space-y-4"
                >
                  <p className="text-xs text-muted-foreground w-1/3">
                    {el.name}
                  </p>
                  <div className=" space-x-1 text-xs h-6 w-2/3">
                    <p
                      className={`font-bold text-right pr-2 bg-gradient-to-l from-percentage-start to-percentage-end h-full flex justify-end items-center`}
                      style={{ width: el.width }}
                    >
                      {el.number}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
        <section className="flex-1">
          <Card className="w-full gradient-background">
            <CardHeader className="font-bold">
              Finding Distribution Type
            </CardHeader>
            <CardContent className="p-3 flex">
              <div className="flex-1">
                <VulnerabilityRadarChart />
              </div>
              <div className="max-h-max">
                <Card>
                  <CardContent className="px-2 py-3">
                    <p className="text-md font-bold">Code Findings</p>
                    <p className="text-xs text-muted-foreground">
                      from last scan
                    </p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold py-4">300</p>
                      <p className="text-xs text-success">22%</p>
                    </div>
                    {findingsData?.map((el) => (
                      <div
                        key={el.id}
                        className="flex items-center space-x-1 space-y-3"
                      >
                        <SeverityIcon
                          size={25}
                          severity={el.name.toLocaleLowerCase()}
                        />

                        <div>
                          <p className="text-xs text-muted-foreground">
                            {el.name}
                          </p>
                          <p className="text-sm"> {el.number}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="block space-y-1">
              <h3>Top 5 Code Findings</h3>
              {[1, 2, 3].map((x) => (
                <Card key={x} className="w-full">
                  <CardContent className="p-4 grid grid-flow-col gap-24">
                    <div>
                      <div className="flex">
                        <SeverityIcon size={40} severity="critical" />

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
};
export default Home;
