# Contributing to SignalForge

Thank you for your interest in contributing to SignalForge! This document outlines the development workflow and guidelines for this audio DSP application.

## Git Workflow

### Branch Strategy

We use a simplified Git Flow approach optimized for web audio development:

```
main           # Production-ready code, stable releases
├── develop    # Integration branch (for teams > 5 developers)
├── feature/*  # New features (feature/reverb-node)
├── fix/*      # Bug fixes (fix/audio-latency-issue)
├── hotfix/*   # Critical production fixes
├── audio/*    # Audio-specific features (audio/new-filter-algorithm)
└── perf/*     # Performance optimizations (perf/worklet-optimization)
```

### Branch Naming Convention

- `feature/descriptive-name` - New features
- `fix/issue-description` - Bug fixes
- `audio/dsp-feature` - Audio/DSP specific implementations
- `perf/optimization-target` - Performance improvements
- `ui/component-name` - UI/UX improvements
- `test/test-description` - Testing improvements
- `docs/documentation-area` - Documentation updates

### Workflow Steps

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Atomic Commits**
   - One logical change per commit
   - Follow conventional commit format
   - Test locally before committing

3. **Keep Branch Updated**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

4. **Push and Create PR**
   ```bash
   git push -u origin feature/your-feature-name
   ```

## Commit Message Convention

We use conventional commits with audio-specific types:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `perf`: Performance improvement
- `audio`: Audio/DSP specific changes
- `ui`: User interface changes
- `test`: Adding/modifying tests
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `style`: Code style/formatting
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Maintenance tasks

### Scopes
- `nodes`: Node system (sources, effects, analyzers, outputs)
- `canvas`: Visual node editor
- `engine`: Audio engine core
- `worklet`: AudioWorklet implementations
- `script`: Audio scripting engine
- `ui`: User interface components
- `test`: Testing infrastructure
- `build`: Build configuration

### Examples
```bash
feat(nodes): add convolution reverb node
fix(canvas): resolve connection line z-index issue
perf(worklet): optimize FFT processing for real-time
audio(engine): implement parameter smoothing
ui(canvas): add zoom controls to node editor
test(integration): add comprehensive node connection tests
```

## Audio Development Guidelines

### Real-time Constraints

When working with AudioWorklets:

- **No dynamic memory allocation** in `process()` method
- **No console.log** or DOM access in audio thread
- **Pre-allocate buffers** during construction
- **Minimize computational complexity** in real-time code
- **Use typed arrays** for better performance

### Performance Requirements

- **Latency**: Target < 10ms round-trip latency
- **CPU Usage**: Keep under 50% for 50+ simultaneous nodes
- **Memory**: Stable usage, no leaks in long sessions
- **Sample Rates**: Support 44.1kHz and 48kHz
- **Buffer Sizes**: Test with 64-1024 sample buffers

### Testing Audio Features

1. **Unit Tests**: Individual DSP algorithms
2. **Integration Tests**: Node connections and signal flow
3. **Performance Tests**: Latency and CPU usage
4. **Quality Tests**: THD+N, frequency response
5. **Stress Tests**: High node count scenarios

## Code Quality Standards

### Pre-commit Checks

Our git hooks automatically run:
- ESLint for code style
- TypeScript type checking
- Unit tests
- Audio worklet validation
- Large file detection

### Code Review Process

1. **All code requires review** before merging
2. **Address feedback promptly** and professionally
3. **Re-request review** after making changes
4. **Don't merge your own PRs** (except for hot fixes)
5. **Ensure CI passes** before requesting review

### Audio-Specific Review Points

- Real-time performance characteristics
- Audio quality and artifacts
- Parameter validation and range checking
- Memory management in audio thread
- Cross-browser compatibility
- Documentation for DSP algorithms

## Development Environment

### Required Tools

- Node.js 18+ with npm
- Modern browser with Web Audio API support
- Audio interface (for latency testing)
- Code editor with TypeScript support

### Setup Commands

```bash
npm install           # Install dependencies
npm run dev          # Start development server
npm run test         # Run all tests
npm run test:audio   # Run audio-specific tests
npm run lint         # Check code style
npm run typecheck    # TypeScript validation
```

### Testing Audio Changes

1. **Test with different sample rates**
2. **Verify low-latency performance**
3. **Check for audio dropouts**
4. **Validate parameter ranges**
5. **Test node connections**
6. **Verify serialization**

## Pull Request Guidelines

### Before Creating PR

- [ ] Branch is up to date with main
- [ ] All tests pass locally
- [ ] Git hooks pass
- [ ] Documentation updated
- [ ] Audio quality verified

### PR Requirements

- **Clear description** of changes
- **Type of change** identified
- **Audio-specific checklist** completed
- **Performance impact** assessed
- **Screenshots/demos** for UI changes

### Review Process

1. **Automated checks** must pass
2. **Peer review** required
3. **Audio testing** for DSP changes
4. **Performance verification** for optimization PRs
5. **Documentation review** for new features

## Release Process

### Version Numbering

We follow semantic versioning:
- `MAJOR.MINOR.PATCH`
- Major: Breaking changes
- Minor: New features, backward compatible
- Patch: Bug fixes, backward compatible

### Release Types

- **Stable**: Main production releases
- **Beta**: Feature-complete pre-releases
- **Alpha**: Development previews

### Release Checklist

- [ ] All tests pass
- [ ] Performance benchmarks stable
- [ ] Audio quality validated
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bumped appropriately

## Getting Help

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions
- **Audio Theory**: Include relevant DSP background in audio PRs
- **Performance**: Share benchmarking results for performance changes

## Audio Development Resources

### DSP References
- Fundamental DSP algorithms and implementations
- Real-time audio programming best practices
- Web Audio API specifications and limitations
- AudioWorklet performance considerations

### Testing Tools
- Audio analysis plugins for quality verification
- Performance profiling tools for latency measurement
- Cross-browser testing procedures
- Automated audio quality testing frameworks

Remember: SignalForge is a professional audio tool. Every contribution should maintain the highest standards of audio quality and real-time performance.