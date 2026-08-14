// Complete 67 Events data extracted directly from zephyr-techfest.dev
import rawEvents from '../events-data.json';

// Category mapping helper
export function getEventCategory(event) {
  const t = (event.title || "").toLowerCase();
  const d = (event.desc || "").toLowerCase();
  const tag = (event.tag || "").toUpperCase();

  if (t.includes("valorant") || t.includes("codm") || t.includes("bgmi") || t.includes("fifa") || t.includes("fc24") || t.includes("free fire") || t.includes("chess") || t.includes("tekken") || t.includes("mortal kombat") || t.includes("pubg") || d.includes("gaming") || d.includes("match") || d.includes("tournament") && !d.includes("cricket") && !d.includes("football")) {
    return "Gaming";
  }
  if (t.includes("workshop") || d.includes("workshop") || d.includes("hands-on") || d.includes("training") || t.includes("garba")) {
    return "Workshops";
  }
  if (t.includes("code") || t.includes("hack") || t.includes("web") || t.includes("ai") || t.includes("ml") || t.includes("hunt") || t.includes("prompt") || d.includes("coding") || d.includes("python") || d.includes("developer") || d.includes("algorithm")) {
    return "Coding & AI";
  }
  if (t.includes("football") || t.includes("cricket") || t.includes("bullseye") || t.includes("laser") || t.includes("box") || t.includes("rink") || d.includes("ball") || d.includes("nerf") || d.includes("sports")) {
    return "Sports & Fun";
  }
  if (t.includes("cad") || t.includes("bridge") || t.includes("circuit") || t.includes("robot") || t.includes("drone") || t.includes("line follower") || t.includes("model") || d.includes("hardware") || d.includes("engineering")) {
    return "Technical & Core";
  }
  if (t.includes("dance") || t.includes("music") || t.includes("mic") || t.includes("drama") || t.includes("sing") || t.includes("fashion") || t.includes("quiz") || d.includes("creative") || d.includes("talent")) {
    return "Cultural & Creative";
  }
  return "Departmental";
}

export const CATEGORIES = [
  "All",
  "Gaming",
  "Coding & AI",
  "Technical & Core",
  "Workshops",
  "Sports & Fun",
  "Cultural & Creative"
];

export const COMMITTEES = [
  "All Committees",
  "CSI",
  "ACM",
  "IEEE",
  "IETE",
  "OWASP",
  "ACM-SIGAI",
  "S4DS",
  "ASCE",
  "ASME",
  "IEI",
  "TRS",
  "BBA",
  "BCA"
];

// Enrich events with category and resolved local image
export const ALL_EVENTS = rawEvents.map(evt => {
  const category = getEventCategory(evt);
  let image = evt.localImage || evt.image || `/event${evt.id}.webp`;
  
  return {
    ...evt,
    category,
    image,
    priceDisplay: evt.price === "0" || !evt.price ? "Free Entry" : `₹${evt.price}`,
    prizeDisplay: evt.prize_pool || "Exciting Vouchers & Trophies",
    teamMin: evt.teamSize?.min || 1,
    teamMax: evt.teamSize?.max || 1,
  };
});
