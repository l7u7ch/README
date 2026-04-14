# ZELVON

Astro + Tailwind CSS で構築された、個人プロフィールと SNS リンクをまとめるためのシンプルなサイトです。  
表示するプロフィール情報やリンク一覧は、主に `src/config.ts` で管理します。

## 技術スタック

- Astro
- Tailwind CSS
- pnpm

## セットアップ

依存関係をインストールします。

```bash
pnpm install
```

開発サーバーを起動します。

```bash
pnpm dev
```

ビルドを実行します。

```bash
pnpm build
```

ビルド結果をローカルで確認します。

```bash
pnpm preview
```

## カスタマイズ

主な設定は `src/config.ts` にまとまっています。README 上では、以下の型と設定を触る前提です。

- `SiteConfig`
- `ProfileConfig`
- `SnsLink`
- `SnsLinkStatus`

### サイト情報

`siteTitle` と `siteDescription` でページタイトルと説明文を変更できます。

```ts
export const siteConfig: SiteConfig = {
  siteTitle: "ZELVON",
  siteDescription: "",
};
```

### プロフィール

`profile` で表示名、自己紹介、アバター画像を設定します。

```ts
profile: {
  name: "l7u7ch",
  bio: "Software Engineer & Warrior of Light",
  avatar: "/botttsNeutral-1773378169241.svg",
}
```

`avatar` は `public/` 配下の画像パスを指定します。画像を差し替える場合は `public/` にファイルを追加し、そのパスへ更新してください。

### SNS リンク

`snsLinks` でリンク一覧を管理します。各リンクは `provider`、`name`、`url`、`status` を持ち、必要に応じて `brandColor` を上書きできます。

```ts
{
  provider: "github",
  name: "GitHub",
  url: "https://github.com/your-name",
  status: "active",
}
```

`status` によって表示が変わります。

- `active`: 通常のリンクとして表示
- `archive`: アーカイブ枠に表示
- `hidden`: 画面には表示しない

## 主要ファイル

- `src/pages/index.astro`
  トップページです。プロフィール、SNS リンク、フッターを組み立てます。
- `src/config.ts`
  サイト全体の設定を定義します。
- `src/components/`
  `ProfileSection.astro`、`SnsLinks.astro`、`ThemeToggle.astro` などの UI コンポーネントを配置しています。
- `public/`
  favicon やアバター画像などの静的ファイルを配置します。

## 補足

- ダークモード切り替えは `src/components/ThemeToggle.astro` で実装されています。
- デプロイ先や公開 URL、運用手順はこの README には含めていません。
