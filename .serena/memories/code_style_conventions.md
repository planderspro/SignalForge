# SignalForge Code Style and Conventions

## TypeScript Configuration
- Target: ES2022
- Module: ESNext 
- Strict mode enabled
- No unused locals/parameters allowed
- Experimental decorators enabled for Lit components

## ESLint Rules (Current Issues)
**PROBLEM**: ESLint is currently misconfigured:
- Only lints JS files (.js, .jsx) but ignores TypeScript files
- TypeScript files are explicitly ignored in .eslintrc.cjs
- Has TypeScript ESLint dependencies but doesn't use them

## Code Style Guidelines
- Use `const` over `let` when possible (`prefer-const` rule)
- No `var` declarations (`no-var` rule)
- Unused variables should be prefixed with `_` 
- Modern ES2022+ features encouraged

## Project Structure
```
src/
├── components/     # Reusable UI components (Lit web components)
├── nodes/         # Audio node implementations
├── audio/         # Audio engine and worklets  
├── canvas/        # Node editor canvas
├── scripting/     # Audio scripting engine
├── state/         # Application state management
├── types/         # TypeScript type definitions
└── utils/         # Shared utilities
```

## Audio-Specific Conventions
- AudioWorklet files should avoid real-time violations:
  - No console.log, alert, setTimeout, DOM APIs
  - Avoid dynamic memory allocation (new, push, splice)
  - Pre-allocate buffers for performance

## Import Aliases
- `@/*` maps to `./src/*`
- `@/components/*` maps to `./src/components/*`
- Similar aliases for all main directories