import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const hasSanity = Boolean(projectId);

export const client = createClient({
  projectId: projectId || "abc123",
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true
});

export const fallbackObjects = [
  {
    _id: "demo-01",
    title: "Late Night Glass",
    slug: "late-night-glass",
    category: "Rain Mood",
    emotion: "透明感",
    description: "一件適合深夜、雨聲與慢速播放清單的透明物件。",
    story: "它不是為了被快速購買，而是為了提醒你：有些東西值得被慢慢觀看。可以在後台替換成真正商品、二手選物、唱片、攝影集或任何你想推薦的東西。",
    price: "NT$ 880",
    externalUrl: ""
  },
  {
    _id: "demo-02",
    title: "Memory Cassette",
    slug: "memory-cassette",
    category: "Nostalgia",
    emotion: "懷舊",
    description: "像在回家路上突然聽到一首老歌，瞬間被拉回某段記憶。",
    story: "這裡可以寫你的選物理由：為什麼你選它、它適合什麼情緒、它和什麼音樂或場景有關。",
    price: "ARCHIVE"
  },
  {
    _id: "demo-03",
    title: "Sunday Walkman",
    slug: "sunday-walkman",
    category: "Soft Escape",
    emotion: "逃離",
    description: "一台讓人暫時離線的小型裝置，適合週日午後與一個人的散步。",
    story: "未來你可以把這裡變成真正的商品詳情頁，也可以先當作選物誌、收藏資料庫或品味展覽頁。",
    price: "NT$ 1,280"
  }
];

const fallbackHome = {
  hero: {
    siteName: "Liminal Objects",
    eyebrow: "EMOTIONAL CURATION ARCHIVE",
    title: "Objects for quiet people.",
    description: "一個把音樂、情緒、記憶與選物結合在一起的個人品味網站。不是普通商城，而是你的數位選物展間。",
    buttonText: "Enter Archive"
  },
  todayMood: {
    title: "2:13 AM / Light Rain / Slowdive",
    description: "今天的情緒是柔軟、疏離、帶一點透明感。適合觀看玻璃、老唱片、紙本攝影集與低飽和物件。",
    timeLabel: "Late Night",
    musicLabel: "Slow Playlist"
  },
  objects: fallbackObjects
};

const homeQuery = `{
  "home": *[_type == "homePage"][0]{
    siteName,
    eyebrow,
    title,
    description,
    buttonText,
    todayMoodTitle,
    todayMoodDescription,
    todayMoodTime,
    todayMoodMusic
  },
  "objects": *[_type == "curatedObject" && visible != false] | order(order asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    emotion,
    description,
    story,
    price,
    externalUrl,
    image,
    featured,
    order
  }
}`;

const objectQuery = `*[_type == "curatedObject" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  emotion,
  description,
  story,
  price,
  externalUrl,
  image
}`;

export async function getHomeData() {
  if (!hasSanity) {
    return fallbackHome;
  }

  try {
    const result = await client.fetch(homeQuery, {}, { next: { revalidate: 60 } });
    const home = result?.home || {};
    const objects = result?.objects?.length ? result.objects : fallbackObjects;

    return {
      hero: {
        siteName: home.siteName || fallbackHome.hero.siteName,
        eyebrow: home.eyebrow || fallbackHome.hero.eyebrow,
        title: home.title || fallbackHome.hero.title,
        description: home.description || fallbackHome.hero.description,
        buttonText: home.buttonText || fallbackHome.hero.buttonText
      },
      todayMood: {
        title: home.todayMoodTitle || fallbackHome.todayMood.title,
        description: home.todayMoodDescription || fallbackHome.todayMood.description,
        timeLabel: home.todayMoodTime || fallbackHome.todayMood.timeLabel,
        musicLabel: home.todayMoodMusic || fallbackHome.todayMood.musicLabel
      },
      objects
    };
  } catch (error) {
    console.error("Sanity fetch failed, using fallback content:", error);
    return fallbackHome;
  }
}

export async function getObjectBySlug(slug) {
  if (!hasSanity) {
    return fallbackObjects.find((item) => item.slug === slug) || null;
  }

  try {
    const item = await client.fetch(objectQuery, { slug }, { next: { revalidate: 60 } });
    return item || fallbackObjects.find((fallback) => fallback.slug === slug) || null;
  } catch (error) {
    console.error("Sanity object fetch failed:", error);
    return fallbackObjects.find((item) => item.slug === slug) || null;
  }
}
