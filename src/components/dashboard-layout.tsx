import UserDropdown from "@/components/user-dropdown";
import NavList from "@/components/nav-list";
import Logo from "@/components/logo";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-4 space-x-4">
      <nav className="flex flex-col justify-between items-center">
        <div className="space-y-4">
          <Link href={"/"}>
            <Logo width={48} height={38} />
          </Link>

          <div className="text-center">
            <ThemeToggle />
          </div>
        </div>
        <NavList></NavList>
        <UserDropdown></UserDropdown>
      </nav>
      <main className="w-full flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default DashboardLayout;
