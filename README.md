# AISP - AI Semantic Protocol

AISP（AI Semantic Protocol）は、AIと人間の協働によって設計された意味ベースの中間言語プロトコルです。  
このプロトコルは、アプリケーションUIや状態遷移、ユーザー操作の意味的な構造をJSON形式で記述し、  
AIシステムがこれを解釈・生成・共有するための共通基盤となることを目指しています。

## 特徴

- ✅ **意味構造に基づいたUI設計**：状態・操作・副作用・スタイルを明示的に記述
- 🤖 **AIによる解釈・生成が容易**：構文だけでなく意味に基づいた構造
- 🌐 **言語・プラットフォーム非依存**：HTML/CSS/JavaScriptだけでなく、他言語への拡張も視野
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
│   └── component.json       # JSON Schemaによる構造定義
├── examples/
│   └── todo_app_with_style.json  # 実装例（ToDoアプリ）
└── public/
    ├── todo_app.html
    ├── app.js
    └── style.css
```

## 使い方

- `examples/` にある JSON ファイルを参照し、任意のAIモデルやコードジェネレータに読み込ませてください
- `public/` ディレクトリのHTML/CSS/JSは AISP 定義をもとに自動生成されたサンプルアプリです

## 貢献・今後の展望

このプロトコルは現在も進化の途中にあります。以下の拡張を視野に入れています：

- バックエンドロジックの構造表現
- マルチエージェント間での意味共有プロトコル化
- 専用のDSLやGUIビルダーの構築
- ドメイン特化UI（教育・医療・業務アプリ等）への応用

ぜひフィードバックや提案をお寄せください。




## 🤖 AIチャットからAISPを活用するには

AISPは、構造化されたアプリ定義をAIとやり取りするための「中間言語（Intermediate Language）」として設計されています。  
ChatGPTや他の大規模言語モデルにAISPを認識させることで、自然言語からアプリの構造定義を直接生成・編集できます。

### 利用手順

1. **プロトコルの導入**
   - 以下のようにプロンプトでAIにAISPの概要を伝えます：

     > 「AISPというJSON形式の中間言語を使ってアプリを構成したいです。UIは`component`で、状態は`state`、操作は`actions`、副作用は`effect`、スタイルは`style`という構造です。」

   - 詳細はGitHubリポジトリをご覧ください：  
     👉 https://github.com/hiromoo/aisp_protocol

2. **目的を自然言語で指示**
   - 例：「シンプルなToDoアプリを作って。タスクを追加・完了できるようにして。」

3. **AIからのAISP生成**
   - AIが `component`, `state`, `actions` などを含むAISP形式のJSONを出力します。

4. **出力の利用**
   - `examples/` に保存し、コード生成器やテンプレートと組み合わせてHTML/JSを生成
   - あるいは、別のAIにAISPを渡してコードやUIを出力させる



### 推奨プロンプト例（日本語）

以下のJSON形式のプロトコル「AISP」を使ってUIを定義してください：

- "component"：UI要素
- "state"：状態データ
- "actions"：操作・ロジック
- "effect"：状態やUIへの変化
- "style"：見た目の情報

仕様の詳細はこちらを参照してください：  
👉 https://github.com/hiromoo/aisp_protocol

この形式を使って、ToDoアプリを生成してください。

### コード生成用プロンプト例（AISP → HTML/JS）

以下のAISP形式のJSON定義をもとに、HTMLとJavaScriptのコードを生成してください。

- "component" はHTMLの要素として再現してください
- "state" は変数やデータとしてJavaScriptで管理してください
- "actions" や "effect" はイベントハンドラとして表現してください
- "style" はCSSとして反映してください

（AISPの仕様はこちら → https://github.com/hiromoo/aisp_protocol）



### 実際のプロンプト例（Webアプリ生成）

以下のAISP形式のJSON定義を使って、Webアプリ（HTML, CSS, JavaScript）を生成してください。

AISPは、次の構造を持つJSONベースの中間言語です：

- "component": UI構造（例: div, input, button など）
- "state": 状態の変数（例: タスク一覧、入力値）
- "actions": イベント処理や操作（例: タスクを追加）
- "effect": 状態に基づく挙動（例: 完了済みタスクの表示切替）
- "style": スタイル情報（例: CSS相当）

仕様の詳細はこちら： https://github.com/hiromoo/aisp_protocol

AISP定義：
```json
{
  "component": {
    "tag": "div",
    "id": "app",
    "children": [
      {
        "tag": "input",
        "id": "taskInput"
      },
      {
        "tag": "button",
        "id": "addButton",
        "text": "追加"
      },
      {
        "tag": "ul",
        "id": "taskList"
      }
    ]
  },
  "state": {
    "tasks": []
  },
  "actions": {
    "addTask": {
      "on": "click",
      "target": "addButton",
      "do": {
        "push": {
          "state": "tasks",
          "value": "taskInput.value"
        }
      }
    }
  },
  "effect": {
    "on": "tasks",
    "update": "taskList"
  },
  "style": {
    "#app": {
      "maxWidth": "400px",
      "margin": "0 auto",
      "fontFamily": "sans-serif"
    }
  }
}
```

この定義を使って、実際に動作するToDoアプリを構成してください。


### 利用シーン

このプロトコルは以下のような場面で活用できます：

- AIによるUIやロジックの自動生成
- 会話形式でのアプリ設計・検証
- 複数のAI間での意味的な構造の受け渡し

## 🛠 AISP定義ファイルからアプリを生成する手順

このリポジトリに含まれるAISP定義ファイル（例: `examples/todo_app.json`）を使って、UIをHTML/JSで生成するには以下のような手順をとります：

### ステップ 1: AISP定義ファイルを確認

`examples/` フォルダ内の JSON ファイルは、アプリの構造をAISP形式で記述しています。

```bash
examples/todo_app.json
```

### ステップ 2: 定義をもとにコードを生成

現在はサンプルコード（`public/`フォルダ）として、AISP定義を反映したHTML/JSを手動で作成しています。

将来的には、AISP定義から自動的にコードを生成するスクリプトやAIエージェントとの連携も可能です。

### ステップ 3: アプリを実行

生成された `public/index.html` をブラウザで開くことで、アプリとして動作を確認できます。

---

💡 今後、AISP → コード生成を自動化するツールの追加も予定しています。
