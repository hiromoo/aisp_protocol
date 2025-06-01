# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Reactサンプル（frontend_sample/react）利用時の注意

- このアプリはJWT認証を利用しています。ToDo APIを利用するには、事前にトークンをlocalStorageへセットする必要があります。
- トークンは `/api/login` エンドポイントにユーザー名をPOSTすることで取得できます。
- 例：ブラウザの開発者ツールで下記を実行してください。

```js
fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "testuser" })
})
  .then(res => res.json())
  .then(data => localStorage.setItem("token", data.token));
```

- トークンがセットされていれば、ToDoの取得・追加・更新が可能です。
- バックエンドサーバー（backend_sample/server.js）が起動していることもご確認ください。
