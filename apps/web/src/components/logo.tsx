import { useTheme } from "./theme-provider";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "auto" | "light" | "dark";
}

export function Logo({ variant = "auto", className, ...props }: LogoProps) {
  const { theme } = useTheme();

  const getLogoSrc = () => {
    if (variant === "light") {
      return "/logo-light.svg";
    }
    if (variant === "dark") {
      return "/logo.svg";
    }
    // Auto mode - use theme
    if (theme === "dark") {
      return "/logo-light.svg";
    }
    return "/logo.svg";
  };

  return <img src={getLogoSrc()} alt="Logo" className={className} {...props} />;
}

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "light" | "dark";
}

export function LogoIcon({
  variant = "dark",
  className,
  ...props
}: LogoIconProps) {
  const logoSrc = variant === "light" ? "/logo-light.svg" : "/logo.svg";

  return <img src={logoSrc} alt="Logo" className={className} {...props} />;
}
