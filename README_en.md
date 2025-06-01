# AISP - AI Semantic Protocol

AISP (AI Semantic Protocol) is a unified, JSON-based protocol for describing both frontend UI and backend logic in a single file.  
It is designed for both human and AI consumption, supporting code generation, validation, and transformation.

## Features

- ✅ **Semantic UI Modeling**: Explicitly defines states, actions, effects, and styles
- 🤖 **AI-Friendly Format**: Designed for easy parsing and interpretation by AI models
- 🌐 **Language-Agnostic**: Can be mapped to HTML/CSS/JS, and potentially other platforms
- 🚀 **Extensible Design**: Allows expansion to backend logic and multi-agent protocols

## Project Structure

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
│   ├── component.json       # フロントエンド用スキーマ
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

- `/examples`: Only AISP-format sample JSON definitions
- `/frontend_sample`: Only static web app (HTML/CSS/JS)
- `/backend_sample`: Backend sample generated from AISP definitions
- `/schemas`: `frontend.json` (frontend schema), `backend.json` (backend schema), `aisp.json` (unified schema)

## Usage

- Reference the JSON file in `examples/` and feed it to an AI model or a compatible code generator.
- The contents of `public/` were generated based on AISP definitions and demonstrate a live example.

## Future Vision

The protocol is in active development. Planned directions include:

- Backend logic generation
- Multi-agent semantic communication
- Custom DSLs and GUI-based authoring tools
- Application to domain-specific UIs (education, healthcare, business)

We welcome feedback and contributions.

## 🤖 Using AISP with AI Chat Interfaces

AISP is designed as an intermediate language (IL) for structured communication between human intent and AI-driven application generation.

### How to Use with Chat-Based AI (e.g., ChatGPT)

1. **Introduce the Protocol**
   Tell the AI about the general structure of AISP:

   > "I'd like to define an application using a JSON-based protocol called AISP. It uses `component`, `state`, `actions`, `effect`, and `style` as its structure."

   For full details, see the GitHub repository:  
   👉 https://github.com/hiromoo/aisp_protocol

2. **Give Natural Language Instructions**
   Example: "Create a simple ToDo app with task input and completion toggling."

3. **Receive AISP JSON from AI**
   The AI should return structured JSON using the AISP format.

4. **Use the Output**
   - Save it to the `examples/` directory and use it with your code generator
   - Or feed it into another AI agent to render or interpret it

### Recommended Prompt Example

Please use the following JSON-based protocol to define a user interface:

- "component": UI elements
- "state": dynamic values
- "actions": behaviors and logic
- "effect": changes to state or interaction
- "style": appearance information

Refer to the full protocol specification here:  
👉 https://github.com/hiromoo/aisp_protocol

Now, using this format, generate a ToDo App.

### Prompt Example for Code Generation (AISP → HTML/JS)

Please convert the following AISP JSON definition into HTML and JavaScript.

- "component" should be rendered as HTML elements
- "state" should be handled as dynamic JS variables
- "actions" and "effect" should be implemented as event handlers
- "style" should be reflected as CSS

(See the AISP specification → https://github.com/hiromoo/aisp_protocol)

### Example Use Case (Web App Generation)

Please use the following AISP JSON definition to generate a web app (HTML, CSS, JavaScript):

AISP is a JSON-based intermediate language with the following structure:

- "component": UI structure (e.g., div, input, button)
- "state": state variables (e.g., task list, input value)
- "actions": event handling and logic (e.g., add task)
- "effect": behavior based on state (e.g., toggle completed tasks)
- "style": style information (e.g., CSS)

See the full specification: https://github.com/hiromoo/aisp_protocol

AISP definition:

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

Use this definition to generate a working ToDo app.

### Use Cases

- Automatic UI and logic generation by AI
- Conversational app design and validation
- Semantic structure exchange between multiple AIs

## 🛠 How to Generate an App from an AISP Definition

You can use the AISP definition files (e.g., `examples/todo_app.json`) included in this repository to generate HTML/JS apps.

### Step 1: Review the AISP JSON definition

The `examples/` folder contains app structures written in AISP.

```bash
examples/todo_app.json
```

### Step 2: Generate code based on the definition

Currently, the `public/` folder contains manually written HTML/CSS/JS based on the AISP definition.

In the future, tools or AI agents could be used to generate apps automatically from AISP.

### Step 3: Run the app

Simply open `public/index.html` in a browser to view the working app.

---

💡 Auto-generation tools from AISP definitions are planned for future versions.

# AISP Protocol (English)

## Overview

AISP (AI Semantic Protocol) is a unified, JSON-based protocol for describing both frontend UI and backend logic in a single file. It is designed for both human and AI consumption, supporting code generation, validation, and transformation.

## Unified Schema

- Unified schema (`schemas/aisp.json`) references frontend (`schemas/component.json`) and backend (`schemas/backend.json`) schemas using `$ref` and `definitions`.
- All schemas are compatible with standard JSON Schema tools.

## Example (Unified)

```json
{
  "component": {
    "component": "TodoApp",
    "children": [
      { "component": "TextInput", "bind": "newTaskTitle" },
      { "component": "Button", "onTap": "addTask", "text": "Add" }
    ]
  },
  "state": { "newTaskTitle": "", "tasks": [] },
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
      "description": "Add a new ToDo item",
      "parameters": [{ "name": "title", "type": "string", "required": true }],
      "responses": [
        { "status": 200, "body": { "id": "string", "title": "string" } }
      ],
      "auth": "jwt",
      "logic": "Save the ToDo to the DB and return the result"
    }
  ],
  "models": [
    {
      "name": "Todo",
      "schema": { "id": "string", "title": "string", "done": "boolean" },
      "description": "Data model for a ToDo item"
    }
  ],
  "auth": { "type": "jwt", "config": { "secret": "..." } },
  "effect": [{ "type": "log", "message": "ToDo API called" }]
}
```

## Schema Files

- Unified: `schemas/aisp.json`
- Frontend: `schemas/frontend.json`
- Backend: `schemas/backend.json`

## Notes

- All schemas use `definitions` for $ref compatibility.
- See `docs/specification.md` for full details and examples.

## Note on AI-based Automatic Generation

It is currently not possible to generate a fully working application (including frontend, backend, dependency packages, and configuration files) from only the AISP definition with a single step, due to the current limitations of AI and code generation tools.

- AISP is designed to describe platform-independent, semantic specifications.
- To generate a working application, you need to select implementation technologies, add dependency packages, and generate configuration files in addition to the AISP definition.
- In the future, as AI's reasoning, auto-correction, and implementation capabilities advance, it may become possible to generate a complete application from only the AISP definition.

At present, it is realistic to use the AISP definition as a base and supplement implementation and setup with human or AI assistance.
