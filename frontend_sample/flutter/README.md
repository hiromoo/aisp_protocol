# flutter_todo

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

# Flutter 版 AISP ToDo サンプル

このディレクトリは、AISP todo_app.json 定義に準拠した Flutter 製 ToDo アプリのサンプルです。

## 機能

- JWT 認証対応（トークンは shared_preferences の `token` キーから取得）
- `/api/todo` エンドポイントへのタスク一覧取得・追加・完了トグル
- シンプルな UI

## 使い方

1. 依存パッケージのインストール

   ```sh
   flutter pub get
   ```

2. JWT トークンのセット

   - バックエンド API `/api/login` にユーザー名を POST し、返却された `token` を取得してください。
   - 例: ブラウザや curl で
     ```sh
     curl -X POST http://localhost:3001/api/login -H "Content-Type: application/json" -d '{"username":"testuser"}'
     ```
   - 取得したトークンを Flutter アプリの `shared_preferences` に保存してください。
     - 例: デバッグコンソールで
     ```dart
     import 'package:shared_preferences/shared_preferences.dart';
     SharedPreferences.getInstance().then((prefs) => prefs.setString('token', '取得したトークン'));
     ```

3. アプリの起動

   - Web の場合
     ```sh
     flutter run -d chrome
     ```
   - モバイル/デスクトップも可

4. ToDo の取得・追加・完了トグルが可能です。

## 注意

- バックエンドサーバー（backend_sample/server.js）が http://localhost:3001 で起動している必要があります。
- API エンドポイントや認証方式は AISP サンプル仕様に準拠しています。

---

何か問題があれば、README や main.dart を参照してください。
