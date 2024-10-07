import { DashboardIcon, TableIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavList = () => {
  return (
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
  );
};

export default NavList;
