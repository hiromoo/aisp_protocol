// AISP統合スキーマ（examples/todo_app_with_style.json）に基づくNode.js（Express）+ JWT認証のサンプルAPI

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 簡易メモリDB
let todos = [];
let nextId = 1;

// JWT認証用シークレット
const JWT_SECRET = 'your_jwt_secret';

// 認証ミドルウェア
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// ログインAPI（テスト用）
app.post('/api/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'username required' });
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// ToDo追加API（ユーザーごとに分離）
app.post('/api/todo', authenticateToken, (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  const todo = { id: String(nextId++), title, done: false, userId: req.user.username };
  todos.push(todo);
  console.log('ToDo API called'); // effect: log
  res.status(200).json(todo);
});

// ToDo一覧取得API（ユーザーごとに分離）
app.get('/api/todo', authenticateToken, (req, res) => {
  const userTodos = todos.filter(t => t.userId === req.user.username);
  res.json(userTodos);
});

// ToDo完了切替API（ユーザーごとに分離）
app.patch('/api/todo/:id', authenticateToken, (req, res) => {
  const todo = todos.find(t => t.id === req.params.id && t.userId === req.user.username);
  if (!todo) return res.status(404).json({ error: 'not found' });
  todo.done = !todo.done;
  res.json(todo);
});

// サーバ起動
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`AISP ToDo API server running on port ${PORT}`);
});
