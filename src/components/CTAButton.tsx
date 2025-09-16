import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "default" | "lg" | "xl";
  className?: string;
}

export const CTAButton = ({ children, onClick, size = "lg", className }: CTAButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Scroll para o final da página ou ação padrão
      window.open("https://pay.hotmart.com/exemplo", "_blank");
    }
  };

  const buttonSize = size === "xl" ? "lg" : size;
  const xlClasses = size === "xl" ? "h-16 px-12 py-4 text-xl" : "";

  return (
    <Button
      onClick={handleClick}
      size={buttonSize}
      className={cn(
        "bg-gradient-cta hover:shadow-glow transition-all duration-300 hover:scale-105",
        "font-bold rounded-xl shadow-elegant",
        "hover:bg-gradient-to-r hover:from-accent hover:to-primary",
        xlClasses,
        className
      )}
    >
      {children}
    </Button>
  );
};