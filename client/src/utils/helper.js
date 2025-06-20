const bleachNames = [
  "Ichigo", "Rukia", "Renji", "Byakuya", "Toshiro", "Urahara", "Yoruichi",
  "Aizen", "Gin", "Ulquiorra", "Grimmjow", "Orihime", "Chad", "Ishida",
  "Kenpachi", "Mayuri", "Shunsui", "Soi Fon", "Yamamoto", "Hinamori"
];

const aizenMessages = [
  "Aizen solos your verse with just his gaze 😤",
  "Bro planned the entire anime in episode 1 💀",
  "Aizen is 10 steps ahead of the script.",
  "He got sealed just to give others a chance 💅",
  "Even in prison, he's still the main character.",
  "Aizen doesn’t fight, he teaches lessons. 📖",
  "His Bankai is still classified for humanity's safety.",
  "They needed the Soul King and plot armor to stop him 💀",
  "Aizen pulled up in a chair and stole the show 💺",
  "Goatzen 🐐✨",
  "Kubo had to nerf him with plot 😭",
  "That man's spiritual pressure broke my phone 💥📱",
  "Imagine losing to someone with that much riz 😩",
  "He clapped the Gotei 13 and said 'mid.'",
  "He gaslit the entire Soul Society into trusting him 🔥",
    "Bankai! 🔥",
  "Ichigo just keeps getting stronger 😤",
  "That Hollow transformation 😳",
  "Grimmjow vs Ichigo is peak!",
  "Rukia is so underrated 🥺",
  "Kurosaki Ichigo. Substitute Soul Reaper. 😎",
  "Urahara knows everything bro 😶",
  "Kenpachi is built different 😈",
  "Ulquiorra's theme... pure chills.",
  "Rukia's Bankai reveal 💫",
  "Final Getsuga Tenshou!!!! 😱",
  "Soul Society arc never gets old.",
  "Toshiro is cool but dangerous ❄️",
  "Mayuri is creepy but genius 😵",
  "Bleach animation is top-tier now 🔥"
];

export const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateRandomName = () => {
  const id = Math.floor(Math.random() * 1000);
  return `${getRandomItem(bleachNames)}${id}`;
};

export const generateRandomMessage = () => {
  return getRandomItem(aizenMessages);
};

export const formatNumber = (num) => {
  if (!num) return "";
  const n = parseInt(num);
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
};
