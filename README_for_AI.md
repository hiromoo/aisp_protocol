# AI Agent Usage Guide (Meta)

This repository provides a protocol and sample code for AI agents to interpret, generate, and transform application structures using AISP (AI Semantic Protocol).

## What is AISP?

AISP (AI Semantic Protocol) is a unified, JSON-based protocol for describing both frontend UI and backend logic in a single file. It is designed for both human and AI consumption, supporting code generation, validation, and transformation.

### Key Concepts

- **component**: UI structure (e.g., div, input, button, TextInput, etc.)
- **state**: state variables (e.g., task list, input value)
- **actions**: event handling and logic (e.g., add task)
- **effect**: behavior based on state (e.g., toggle completed tasks)
- **style**: style information (e.g., CSS or widget properties)

## Directory Overview

- `frontend_sample/` includes:
  - `html/`: Static Web App (HTML/CSS/JS)
  - `react/`: React sample
  - `flutter/`: Flutter sample
- `backend_sample/`: Server code samples generated from AISP definitions
- `examples/`: AISP-format JSON sample definitions
- `schemas/`: JSON schemas for frontend, backend, and integrated AISP

## How to Use for AI

1. **Load the JSON files in `examples/` into your AI model or code generator.**
2. **Use the samples in `frontend_sample/` and `backend_sample/` as reference implementations generated from AISP definitions.**
3. **The structure of each sample (component, state, actions, effect, style) directly reflects the AISP definition.**

## Recommended Prompts for AI

- "Please generate an AISP JSON definition for a ToDo app with task input and completion."
- "Convert the following AISP JSON into React code."
- "Convert the following AISP JSON into Flutter code."

## Example: AISP Definition (ToDo App)

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

## Typical AI Agent Workflow

1. **Prompt the AI with your app requirements and the AISP protocol structure.**
2. **AI generates an AISP JSON definition.**
3. **Feed the AISP JSON to a code generator or another AI to produce code for HTML/JS, React, Flutter, or backend.**
4. **Use the generated code as a starting point for your application.**

## Reference

- For protocol details and more examples, see the root `README.md` (Japanese) or `README_en.md` (English).
- See also `docs/specification.md` for the full protocol specification.
