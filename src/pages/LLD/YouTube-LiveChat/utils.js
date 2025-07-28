export function getRandomName() {
  const firstNames = [
    "Aarav",
    "Vivaan",
    "Diya",
    "Isha",
    "Shikha",
    "Aryan",
    "Anaya",
    "Kriti",
    "Kabir",
    "Rhea",
  ];

  const lastNames = [
    "Sharma",
    "Verma",
    "Patel",
    "Singh",
    "Kumar",
    "Mehta",
    "Kapoor",
    "Joshi",
    "Chopra",
    "Reddy",
  ];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirst} ${randomLast}`;
}

export const LIMIT = 100;
