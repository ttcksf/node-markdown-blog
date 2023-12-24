const express = require('express');
// ルーターオブジェクトを作成(router.get('/', ...) のように、ルートパスと処理内容を指定して、ルーティングを設定)
const router = express.Router();
router.get('/new', (req, res) => {
  // res.send('articles');
  res.render('articles/new');
});
// エクスポート
module.exports = router;
