// npm init -y
// npm i express mongoose ejs
// npm i --save-dev nodemon
// package.jsonのscriptsにて"start": "nodemon server.js"を追加
// npm run startでnodemonを起動

const express = require('express');
const nodemon = require('nodemon');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
mongoose.connect('mongodb://localhost/blog');
const app = express();
// /articlesというスラッグになる
app.use('/articles', articleRouter);

// ビューエンジンを設定してHTMLなどを使えるようにする
app.set('view engine', 'ejs');
// ルートパスを設定
app.get('/', (req, res) => {
  // res.send('hello');
  // 表示したいファイルのパス
  // 他にもいろんな下層ページをここに書くと冗長になるのでroutesなどディレクトリで管理する
  // res.render('index');
  // res.render('index', { text: 'Hello' });
  const articles = [
    {
      title: 'forEachで繰り返し表示する',
      description: '本文です。',
    },
    {
      title: '変数などを出力するには=をつける',
      description: '本文です。',
    },
  ];
  res.render('articles/index', { text: articles });
});
// サーバーの起動（ルートパスの設定が必要）
app.listen('5000');
