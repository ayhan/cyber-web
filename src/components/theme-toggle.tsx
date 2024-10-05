import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

type CompProps = {};
export default function ThemeToggle({}: CompProps) {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="outline"
        size="icon"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
