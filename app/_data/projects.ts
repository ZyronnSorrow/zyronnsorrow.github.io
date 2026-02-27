import { StaticImageData } from "next/image";

import boundToAllTradesThumb from "@/public/images/bound-to-all-trades-thumb.png";
import nextLogo from "@/public/images/next.svg";
import knightsForgeThumb from "@/public/images/knights-forge-thumb.png";
import lastManStandingThumb from "@/public/images/last-man-standing-thumb.jpg";
import sprockyThumb from "@/public/images/sprocky-thumb.png";

export type ProjectData = {
    name: string,
    description: string,
    projectUrl?: string,
    repositoryUrl?: string,
    issuesUrl?: string,
    projectThumbnail?: StaticImageData,
};

export const ITCH_PROFILE_URL: string = "https://zyronnsorrow.itch.io/";

const BOUND_TO_ALL_TRADES_URL: string = "https://zyronnsorrow.itch.io/bound-to-all-trades";
const PORTFOLIO_REPOSITORY: string = "https://github.com/ZyronnSorrow/zyronnsorrow.github.io";
const KNIGHTS_FORGE_URL: string = "https://zyronnsorrow.itch.io/knights-forge";
const LAST_MAN_STANDING_URL: string = "https://tdespins.itch.io/last-man-standing";
const SPROCKY_URL: string = "https://tdespins.itch.io/sprocky";

export const projects: ProjectData[] = [
    {
        name: "Bound to All Trades",
        description: "Game Design and Development Senior Capstone project 2019, built using Unreal Engine 4.",
        projectUrl: BOUND_TO_ALL_TRADES_URL,
        projectThumbnail: boundToAllTradesThumb,
    },
    {
        name: "Kev The Dev Portfolio Website",
        description: "This website is built using Next.js and hosted statically with Github Pages.",
        repositoryUrl: PORTFOLIO_REPOSITORY,
        projectThumbnail: nextLogo,
    },
    {
        name: "Knights Forge",
        description: "A game built using Unity for the Gamedev.js Jam 2024.",
        projectUrl: KNIGHTS_FORGE_URL,
        projectThumbnail: knightsForgeThumb,
    },
    {
        name: "Last Man Standing",
        description: "A game built using Unity for the GeoJam 2022.",
        projectUrl: LAST_MAN_STANDING_URL,
        projectThumbnail: lastManStandingThumb,
    },
    {
        name: "Sprocky",
        description: "A game built using Unity for the Lost Relic Games - GAME JAM.",
        projectUrl: SPROCKY_URL,
        projectThumbnail: sprockyThumb,
    },
];
