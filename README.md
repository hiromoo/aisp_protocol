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

2. **目的を自然言語で指示**
   - 例：「シンプルなToDoアプリを作って。タスクを追加・完了できるようにして。」

3. **AIからのAISP生成**
   - AIが `component`, `state`, `actions` などを含むAISP形式のJSONを出力します。

4. **出力の利用**
   - `examples/` に保存し、コード生成器やテンプレートと組み合わせてHTML/JSを生成
   - あるいは、別のAIにAISPを渡してコードやUIを出力させる

### 推奨プロンプト例（英語）

```
Please use the following JSON-based protocol to define a UI:

- "component": UI elements
- "state": dynamic values
- "actions": behaviors and logic
- "effect": changes to state or interaction
- "style": appearance information

Generate a ToDo App using this protocol.
```

### 利用シーン

- AIによるアプリUI自動設計
- 自然言語インターフェースでの設計作業
- 他のAI（エージェント）との構造的連携
