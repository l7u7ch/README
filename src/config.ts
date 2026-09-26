export type SocialProvider =
  | "bluesky"
  | "github"
  | "kofi"
  | "lodestone"
  | "qiita"
  | "twitter"
  | "zenn";

export type SocialLinkStatus = "active" | "archived";

export interface SocialLink {
  provider: SocialProvider;
  name: string;
  url: string;
  brandColor?: string;
  status: SocialLinkStatus;
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
  socialLinks: SocialLink[];
}

export const siteConfig: SiteConfig = {
  siteTitle: "l7u7ch",
  siteDescription: "",
  profile: {
    name: "l7u7ch",
    bio: "System Architect & Warrior of Light",
    avatar: "/avatar.png",
  },
  socialLinks: [
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
      status: "archived",
    },
    {
      provider: "github",
      name: "GitHub",
      url: "https://github.com/l7u7ch",
      status: "active",
    },
    {
      provider: "lodestone",
      name: "The Lodestone",
      url: "https://jp.finalfantasyxiv.com/lodestone/character/45284272/",
      status: "active",
    },
    {
      provider: "qiita",
      name: "Qiita",
      url: "https://qiita.com/l7u7ch",
      status: "archived",
    },
    {
      provider: "zenn",
      name: "Zenn",
      url: "https://zenn.dev/l7u7ch",
      status: "active",
    },
    {
      provider: "kofi",
      name: "Ko-fi",
      url: "https://ko-fi.com/l7u7ch",
      status: "active",
    },
  ],
};
