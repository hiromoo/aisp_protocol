# AISP - AI Semantic Protocol

AISP (AI Semantic Protocol) is a semantically structured intermediate language designed collaboratively by humans and AI.  
It defines application UI, state, user interaction, and behavior in a structured JSON format, enabling both interpretation and generation by AI systems.

## Features

- ✅ **Semantic UI Modeling**: Explicitly defines states, actions, effects, and styles
- 🤖 **AI-Friendly Format**: Designed for easy parsing and interpretation by AI models
- 🌐 **Language-Agnostic**: Can be mapped to HTML/CSS/JS, and potentially other platforms
- 🚀 **Extensible Design**: Allows expansion to backend logic and multi-agent protocols

## Project Structure

```
aisp_protocol/
├── README.md                # Overview in Japanese
├── README_en.md             # Overview in English
├── LICENSE                  # MIT License
├── README_for_AI.md         # Meta description for AI agents
├── docs/
│   └── specification.md     # Formal protocol specification
├── schemas/
│   └── component.json       # JSON schema definition
├── examples/
│   └── todo_app_with_style.json  # Sample implementation (ToDo App)
└── public/
    ├── todo_app.html
    ├── app.js
    └── style.css
```

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

AISP is designed as an intermediate language (IL) that enables structured communication between human intentions and AI-driven application generation.  
It allows users to describe UI structure, state, behavior, and styles using a JSON-based semantic format.

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



### Example Prompt (Recommended)

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
- "style" should be applied as CSS

(Refer to the AISP spec → https://github.com/hiromoo/aisp_protocol)



### Full Prompt Example (Generating a Web App)

Use the following AISP JSON definition to generate a complete web application (HTML, CSS, and JavaScript).

AISP is a JSON-based intermediate language structured as follows:

- "component": UI layout (e.g., div, input, button)
- "state": state variables (e.g., task list, input value)
- "actions": event handlers and logic (e.g., add task)
- "effect": state-dependent updates (e.g., rerender task list)
- "style": visual appearance (similar to CSS)

Spec: https://github.com/hiromoo/aisp_protocol

AISP definition:
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
        "text": "Add"
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

Use this definition to generate a functional ToDo application.


### Use Cases

This protocol can be applied in the following scenarios:

- Automatic UI and logic generation by AI
- Conversational app design and validation
- Semantic structure exchange between multiple AI agents

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
