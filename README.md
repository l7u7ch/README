# ZELVON

プロフィールと利用中の SNS をまとめて表示する、Astro 製の個人向けリンクページです。

## 機能

- プロフィールの表示
- SNS リンクの状態別表示
- ライト／ダークテーマの切り替えと選択内容の保存
- 画面幅に応じたレスポンシブ表示

## 技術構成

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## セットアップ

Node.js と npm が利用できる環境で、次のコマンドを実行します。

```sh
npm install
npm run dev
```

起動後、ターミナルに表示されるローカル URL をブラウザで開きます。

## 設定

サイト名、プロフィール、SNS リンクは [`src/config.ts`](src/config.ts) で管理します。

SNS リンクの `status` には次の値を指定できます。

| 値 | 表示 |
| --- | --- |
| `active` | 利用中の SNS として表示 |
| `archive` | アーカイブ済みの SNS として表示 |
| `hidden` | 非表示 |

`provider` が既定のサービスに含まれない場合は `custom` を指定し、必要に応じて `brandColor` を設定します。

## コマンド

| コマンド | 用途 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ファイルを生成 |
| `npm run preview` | 生成結果をローカルで確認 |

本番用ファイルは `dist/` に生成されます。
