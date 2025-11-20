import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./avatar";
import { Card, CardContent } from "./card";

interface AudioPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const AudioPlayer = React.forwardRef<HTMLDivElement, AudioPlayerProps>(
  ({ className, src, title, subtitle, icon, ...props }, ref) => {
    const defaultIcon = (
      <svg
        className="w-5 h-5 text-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343l-.707-.707m13.414 13.414l-.707.707M6.343 17.657L4.93 19.07m14.142-14.142L19.07 4.93M17.657 6.343l.707-.707M4.222 4.222l-.707.707M12 2v2m0 16v2M2 12h2m16 0h2M4.222 19.778l.707.707M19.778 4.222l-.707-.707"
        />
      </svg>
    );

    return (
      <Card ref={ref} className={cn("", className)} {...props}>
        <CardContent className="pt-4">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-foreground/10">
                {icon || defaultIcon}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {title && (
                <p className="text-sm font-medium text-foreground">{title}</p>
              )}
              {subtitle && (
                <p className="text-xs text-foreground/50">{subtitle}</p>
              )}
            </div>
          </div>
          <audio controls className="w-full h-10" src={src}>
            Your browser does not support the audio element.
          </audio>
        </CardContent>
      </Card>
    );
  }
);
AudioPlayer.displayName = "AudioPlayer";

export { AudioPlayer };

