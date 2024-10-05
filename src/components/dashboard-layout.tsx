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

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { logout, user } = useAuth();

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar>
                <AvatarImage src={user?.image ?? ""} alt={user?.name ?? ""} />
                <AvatarFallback className="uppercase">
                  {user?.username?.[0]}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user?.username}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => logout()}
            >
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <main className="w-full flex-1 overflow-hidden">{children}</main>
    </div>
  );
};

export default DashboardLayout;
