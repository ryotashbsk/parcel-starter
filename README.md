# Parcel Starter
## DEMO
https://dev.ryotashibasaki.com/parcel-starter/

## Parcel実行
```
yarn install
yarn dev
yarn build
```

## ビルドコマンド
- ```-d {folder name}```：ビルド先指定
- ```--no-source-maps```：ソースマップ無効
- ```--public-url {path}```：css,scriptのパス指定。```--public-url ./```とかにすると、ビルド時に相対パスになる。
- ```rm {folder/**}```：前回ビルドしたファイルの削除

## できること
- 設定ファイルなしでなしでお手軽に開発環境が用意できる
- Polyfillのバンドル
- htmlのテンプレートエンジンも動かせる（pugなど）
- scssコンパイル
- ES2015のトランスパイル
- htmlのminify
- ローカルサーバー起動
- 不足モジュールの自動インストール

## 所感
- ビルドが比較的サクサク。
- プロト作成に良さそう
- ビルド時のパスなどの細かい設定などをしたい場合は、webpackの方が良さそう
- webpackの```splitChunks```的なことも厳しい
