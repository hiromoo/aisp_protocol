# frontend_sample ディレクトリについて

このディレクトリには、AISP 定義をもとに作成された各種フロントエンドサンプルが含まれています。

- `html/`：静的 Web アプリ（HTML/CSS/JS）サンプル
- `react/`：React 用サンプル
- `flutter/`：Flutter 用サンプル

各サンプルは `examples/` ディレクトリの AISP 形式 JSON 定義をもとに生成・実装されています。

---

# サンプルの使い方

- `html/`：`todo_app.html` をブラウザで開くと ToDo アプリの動作を確認できます。
- `react/`：`npm install && npm run dev` でローカルサーバを起動し、`http://localhost:5173` で動作確認できます。
- `flutter/`：Flutter 環境で `flutter run -d chrome` などを実行し、Web または各プラットフォームで動作確認できます。

---

# 備考

- それぞれのサンプルは AISP 定義の構造（component, state, actions, effect, style）を反映しています。
- 詳細な仕様や AISP 定義例はリポジトリのルート `README.md` を参照してください。
