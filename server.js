// npm init -y
// npm i express mongoose ejs
// npm i --save-dev nodemon
// package.jsonのscriptsにて"start": "nodemon server.js"を追加
// npm run startでnodemonを起動

const express = require('express');
const nodemon = require('nodemon');
const articleRouter = require('./routes/articles');

const app = express();
// /articlesというスラッグになる
app.use(articleRouter);

// ビューエンジンを設定してHTMLなどを使えるようにする
app.set('view engine', 'ejs');
// ルートパスを設定
app.get('/', (req, res) => {
  // res.send('hello');
  // 表示したいファイルのパス
  res.render('index');
  // 他にもいろんな下層ページをここに書くと冗長になるのでroutesなどディレクトリで管理する
});
// サーバーの起動（ルートパスの設定が必要）
app.listen('5000');
