# 概要
Laravel + Vue.jsによるSPAの練習。

# 構成
シンプルなCURD１セットのアプリ。
本の情報を閲覧、登録、更新、削除できる。

### フロントサイド
* 一覧ページ
* 詳細ページ
* 登録ページ
* 更新ページ

### サーバサイド（API）
* 一覧取得API
* 詳細取得API
* 登録API
* 更新API
* 削除API

# ビルド
サーバ自体の構築、設定が完了している前提。

* 本リポジトリをcloneする
* `composer install`
* `php artisan migrate --seed`
* `npm install`
* `npm run dev`
