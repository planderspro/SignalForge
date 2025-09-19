# SignalForge Project Overview

## Purpose
SignalForge is a web-based Digital Signal Processing (DSP) application designed to provide a powerful, efficient, and fully-featured audio processing environment. The application uses a node-based architecture for creating and manipulating audio signals.

## Tech Stack
- **Frontend**: TypeScript with Lit web components
- **Build System**: Vite for fast development and optimized builds  
- **Audio Engine**: Web Audio API with AudioWorklet for custom processing
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## Key Dependencies
- `lit`: Web components framework
- `vite`: Build tool and dev server
- `typescript`: TypeScript compiler
- `vitest`: Unit testing framework
- `@playwright/test`: E2E testing
- `eslint`: Code linting
- `@typescript-eslint/*`: TypeScript ESLint plugins

## Node Version
- Requires Node.js >= 18.0.0
- CI/CD runs on Node 18 and 20

## Audio-Specific Features
- AudioWorklet support for real-time audio processing
- SharedArrayBuffer enabled via COOP/COEP headers
- Specialized audio quality checks in CI
- Performance monitoring for audio applications