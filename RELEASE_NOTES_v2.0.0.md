# v2.0.0 リリースノート

## 概要
AISP Protocol v2.0.0 は、スキーマ・ディレクトリ・サンプル・ドキュメントの大幅な統一・整理を行ったメジャーアップデートです。特に、**バックエンドのAISP定義（API・データモデル・認証・副作用など）の正式導入・統合**が大きな特徴です。従来バージョン（v1系）との後方互換性はありません。

---

## 主な変更点

- **バックエンドAISP定義の正式導入・統合**
  - バックエンド（APIエンドポイント、データモデル、認証、effect等）をAISP定義で一元的に記述可能に
  - `schemas/backend.json` の整備と統合スキーマ（`schemas/aisp.json`）での $ref 参照
  - サンプルやドキュメントもバックエンド定義を含めて統一

- **スキーマの統一・リネーム**
  - `schemas/component.json` → `schemas/frontend.json` にリネーム
  - `schemas/aisp.json`（統合スキーマ）で frontend/backend を $ref 参照
  - すべてのスキーマで definitions 形式を採用

- **サンプルJSONの統一**
  - サンプル定義のキーを `"tag"` → `"component"` に統一
  - サンプルのテキストも英語表記（"Add" など）に統一
  - `/examples/todo_app.json` を正規サンプルとし、ユーザーごとのToDo分離（userIdフィールド）も反映

- **ディレクトリ構成の整理**
  - `/public` `/samples` ディレクトリを削除し、`/frontend_sample` `/backend_sample` のみをサンプルコード格納先に
  - `/schemas` `/examples` `/frontend_sample` `/backend_sample` の役割を明確化

- **ドキュメントの全面更新**
  - `README.md`（日本語）・`README_en.md`（英語）・`README_for_AI.md`・`docs/specification.md` すべてを最新構成・サンプル・注意事項に統一
  - サンプルJSONやファイル名、注意事項（AIによる自動生成の限界）もすべて最新化

- **サンプルコードのアップデート**
  - `/backend_sample/server.js`：JWT認証・ユーザーごとのToDo分離に対応
  - `/frontend_sample/app.js`・`todo_app.html`：API連携・ユーザーごとデータ対応

---

## 互換性について
- v1系（旧スキーマ・旧サンプル）との互換性はありません。
- 旧バージョンから移行する場合は、サンプルJSONやスキーマ参照、ディレクトリ名の修正が必要です。

---

## 注意事項
- **AISP定義のみで完全なアプリ（フロント・バックエンド・依存パッケージ・設定含む）を一発生成することは現状のAI技術では困難です。**
- **AISPは意味構造・プラットフォーム非依存の仕様記述を目的としています。実装には追加のセットアップが必要です。**

---

## 今後の展望
- **コード自動生成ツールやAIエージェント連携の強化**
- **マルチエージェント・ドメイン特化UI・GUIビルダー等への拡張**

---

ご意見・ご要望はGitHub IssueまたはDiscussionsまでお寄せください。
