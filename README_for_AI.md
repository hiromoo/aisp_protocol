# AISP Protocol (for AI Agents)

## Overview

AISP (AI Semantic Protocol) provides a unified, machine-readable JSON format for describing both frontend UI and backend logic. This enables AI agents to:

- Parse and generate application structure, state, actions, style, API endpoints, data models, authentication, and effects from a single file.
- Transform, validate, and reason about app semantics for code generation, UI/UX improvement, or backend logic synthesis.

## Unified Schema

- The unified schema (`schemas/aisp.json`) references frontend (`schemas/frontend.json`) and backend (`schemas/backend.json`) schemas using `$ref` and `definitions`.
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

## Usage for AI

- Use the unified schema to reason about both UI and backend logic.
- Generate, validate, or transform app definitions for any target platform.
- See `docs/specification.md` for full details.

## Input Format

AI agents should expect structured JSON input files following the AISP schema.

```json
{
  "component": "TodoApp",
  "state": {
    "tasks": []
  },
  "actions": {
    "addTask": {
      "effect": [...]
    }
  }
}
```

## Expected Capabilities

An AI agent consuming this protocol should be able to:

- Parse and understand the UI structure and behavioral logic
- Generate platform-specific code (e.g., HTML, JS, CSS)
- Translate between natural language and protocol definitions
- Reason about UX flow and application logic

## Suggested Use

- Code generation agents
- Interface designers
- Multi-agent planning systems
- Autonomous UI test generators

## Extensions

This protocol can be extended with domain-specific components or backend logic definitions.

## Format

All files are UTF-8 encoded JSON or Markdown.

---

For additional guidance, refer to `docs/specification.md` or contact the human developer.

```
aisp_protocol/
├── README.md                # Overview in Japanese
├── README_en.md             # Overview in English
├── LICENSE                  # MIT License
├── README_for_AI.md         # Meta description for AI agents
├── docs/
│   └── specification.md     # Official protocol specification
├── schemas/
│   ├── aisp.json            # Unified schema
│   ├── component.json       # Frontend schema
│   └── backend.json         # Backend schema
├── examples/
│   └── todo_app.json        # AISP sample definition
├── frontend_sample/
│   ├── todo_app.html        # Static web app (generated from AISP)
│   ├── app.js
│   └── style.css
└── backend_sample/
    └── server.js            # Backend sample generated from AISP definitions
```

- `/examples`: Only AISP-format sample JSON definitions
- `/frontend_sample`: Only static web app (HTML/CSS/JS)
- `/backend_sample`: Backend sample generated from AISP definitions
- `/schemas`: `frontend.json` (frontend schema), `backend.json` (backend schema), `aisp.json` (unified schema)
