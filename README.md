# 概要
https://github.com/MinatoNaka/SpaTraining1  
このLaravel + Vue.jsによるSPAアプリケーションに、アニメーションを追加。  
  
Vueのtransition機能と、animate.cssを利用してアニメーションを付けている。  

# 付けたアニメーション
* 各ページメインコンポーネントの切り替え時
* 本一覧テーブルの行にマウスオン時
* 本を削除して一覧テーブルから対象行を削除時
* 本一覧のソート順シャッフル時

# ビルド
サーバ自体の構築、設定が完了している前提。

* 本リポジトリをcloneする
* `composer install`
* `php artisan migrate --seed`
* `npm install`
* `npm run dev`
