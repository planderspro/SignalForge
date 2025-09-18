# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SignalForge is a web-based Digital Signal Processing (DSP) application designed to provide a powerful, efficient, and fully-featured audio processing environment. The application uses a node-based architecture for creating and manipulating audio signals.

## Project Goal

Create a modern web-based DSP application that allows users to build complex audio processing chains through an intuitive visual node editor interface.

## Core Requirements

### Architecture
- **Node-based composition**: The application is built around "Nodes" - instances of audio processing units
- **Multiple I/O support**: Each node supports multiple inputs and outputs for flexible signal routing
- **Signal flow**: Audio signals originate from source nodes, flow through processing nodes, and reach output nodes
- **Subroutine nodes**: Users can encapsulate multiple nodes into reusable subroutine nodes
- **Real-time processing**: All audio processing must be efficient and suitable for real-time operation

### Node Types
- **Source nodes**: External audio sources (YouTube, Pandora, Tidal, file uploads, microphone)
- **Effect nodes**: Audio processing (filters, reverb, delay, distortion, compression, etc.)
- **Analyzer nodes**: Signal analysis and visualization (spectrum analyzer, oscilloscope, meters)
- **Output nodes**: Audio destinations (speakers, headphones, file export)
- **Control nodes**: Parameter automation and modulation
- **Custom nodes**: User-created nodes via visual designer and scripting engine

### Visual Node Designer
- **Drag-and-drop interface**: Intuitive node placement and connection
- **Real-time feedback**: Visual representation of signal flow and levels
- **Parameter controls**: Direct manipulation of node parameters
- **Node library**: Organized collection of available nodes
- **Canvas workspace**: Unlimited workspace for complex compositions
- **Zoom and pan**: Navigation for large projects

### Audio Scripting Engine
- **Simplified syntax**: Easy-to-learn scripting language for custom audio effects
- **DSP primitives**: Built-in functions for common DSP operations
- **Parameter mapping**: Connect script parameters to UI controls
- **Real-time compilation**: Hot-reload scripts without interrupting audio
- **Safety sandboxing**: Secure execution environment for user scripts

### External Source Integration
- **YouTube integration**: Stream audio from YouTube videos
- **Streaming services**: Support for Pandora, Tidal, and other platforms
- **File support**: WAV, MP3, OGG, and other common audio formats
- **Microphone input**: Real-time audio input from user's microphone
- **MIDI support**: MIDI controllers for parameter automation

## Technical Specifications

### Technology Stack
- **Frontend**: Modern JavaScript/TypeScript with Web Components
- **Audio Engine**: Web Audio API with AudioWorklet for custom processing
- **Build System**: Vite for fast development and optimized builds
- **Canvas Rendering**: Hybrid DOM/Canvas approach for optimal performance
- **State Management**: Simple reactive state management
- **Testing**: Comprehensive unit, integration, and E2E test coverage

### Performance Requirements
- **Low latency**: Audio processing with minimal delay
- **Real-time capable**: 44.1kHz/48kHz sample rates with stable performance
- **Scalable**: Support for 50+ simultaneous nodes
- **Cross-browser**: Compatible with modern browsers supporting Web Audio API
- **Responsive**: Smooth UI interactions at 60fps

### Security Considerations
- **Script sandboxing**: Secure execution of user-generated audio scripts
- **Input validation**: Comprehensive validation of all user inputs
- **CORS configuration**: Proper handling of external audio sources
- **Content Security Policy**: Strict CSP for enhanced security
- **OAuth integration**: Secure authentication for external services

## Development Workflow

### Build Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run test         # Run all tests
npm run test:unit    # Unit tests only
npm run test:e2e     # End-to-end tests
npm run lint         # Code linting
npm run typecheck    # TypeScript type checking
```

### Code Organization
```
src/
├── components/           # Reusable UI components
├── nodes/               # Audio node implementations
│   ├── sources/         # Source nodes (YouTube, file, mic)
│   ├── effects/         # Effect nodes (filters, reverb)
│   ├── analyzers/       # Analysis nodes (spectrum, meters)
│   └── outputs/         # Output nodes (speakers, export)
├── canvas/              # Node editor canvas implementation
├── audio/               # Audio engine and worklets
├── scripting/           # Audio scripting engine
├── state/               # Application state management
└── utils/               # Shared utilities
```

### Testing Strategy
- **Unit tests**: Individual node functionality and DSP algorithms
- **Integration tests**: Node connections and signal flow
- **Performance tests**: Latency and throughput benchmarks
- **E2E tests**: Complete user workflows and UI interactions
- **Audio quality tests**: Signal analysis and quality validation

## Specialized Development Areas

The project utilizes specialized development agents for different aspects:

- **DSP Consultant**: Custom audio algorithms and mathematical implementations
- **Audio Engineer**: Web Audio API integration and performance optimization
- **Frontend Developer**: Node editor UI and interactive components
- **UX Designer**: User interface design and interaction patterns
- **Test Engineer**: Comprehensive testing strategies for audio applications
- **Security Expert**: Secure handling of user scripts and external sources
- **Infrastructure Engineer**: Build optimization and deployment strategies
- **Git Engineer**: Repository management and collaboration workflows

## Getting Started

1. **Initialize project structure**: Set up the basic directory structure and configuration files
2. **Configure build system**: Set up Vite with proper audio worklet support
3. **Implement core audio engine**: Basic Web Audio API integration
4. **Create base node system**: Abstract node class and connection management
5. **Build visual editor**: Canvas-based node editor with drag-and-drop
6. **Add essential nodes**: Basic source, effect, and output nodes
7. **Implement scripting engine**: User-customizable audio processing
8. **External source integration**: Connect to streaming services and file inputs

This project represents a significant undertaking requiring expertise in web audio, real-time processing, user interface design, and security. The modular architecture and specialized development approach ensure scalable, maintainable code that can grow with user needs.