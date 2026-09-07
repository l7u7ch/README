export type SnsProvider =
  | "bluesky"
  | "github"
  | "instagram"
  | "linkedin"
  | "lodestone"
  | "qiita"
  | "tiktok"
  | "twitter"
  | "youtube"
  | "zenn"
  | "custom";

export type SnsLinkStatus = "active" | "archive" | "hidden";

export interface SnsLink {
  provider: SnsProvider;
  name: string;
  url: string;
  brandColor?: string;
  status: SnsLinkStatus;
}

export interface ProfileConfig {
  name: string;
  bio: string;
  avatar: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  profile: ProfileConfig;
  snsLinks: SnsLink[];
  footer?: Record<string, never>;
}

export const siteConfig: SiteConfig = {
  siteTitle: "l7u7ch",
  siteDescription: "",
  profile: {
    name: "l7u7ch",
    bio: "System Architect & Warrior of Light",
    avatar: "/avatar.png",
  },
  snsLinks: [
    {
      provider: "bluesky",
      name: "Bluesky",
      url: "https://bsky.app/profile/l7u7ch.bsky.social",
      status: "active",
    },
    {
      provider: "twitter",
      name: "Twitter / X",
      url: "https://twitter.com/l7u7ch",
      status: "archive",
    },
    {
      provider: "github",
      name: "GitHub",
      url: "https://github.com/l7u7ch",
      status: "active",
    },
    {
      provider: "instagram",
      name: "Instagram",
      url: "https://instagram.com/",
      status: "hidden",
    },
    {
      provider: "lodestone",
      name: "The Lodestone",
      url: "https://jp.finalfantasyxiv.com/lodestone/character/45284272/",
      status: "active",
    },
    {
      provider: "youtube",
      name: "YouTube",
      url: "https://youtube.com/",
      status: "hidden",
    },
    {
      provider: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/",
      status: "hidden",
    },
    {
      provider: "qiita",
      name: "Qiita",
      url: "https://qiita.com/l7u7ch",
      status: "archive",
    },
    {
      provider: "zenn",
      name: "Zenn",
      url: "https://zenn.dev/l7u7ch",
      status: "active",
    },
  ],
};
