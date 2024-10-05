import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardIcon, TableIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-4">
      <nav className="flex flex-col justify-between items-center">
        <div>
          <Image
            src="/logo.png"
            alt="Cyber logo"
            width={48}
            height={38}
            priority
          />
        </div>

        <ul>
          <li className="py-4">
            <Link href={"/"}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <DashboardIcon className="h-[1.2rem] w-[1.2rem]" />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8} side="right">
                    <p>Dashboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
          <li className="py-4">
            <Link href={"table"}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TableIcon className="h-[1.2rem] w-[1.2rem]" />
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8} side="right">
                    <p>Table</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
        </ul>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="cyber avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
      <main className="w-full flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default DashboardLayout;
