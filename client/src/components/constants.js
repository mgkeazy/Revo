const GOOGLE_API_KEY = "AIzaSyBenGT9Kxi4bjJwrXT7lzY8-lEklSHkK7w"

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key="+GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const commentData = [
  {
    name: "Amit Verma",
    text: "This tutorial was amazing! Really helped me understand React better.",
    replies: [
      {
        name: "Neha Sharma",
        text: "Totally agree! The explanation was very clear.",
        replies: [
          {
            name: "Ravi Mehta",
            text: "What part helped you the most? I'm still confused with useEffect.",
            replies: [
              {
                name: "Neha Sharma",
                text: "Mainly the visual examples. For useEffect, you might want to check out Fireship's video too.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Jay Patel",
        text: "Bro you explained hooks like a pro 👏👏",
        replies: [],
      },
    ],
  },
  {
    name: "Sanya Iyer",
    text: "Can someone explain why we use Redux instead of just context?",
    replies: [
      {
        name: "Ali Zaidi",
        text: "Context is good for small apps, but Redux handles larger scale state logic better.",
        replies: [
          {
            name: "Sanya Iyer",
            text: "Got it! So Redux is overkill for small apps?",
            replies: [
              {
                name: "Ali Zaidi",
                text: "Exactly. You can start with Context and switch to Redux if needed.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Priya Choudhary",
    text: "Is this still relevant in 2025? I'm seeing some things have changed in the docs.",
    replies: [
      {
        name: "Karan Kapoor",
        text: "Most of it is still solid. Just double check the official docs for breaking changes.",
        replies: [],
      },
    ],
  },
  {
    name: "Deepak Rana",
    text: "Thanks for this content. Subscribed and looking forward to more!",
    replies: [],
  },
  {
    name: "Tanvi Deshmukh",
    text: "You should add a section on performance optimization.",
    replies: [
      {
        name: "Creator - Rohan Joshi",
        text: "Thanks for the suggestion! Will definitely add it in the next video.",
        replies: [
          {
            name: "Tanvi Deshmukh",
            text: "Awesome, keep up the great work 💯",
            replies: [],
          },
        ],
      },
    ],
  },
];

export const LIVE_CHAT_LIMIT = 101;
