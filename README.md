# Chisa desktop client (fork of Open-LLM-VTuber-Web)

Branch `chisa` adds:

- **Global cursor tracking** — the main process streams the cursor position (~30 fps) to the renderer,
  which aims the Live2D gaze from the model's head toward the cursor anywhere on the screen.
- **One-shot screenshot for proactive speech** — when the character speaks up on her own,
  a single downscaled screenshot is attached so she can comment on what is on the screen
  (no continuous screen stream needed).

Backend: [chisa-ai-companion](https://github.com/HubenkoDias/chisa-ai-companion), branch `chisa`.
Licensed under the Open-LLM-VTuber License 1.0 (Apache 2.0 with additional conditions) —
non-commercial use only, see [LICENSE](LICENSE).

---

# Open LLM Vtuber

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
