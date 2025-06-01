# AISP - AI Semantic Protocol

AISP（AI Semantic Protocol）は、フロントエンド（UI）とバックエンド（API・データモデル・認証・副作用）を統合的に記述できる JSON ベースの中間言語プロトコルです。AI と人間の双方がアプリの意味構造を一元的に解釈・生成・変換できることを目指しています。

## 特徴

- ✅ **意味構造に基づいた UI 設計**：状態・操作・副作用・スタイルを明示的に記述
- 🤖 **AI による解釈・生成が容易**：構文だけでなく意味に基づいた構造
- 🌐 **言語・プラットフォーム非依存**：HTML/CSS/JavaScript だけでなく、他言語への拡張も視野
- 🚀 **拡張可能な仕様設計**：バックエンドや複雑なロジック表現への発展も可能

## ディレクトリ構成

```
aisp_protocol/
├── README.md                # 日本語による概要説明
├── README_en.md             # 英語による概要説明
├── LICENSE                  # MITライセンス
├── README_for_AI.md         # AIエージェント向けメタ説明
├── docs/
│   └── specification.md     # プロトコルの正式仕様書
├── schemas/
│   ├── aisp.json            # 統合スキーマ
│   ├── frontend.json        # フロントエンド用スキーマ
│   └── backend.json         # バックエンド用スキーマ
├── examples/
│   └── todo_app.json        # AISP形式のサンプル定義
├── frontend_sample/
│   ├── todo_app.html        # 静的Webアプリ（AISP定義から生成）
│   ├── app.js
│   └── style.css
└── backend_sample/
    └── server.js            # AISP定義から生成されたバックエンドサンプル
```

- `/examples`：AISP 形式のサンプル JSON 定義のみ
- `/frontend_sample`：静的 Web アプリ（HTML/CSS/JS）のみ
- `/backend_sample`：AISP 定義から生成されたバックエンド等の参考実装
- `/schemas`：`frontend.json`（フロントエンドスキーマ）、`backend.json`（バックエンドスキーマ）、`aisp.json`（統合スキーマ）

## 使い方

- `examples/` にある JSON ファイルを参照し、任意の AI モデルやコードジェネレータに読み込ませてください
- `frontend_sample/`・`backend_sample/` ディレクトリの HTML/CSS/JS・サーバコードは AISP 定義をもとに作成されたサンプルです

## 今後の展望

このプロトコルは現在も進化の途中にあります。以下の拡張を視野に入れています：

- バックエンドロジックの自動生成
- マルチエージェント間での意味共有プロトコル化
- 専用の DSL や GUI ビルダーの構築
- ドメイン特化 UI（教育・医療・業務アプリ等）への応用

ぜひフィードバックや提案をお寄せください。

## 🤖 AI チャットから AISP を活用するには

AISP は、構造化されたアプリ定義を AI とやり取りするための「中間言語（Intermediate Language）」として設計されています。
ChatGPT や他の大規模言語モデルに AISP を認識させることで、自然言語からアプリの構造定義を直接生成・編集できます。

### 利用手順

1. **プロトコルの導入**

   - 以下のようにプロンプトで AI に AISP の概要を伝えます：

     > 「AISP という JSON 形式の中間言語を使ってアプリを構成したいです。UI は`component`で、状態は`state`、操作は`actions`、副作用は`effect`、スタイルは`style`という構造です。」

   - 詳細は GitHub リポジトリをご覧ください：  
     👉 https://github.com/hiromoo/aisp_protocol

2. **目的を自然言語で指示**

   - 例：「シンプルな ToDo アプリを作って。タスクを追加・完了できるようにして。」

3. **AI からの AISP 生成**

   - AI が `component`, `state`, `actions` などを含む AISP 形式の JSON を出力します。

4. **出力の利用**
   - `examples/` に保存し、コード生成器やテンプレートと組み合わせて HTML/JS を生成
   - あるいは、別の AI に AISP を渡してコードや UI を出力させる

### 推奨プロンプト例（日本語）

以下の JSON 形式のプロトコル「AISP」を使ってアプリを定義してください：

- "component"：UI 要素
- "state"：状態データ
- "actions"：操作・ロジック
- "effect"：状態や UI への変化
- "style"：見た目の情報

仕様の詳細はこちらを参照してください：  
👉 https://github.com/hiromoo/aisp_protocol

この形式を使って、ToDo アプリを生成してください。

### コード生成用プロンプト例（AISP → HTML/JS）

以下の AISP 形式の JSON 定義をもとに、HTML と JavaScript のコードを生成してください。

- "component" は HTML の要素として再現してください
- "state" は変数やデータとして JavaScript で管理してください
- "actions" や "effect" はイベントハンドラとして表現してください
- "style" は CSS として反映してください

（AISP の仕様はこちら → https://github.com/hiromoo/aisp_protocol）

### 実際のプロンプト例（Web アプリ生成）

以下の AISP 形式の JSON 定義を使って、Web アプリ（HTML, CSS, JavaScript）を生成してください。

AISP は、次の構造を持つ JSON ベースの中間言語です：

- "component": UI 構造（例: div, input, button など）
- "state": 状態の変数（例: タスク一覧、入力値）
- "actions": イベント処理や操作（例: タスクを追加）
- "effect": 状態に基づく挙動（例: 完了済みタスクの表示切替）
- "style": スタイル情報（例: CSS 相当）

仕様の詳細はこちら： https://github.com/hiromoo/aisp_protocol

AISP 定義：

