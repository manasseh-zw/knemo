import { Logo } from "./logo";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Logo className="h-8 w-8" />
      </div>
      <div className="flex items-center gap-2">
        <Button>Sign up</Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
