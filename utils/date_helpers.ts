import { format } from 'date-fns';

function getYesterdayDateXPath(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const formatted = format(yesterday, "EEEE, MMMM do, yyyy"); // e.g., "Sunday, May 11th, 2025"
  return `//div[@aria-label='Choose ${formatted}']`;
}
