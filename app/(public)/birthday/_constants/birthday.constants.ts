import { Colorway, Storage } from "../_types/birthday.types";

export const GIFT = {
  recipient: "Devon",
  from: "sqysh",
  colorway: "silver" as Colorway,
  storage: "512GB" as Storage,
  note: "i love our life together plus the LLHHHadyy < 3  she is such an awesome addition to our already awesome lives. i can't believe this is my tenth birthday with you! that is keerrazzzyyy! i love you to death and there is no one else in the world I would rather wake up to every day. you encourage me and we both encourage eachother to be the best version of ourselves —— and i love that and i love you SO MUCH and enjoy your new computer!",
};

const COLORWAYS: Record<
  Colorway,
  { label: string; lid: string; edge: string; sky: string; ground: string }
> = {
  silver: {
    label: "Silver",
    lid: "#D9DADD",
    edge: "#B0B2B7",
    sky: "#8E9096",
    ground: "#54565C",
  },
  blush: {
    label: "Blush",
    lid: "#E9C6C2",
    edge: "#CB9E99",
    sky: "#CF8B84",
    ground: "#874944",
  },
  citrus: {
    label: "Citrus",
    lid: "#EBD79B",
    edge: "#C9B26B",
    sky: "#D6A63C",
    ground: "#87651A",
  },
  indigo: {
    label: "Indigo",
    lid: "#909DC5",
    edge: "#6A79A6",
    sky: "#4E5E92",
    ground: "#242E58",
  },
};

export const way = COLORWAYS[GIFT.colorway];

/* Listing-sheet summary. No price: this one is off market. */
export const SUMMARY = [
  { label: "status", value: "sold" },
  { label: "located", value: "Cupertino, CA" },
  { label: "days on market", value: "0" },
  { label: "listed by", value: GIFT.from },
];

export const SPECS: { label: string; value: string }[] = [
  { label: "chip", value: "Apple A18 Pro" },
  { label: "cpu", value: "6-core, 2 performance and 4 efficiency" },
  { label: "gpu", value: "5-core with hardware ray tracing" },
  { label: "neural engine", value: "16-core" },
  { label: "memory", value: "8GB unified, 60GB/s" },
  { label: "storage", value: `${GIFT.storage} SSD` },
  {
    label: "display",
    value: "13.0-inch Liquid Retina, 2408 x 1506 at 219 ppi",
  },
  { label: "brightness", value: "500 nits, 1 billion colors" },
  { label: "battery", value: "up to 16 hours video, 11 hours web" },
  { label: "camera", value: "1080p FaceTime HD" },
  { label: "audio", value: "dual speakers with Spatial Audio, 3.5 mm jack" },
  {
    label: "keyboard",
    value:
      GIFT.storage === "512GB"
        ? "Magic Keyboard with Touch ID"
        : "Magic Keyboard",
  },
  { label: "ports", value: "USB 3 (USB-C), USB 2 (USB-C)" },
  { label: "wireless", value: "Wi-Fi 6E, Bluetooth 6" },
  { label: "footprint", value: "11.71 x 8.12 x 0.50 in" },
  { label: "weight", value: "2.7 lb (1.23 kg)" },
  { label: "finish", value: `${way.label}, 90% recycled aluminum` },
];
