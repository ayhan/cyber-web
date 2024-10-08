import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserDropdown from "@/components/user-dropdown";
import NavList from "@/components/nav-list";
import Logo from "@/components/logo";
import { RadialChart } from "@/components/radial-chart";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-4 space-x-4">
      <nav className="flex flex-col justify-between items-center">
        <Logo width={48} height={38} />
        <NavList></NavList>
        <UserDropdown></UserDropdown>
      </nav>
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <RadialChart></RadialChart>
        </CardContent>
        <CardFooter className="flex-col space-y-4">
          <Card className="w-full">
            <CardContent className="flex justify-between p-3">
              <div>
                <p className="text-xl font-bold">500 Finding</p>
                <p className="text-xs text-muted-foreground">All time data</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-lg font-bold">+230</p>
                <p className="text-xs text-success">+45%</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex justify-between p-3">
              <div>
                <p className="text-xl font-bold">60 Resolved</p>
                <p className="text-xs text-muted-foreground">All time data</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-lg font-bold">-5</p>
                <p className="text-xs text-danger">+7%</p>
              </div>
            </CardContent>
          </Card>
        </CardFooter>
      </Card>
      <main className="w-full flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default DashboardLayout;
