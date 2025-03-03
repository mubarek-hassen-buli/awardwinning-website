import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
 export const ranks = [
  { rank: "Grade 4", description: "Weakest level, used for minor exorcisms." },
  { rank: "Grade 3", description: "Beginner sorcerers, capable of handling weak curses." },
  { rank: "Semi-Grade 2", description: "Intermediate level, can deal with Grade 3 curses." },
  { rank: "Grade 2", description: "Standard level, recognized in missions." },
  { rank: "Grade 1", description: "Elite sorcerers, capable of handling stronger curses." },
  { rank: "Special Grade", description: "Exceptionally powerful sorcerers (Gojo, Yuta, Geto)." },
];

export const clans = [
  { name: "Gojo Clan", description: "Home of the strongest sorcerer, Satoru Gojo." },
  { name: "Zenin Clan", description: "A powerful but traditionalist clan, home to Maki and Naoya Zenin." },
  { name: "Kamo Clan", description: "Known for the deadly Blood Manipulation technique." },
];


export const arcs = [
    {
        name: "Cursed Womb Arc",
        description: "Yuji, Megumi, and Nobara take on their first dangerous mission against a Special Grade curse.",
        image: "/img/Cursed Womb Arc.jpg",
    },
    {
        name: "Kyoto Goodwill Event Arc",
        description: "Tokyo and Kyoto Jujutsu schools battle, while an unexpected enemy attacks.",
        image: "/img/Kyoto Goodwill.jpg",
    },
    {
        name: "Shibuya Incident Arc",
        description: "Gojo is sealed, and a massive battle against cursed spirits unfolds in Shibuya.",
        image: "/img/shibuya-Arc.jpg",
    },
];
export const characters = [
    {
        name: "Yuji Itadori",
        ability: "Divergent Fist, Black Flash",
        image: "/img/yuji.img.jpg",
    },
    {
        name: "Satoru Gojo",
        ability: "Limitless, Infinity, Hollow Purple",
        image: "/img/gojo.jpg",
    },
    {
        name: "Ryomen Sukuna",
        ability: "Malevolent Shrine, Dismantle, Cleave",
        image: "/img/sukuna.img.jpg",
    },
];