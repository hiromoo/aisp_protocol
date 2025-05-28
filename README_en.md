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