```json
{
  "component": {
    "component": "div",
    "id": "app",
    "children": [
      { "component": "input", "id": "taskInput" },
      { "component": "button", "id": "addButton", "text": "Add" },
      { "component": "ul", "id": "taskList" }
    ]
  },
  "state": { "tasks": [] },
  "actions": {
    "addTask": {
      "on": "click",
      "target": "addButton",
      "do": {
        "push": { "state": "tasks", "value": "taskInput.value" }
      }
    }
  },
  "effect": { "on": "tasks", "update": "taskList" },
  "style": {
    "#app": {
      "maxWidth": "400px",
      "margin": "0 auto",
      "fontFamily": "sans-serif"
    }
  }
}
```

この定義を使って、実際に動作する ToDo アプリを構成してください。

### 利用シーン

このプロトコルは以下のような場面で活用できます：

- AI による UI やロジックの自動生成
- 会話形式でのアプリ設計・検証
- 複数の AI 間での意味的な構造の受け渡し

## 🛠 AISP 定義ファイルからアプリを生成する手順

このリポジトリに含まれる AISP 定義ファイル（例: `examples/todo_app.json`）を使って、UI（`frontend_sample/`）とバックエンド API（`backend_sample/`）を生成・実行するには以下のような手順をとります：

### ステップ 1: AISP 定義ファイルを確認

`examples/` フォルダ内の JSON ファイルは、アプリの構造・API 仕様を AISP 形式で記述しています。

```bash
examples/todo_app.json
```

### ステップ 2: 定義をもとにコードを生成

現在はサンプルコード（`frontend_sample/` および `backend_sample/` フォルダ）として、AISP 定義を反映した HTML/JS と Node.js/Express サーバを手動で作成しています。

将来的には、AISP 定義から自動的にフロントエンド・バックエンドのコードを生成するスクリプトや AI エージェントとの連携も可能です。

### ステップ 3: アプリを実行

- `frontend_sample/todo_app.html` をブラウザで開くことでフロントエンドアプリとして動作を確認できます。
- `backend_sample/server.js` を Node.js で起動することで API サーバが動作します。

---

💡 今後、AISP → コード生成を自動化するツールの追加も予定しています。

## 統合スキーマの特徴

- 統合スキーマ（`schemas/aisp.json`）は、フロントエンド（`schemas/frontend.json`）とバックエンド（`schemas/backend.json`）のスキーマを JSON Schema の`$ref`と`definitions`で参照します。
- UI 構造・状態・アクション・スタイル・API エンドポイント・データモデル・認証・副作用を 1 つの JSON ファイルで記述できます。

### 主な要素

- `component`: UI コンポーネントの階層構造
- `state`: アプリの状態変数
- `actions`: ユーザーやシステムのアクション
- `style`: UI スタイル
- `endpoints`: API エンドポイント
- `models`: データモデル
- `auth`: 認証・認可
- `effect`: 副作用や外部連携

### 統合例

```json
{
  "component": {
    "component": "TodoApp",
    "children": [
      { "component": "TextInput", "bind": "newTaskTitle" },
      { "component": "Button", "onTap": "addTask", "text": "Add" }
    ]
  },
  "state": {
    "newTaskTitle": "",
    "tasks": []
  },
  "actions": {
    "addTask": {
      "effect": [
        {
          "push": {
            "to": "tasks",
            "value": { "title": "$newTaskTitle", "done": false }
          }
        },
        { "set": { "newTaskTitle": "" } }
      ]
    }
  },
  "style": {
    "TextInput": { "border": "1px solid #ccc", "padding": "8px" },
    "Button": {
      "background": "#007bff",
      "color": "white",
      "padding": "8px 12px"
    }
  },
  "endpoints": [
    {
      "path": "/api/todo",
      "method": "POST",
      "description": "新しいToDoを追加",
      "parameters": [{ "name": "title", "type": "string", "required": true }],
      "responses": [
        { "status": 200, "body": { "id": "string", "title": "string" } }
      ],
      "auth": "jwt",
      "logic": "DBにToDoを保存し、結果を返す"
    }
  ],
  "models": [
    {
      "name": "Todo",
      "schema": { "id": "string", "title": "string", "done": "boolean" },
      "description": "ToDoアイテムのデータモデル"
    }
  ],
  "auth": {
    "type": "jwt",
    "config": { "secret": "..." }
  },
  "effect": [{ "type": "log", "message": "ToDo追加APIが呼ばれた" }]
}
```

## スキーマファイル

- 統合スキーマ: `schemas/aisp.json`
- フロントエンド: `schemas/frontend.json`
- バックエンド: `schemas/backend.json`

## 備考

- すべてのスキーマは`definitions`形式で$ref 参照に対応しています。
- 詳細や他の例は`docs/specification.md`を参照してください。
- このプロトコルは進化中です。ご意見・ご提案を歓迎します。

## 注意事項（AI による自動生成について）

AISP 定義（このプロトコル）のみから「一発で完全に動作するアプリ（フロントエンド・バックエンド・依存パッケージ・設定ファイル含む）」を自動生成するには、現状の AI や自動生成ツールの能力では限界があります。

- AISP はプラットフォーム非依存・意味的仕様の記述を目的としています。
- 実際に動作するアプリを生成するには、AISP 定義に加えて「実装技術の選定」「依存パッケージの追加」「設定ファイルの生成」などが必要です。
- 今後 AI の推論・自動修正・実装力が発展すれば、AISP 定義だけで完全なアプリを一発生成できる可能性があります。

現時点では、AISP 定義をもとに人間または AI が実装・セットアップを補助する運用が現実的です。
