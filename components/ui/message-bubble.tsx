import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./avatar";

interface MessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  role: "AI" | "User";
  message: string;
  senderName?: string;
}

const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  ({ className, role, message, senderName, ...props }, ref) => {
    const isAI = role === "AI";
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-3",
          isAI ? "justify-start" : "justify-end",
          className
        )}
        {...props}
      >
        {isAI && (
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-foreground/10 text-xs">
              AI
            </AvatarFallback>
          </Avatar>
        )}
        <div
          className={cn(
            "max-w-[80%] rounded-2xl px-4 py-2.5",
            isAI
              ? "bg-foreground/10 text-foreground rounded-tl-sm"
              : "bg-foreground text-background rounded-tr-sm"
          )}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className={cn(
                "text-xs font-medium",
                isAI ? "text-foreground/60" : "text-background/80"
              )}
            >
              {isAI ? "AI Assistant" : senderName || "User"}
            </span>
          </div>
          <p
            className={cn(
              "text-sm leading-relaxed",
              isAI ? "text-foreground/90" : "text-background"
            )}
          >
            {message}
          </p>
        </div>
        {!isAI && (
          <Avatar className="w-8 h-8 shrink-0">
            <AvatarFallback className="bg-foreground text-background text-xs">
              {senderName?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  }
);
MessageBubble.displayName = "MessageBubble";

export { MessageBubble };

