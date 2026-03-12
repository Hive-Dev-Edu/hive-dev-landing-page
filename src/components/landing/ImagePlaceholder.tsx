import { cn } from "../../lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  icon?: React.ReactNode;
  sublabel?: string;
}

const ImagePlaceholder = ({
  label,
  aspectRatio = "aspect-video",
  className,
  icon,
  sublabel,
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border bg-secondary/60 overflow-hidden group transition-all duration-300 hover:border-primary/20 hover:shadow-md",
        aspectRatio,
        className
      )}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          {icon || <ImageIcon size={22} className="text-honey-dark" />}
        </div>
        <span className="text-sm font-medium text-muted-foreground text-center leading-snug">
          {label}
        </span>
        {sublabel && (
          <span className="text-xs text-muted-foreground/60 text-center">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
