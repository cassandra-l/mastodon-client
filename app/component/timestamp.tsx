export function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals = [
    { unit: "year", seconds: 31536000, short: "y" },
    { unit: "month", seconds: 2592000, short: "mo" },
    { unit: "day", seconds: 86400, short: "d" },
    { unit: "hour", seconds: 3600, short: "h" },
    { unit: "minute", seconds: 60, short: "min" },
  ] as const;

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count}${interval.short}`;
    }
  }

  return "just now";
}
