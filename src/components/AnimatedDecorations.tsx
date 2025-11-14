import { SprayCan, PaintBucket, Sparkles, Feather } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const desktopDecorations = [
  {
    icon: SprayCan,
    style: {
      top: "10%",
      left: "15%",
      width: "55px",
      height: "55px",
      animation: "float 6s ease-in-out infinite",
    },
  },
  {
    icon: Sparkles,
    style: {
      top: "20%",
      right: "10%",
      width: "65px",
      height: "65px",
      animation: "float 7s ease-in-out infinite 1s",
    },
  },
  {
    icon: PaintBucket,
    style: {
      bottom: "30%",
      left: "5%",
      width: "60px",
      height: "60px",
      animation: "float 8s ease-in-out infinite 0.5s",
    },
  },
  {
    icon: Feather,
    style: {
      bottom: "15%",
      right: "15%",
      width: "50px",
      height: "50px",
      animation: "float 5s ease-in-out infinite 1.5s",
    },
  },
];

const mobileDecorations = [
  {
    icon: SprayCan,
    style: {
      top: "10%",
      left: "5%",
      width: "40px",
      height: "40px",
      animation: "float 6s ease-in-out infinite",
    },
  },
  {
    icon: Sparkles,
    style: {
      top: "10%",
      right: "5%",
      width: "40px",
      height: "40px",
      animation: "float 7s ease-in-out infinite 1s",
    },
  },
];

const AnimatedDecorations = () => {
  const isMobile = useIsMobile();
  const decorations = isMobile ? mobileDecorations : desktopDecorations;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {decorations.map((deco, index) => {
        const Icon = deco.icon;
        return (
          <Icon
            key={index}
            className="absolute text-primary opacity-50"
            style={deco.style as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default AnimatedDecorations;