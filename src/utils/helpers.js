export const format = (count) => {
  if (!count) return "0 ";

  const num = Number(count);

  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B ";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M ";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K ";

  return num;
};

export const timeAgo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const now = new Date();

  const seconds = Math.floor((now - publishedDate) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};
