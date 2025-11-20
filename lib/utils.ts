import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatFields<T extends Record<string, unknown>>(obj: T, fields: Array<keyof T>): string {
  return fields
    .map((key) => obj[key])
    .map((value) => {
      if (value == null) return "";
      if (typeof value === "string") return value.trim();
      if (Array.isArray(value)) {
        return value
          .map((v) => (typeof v === "string" ? v.trim() : String(v)))
          .filter(Boolean)
          .join(", ");
      }
      return String(value);
    })
    .filter(Boolean)
    .join(" | ");
}
