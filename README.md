# 訪問看護ステーション「りたのわ」公式サイト

群馬県高崎市を拠点とする、**小児精神科特化型の訪問看護**ステーション向けの公式 Web サイトです。Next.js（App Router）で構築しています。

## サイトの位置づけ

- **小児 × 精神科 × 特化** を前面にした情報設計
- 不登校・発達の特性・お子さまのこころの不調・ご家族の負担を中心テーマに配置
- 連絡先・所在地・対応エリアなどの運用情報は `lib/site-config.ts` で管理

## 技術スタック

| 区分 | 内容 |
|------|------|
| フレームワーク | [Next.js](https://nextjs.org/) 16（App Router） |
| UI | React 19、Tailwind CSS 4、[shadcn/ui](https://ui.shadcn.com/)（Base UI ベース） |
| モーション | Framer Motion |
| コンテンツ | Markdown（`content/news`, `content/blog`）＋ gray-matter |
| フォント | Noto Sans JP（`app/layout.tsx`） |

## 主な機能・ページ

- **トップ**: ヒーロー、小児・精神科・特化、お悩みゲートウェイ、強み、サービス、代表挨拶、看護師紹介、採用案内
- **静的/コンテンツ**: お知らせ、ブログ、スタッフ、FAQ、利用の流れ、地域・料金、お問い合わせ、プライバシーポリシー
- **採用**: `/recruit`（採用向け LP）
- **地域連携**: `/community`（共生サポーター紹介＋共有 Google カレンダーでイベント一覧）
- **SEO**: `sitemap.xml`、`robots.txt`、メタデータ

## 必要な環境

- Node.js（プロジェクトの推奨版は `.nvmrc` 等があればそれに従う）
- npm（このリポジトリは `package-lock.json` を使用）

## セットアップ

```bash
npm install
```

## 環境変数

**秘密情報やローカル用の値は `.env` に書き、Git にはコミットしません。**

| 変数 | 説明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 本番・ステージングのサイト URL（末尾スラッシュなし推奨）。サイトマップ等で利用 |
| `NEXT_PUBLIC_GOOGLE_COMMUNITY_CALENDAR_ID` | 地域イベント用の共有 Google カレンダー ID（`xxxx@group.calendar.google.com`）。`/community` に埋め込み |

### 共有 Google カレンダー（方式A）の用意

1. Googleカレンダーで新規カレンダー作成（例: りたのわ 地域イベント）
2. サポーターに「イベントの変更」権限を付与
3. **設定と共有** → **一般公開**（または「予定の表示」でリンクを知る全員）
4. **カレンダーの統合** のカレンダー ID を `.env.local` と Vercel の環境変数に設定
5. サポーターは Google カレンダーアプリから予定を追加すると、サイトに自動反映

団体リンクは `lib/supporters-data.ts` に追記します。

ルートの `.env.example` を参考に、`.env.local` を作成して値を設定してください（`.env*` は Git に含まれません）。

## 開発サーバー

```bash
npm run dev
```

ブラウザで [http://localhost:4000](http://localhost:4000) を開きます（`package.json` でポート 4000 を指定）。

## ビルド・本番起動

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## ディレクトリ構成（抜粋）

```
app/           # App Router（ページ・レイアウト・API/Actions）
components/    # UI・セクション・レイアウト
content/       # news / blog の Markdown
lib/           # site-config、コンテンツ読み込み、ナビ定義など
public/        # 静的ファイル
```

## ライセンス

非公開プロジェクトの場合は組織の方針に従ってください。

---

このプロジェクトは [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) を起点に開発されています。
