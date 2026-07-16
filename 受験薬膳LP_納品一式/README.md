# 『受験薬膳』書籍PR LP — 納品メモ

## フォルダ構成

```
site/
├── index.html                 LP本体(1ページ完結)
├── assets/
│   ├── css/style.css          スタイル(先頭の :root がブランドトークン)
│   ├── js/main.js             スクロールアニメーション・モーション停止
│   └── img/
│       ├── fv.webp            FV画像(支給PNGをWebP化・原本は別途保全)
│       ├── favicon.svg / ogp.png(仮)
│       └── placeholder/       差し替え用プレースホルダ21点(SVG)
└── README.md                  このファイル
```

## 公開前に必ず差し替えるもの

1. **AmazonのURL** — `index.html` 内の `class="js-amazon"` が付いた `<a>` 3箇所。`href="#"` を実際の商品URLに差し替える
2. **canonical / og:url / og:image** — `<head>` 内の `https://example.com/` を本番URLに差し替える
3. **OGP画像** — `assets/img/ogp.png` は仮。書影入りの1200×630pxを推奨
4. **プレースホルダ画像** — 下記一覧の通り差し替え

## 画像素材について(はめ込み済み)

ご支給いただいた素材(00〜13)はすべて `assets/img/` にWebP最適化してはめ込み済みです。
原本は納品フォルダ外(`02_design/素材原本/`)に保全しています。
※分かること①〜⑥の挿絵(素材04〜09)はレイアウト調整の結果、使用しない方針となりました(タイトル強調に変更)。素材は原本フォルダに保管してあります。

- fv.webp(00) / photo-morning(01) / photo-table(02) / photo-supermarket(03)
- photo-profile(10) / photo-book(11、書影) / photo-pdfcover(12、横長) / photo-seminar(13)

成田奈緒子先生・本田直人先生はお写真がないため、聴診器・角帽のアイコン(インラインSVG、`.expert__icon`)で表現しています。後日お写真を使う場合は `index.html` の該当SVGを `<img>` に戻してください(丸トリミングは `border-radius: 50%`)。

OGP画像(`assets/img/ogp.png`)は書影入りで自動生成した仮版です。必要に応じて差し替えてください。

## デザインについて

- トークンは「受験薬膳ブランドガイド」準拠(ブラウン #4B3A2F / ベージュ #E7D8C3 / アイボリー #FAF7F2 / グリーン #8FA383 / オレンジ #E9B387)
- 背景のミントグリーン(#E9F0E6)は参考サイト踏襲で、ブランドのやわらかなグリーンから淡色化
- CTAボタンとリボン見出しのコーラル(#F5735B)はFV画像から採取した色
- 見出し=Noto Serif JP、本文=Noto Sans JP(いずれもGoogle Fonts/CDN読み込み。**オフラインでは代替フォント表示**になります)

## アニメーションの調整箇所

- 出現アニメの速さ: `style.css` の `--duration`(既定0.9s)
- チップ・リストの時間差: `main.js` の `initStagger()` 内 `i * 0.08`
- FVの文具ドードルの浮遊: `style.css` の `@keyframes floatSlow`(不要なら `.fv__doodles` を削除)
- 追従CTAはご指定通り実装していません

## 公開手順(最短)

1. 上記「公開前に必ず差し替えるもの」を反映
2. [Netlify Drop](https://app.netlify.com/drop) を開き、`site` フォルダをドラッグ&ドロップ → 即公開
3. 公開後、スマホ実機でFVの表示・CTAのタップ・Amazonリンク先を確認

## 公開後の改善候補(3行)

- GA4を入れる場合はCTAクリックをイベント計測し、FV直下CTAと最終CTAのクリック率を比較
- FVの直帰が多ければ、FV直下に「3つの特徴」の要約を足すABテストを検討
- 特典締切(2026年8月31日)以降は特典3の抽選会記載の扱いを要確認
