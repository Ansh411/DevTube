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

const nameList = [
  'Ansh', 'Devraj', 'AryanX', 'Rohan', 'Aarav',
  'Kunal', 'Rahul', 'Vikram', 'Aditya', 'Ishaan',
  'Kabir', 'Yash', 'Harsh', 'Ayush', 'Shiv',
  'Rudra', 'Arjun', 'Kartik', 'Samar', 'Nikhil',
  'Aakash', 'Pranav', 'Tejas', 'Vedant', 'Om',
  'Siddharth', 'Varun', 'Manav', 'Ritvik', 'Shaurya',
  'Atharv', 'Krish', 'Tanay', 'Parth', 'Neeraj',
  'Mohit', 'Abhinav', 'Chirag', 'Deepak', 'Saurabh',
  'Piyush', 'Gaurav', 'Amit', 'Sandeep', 'Mayank',
  'Rajat', 'Naman', 'Tanish', 'Lakshya', 'Dhruv',
  'Yuvraj', 'Keshav', 'Ujjwal', 'Arnav', 'Vihaan',
  'Reyansh', 'Vivaan', 'Shaunak', 'Raghav', 'Advait',
  'Aaryav', 'Hrithik', 'Ritesh', 'Kush', 'Tarun',
  'Pulkit', 'Rohit', 'Sachin', 'DevX', 'AnshOP',
  'AryaStorm', 'PixelParth', 'NeonKartik', 'ShadowShiv',
  'GhostRudra', 'DarkYash', 'BlazeArjun', 'VibeVed',
  'NovaAarav', 'ZenOm', 'CodeKunal', 'ByteNikhil',
  'ChillDev', 'FlexAryan', 'SwiftKabir', 'RealRahul',
  'EpicRohan', 'UrbanTejas', 'RawDhruv', 'PrimeKeshav'
];

export function generateRandomNames() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const chatMessages = [
  "This stream is actually so good",
  "Bro the quality looks super clean",
  "Anyone watching this late night?",
  "This part was totally unexpected",
  "Chat going crazy right now lol",
  "The host explains things so well",
  "Came here after seeing the title",
  "This deserves way more viewers",
  "Background music feels perfect",
  "Watching while eating dinner rn",

  "This reminds me of old streams",
  "Chat spamming already I see",
  "Lowkey learning a lot from this",
  "Who else joined from homepage?",
  "This topic is actually important",
  "Respect for the effort put in",
  "Not skipping a single minute",
  "This stream feels very chill",
  "Love how interactive this is",
  "Audio is clear no lag at all",

  "Bhai ye stream kaafi sahi lag rahi",
  "Audio video dono perfect aa rahe",
  "Aaj ka topic kaafi interesting hai",
  "Bro explanation bilkul clear hai",
  "Chat ka vibe kaafi positive lag raha",
  "Late join kiya par worth lag raha",
  "Background music kaafi soothing hai",
  "Host ka bolne ka style mast hai",
  "Ye part samajhna thoda easy ho gaya",
  "Aaj seekhne ko kaafi mil raha",

  "Background setup looks great",
  "This answered my doubts well",
  "I like the calm explanation",
  "This is worth watching fully",
  "The host knows the topic well",
  "Chat please stop spamming lol",
  "This is relaxing to watch",
  "The pace is not rushed",
  "This feels very engaging",
  "Glad I joined this stream",

  "Bhai full focus ke saath dekh raha",
  "Is type ke streams aur lao",
  "Time ka pata hi nahi chala",
  "Ye content kaafi useful lag raha",
  "Samajhne ka tareeka kaafi accha",
  "Chat thoda slow karo yaar",
  "Ye example kaafi relatable tha",
  "Aise hi explain karte raho",
  "Is stream se kaafi clarity mili",
  "Overall experience kaafi accha",

  "This content feels high effort",
  "Watching this instead of reels",
  "This is actually very helpful",
  "Chat vibe is really nice",
  "This deserves a replay watch",
  "Everything is well structured",
  "This stream feels genuine",
  "Appreciate the honesty here",
  "Learning while chilling here",
  "This is a quality livestream",

  "Stream ka flow kaafi smooth chal raha",
  "Ye cheez pehle clear nahi thi",
  "Ab ye concept thoda samajh aaya",
  "Chat kaafi active ho gaya hai",
  "Bro ye explanation kaafi helpful hai",
  "Is topic pe aur bolo please",
  "Quality bilkul HD lag rahi hai",
  "Phone pe bhi stream smooth chal rahi",
  "Bina bore hue dekh raha hoon",
  "Ye live hona kaafi accha lagta",

  "This chat feels super positive",
  "I like how simple this is",
  "Did not expect this to be fun",
  "The explanation makes sense",
  "Came for five mins staying now",
  "This deserves a like honestly",
  "Watching on phone quality good",
  "This feels calm and relaxing",
  "The pacing is really perfect",
  "Chat mods doing a good job",


  "Bhai ye stream worth hai time ka",
  "Kaafi din baad aisa content mila",
  "Live dekhne ka alag hi maza hai",
  "Host ka confidence kaafi accha",
  "Ye cheez real life mein kaam aayegi",
  "Samajhne mein bilkul problem nahi",
  "Chat ke log bhi kaafi chill hain",
  "Ye explanation simple aur clear",
  "Bina rush ke samjha rahe ho",
  "Ye session kaafi productive lag raha"
];

export function getRandomChatMessage() {
  return chatMessages[Math.floor(Math.random() * chatMessages.length)];
}