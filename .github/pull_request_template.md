## Description
Brief description of the changes made.

## Type of Change
- [ ] 🎵 Audio/DSP feature (new audio processing capability)
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to change)
- [ ] 🎨 UI/UX improvement (user interface enhancements)
- [ ] ⚡ Performance improvement (audio latency, CPU usage, memory optimization)
- [ ] 🧪 Test addition/improvement
- [ ] 📚 Documentation update
- [ ] 🔧 Configuration/build change

## Audio-Specific Checklist
- [ ] Tested with different sample rates (44.1kHz, 48kHz)
- [ ] Verified real-time performance with low buffer sizes (64-256 samples)
- [ ] No audio dropouts or glitches during stress testing
- [ ] AudioWorklet code follows real-time constraints (no dynamic allocation, console.log, etc.)
- [ ] Parameter changes don't cause audio artifacts
- [ ] CPU usage remains acceptable under load
- [ ] Memory usage is stable (no leaks in long-running sessions)

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed
- [ ] Audio quality verified
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Performance benchmarking completed

## Node System (if applicable)
- [ ] Node inputs/outputs are properly typed
- [ ] Node connections work correctly
- [ ] Node parameters are validated
- [ ] Node can be serialized/deserialized
- [ ] Node cleanup is properly implemented
- [ ] Visual representation is accurate

## Scripting Engine (if applicable)
- [ ] Scripts execute in sandboxed environment
- [ ] Script parameters are properly validated
- [ ] Real-time compilation works without audio interruption
- [ ] Error handling prevents crashes
- [ ] Documentation examples are provided

## External Sources (if applicable)
- [ ] CORS configuration is correct
- [ ] Authentication flows work properly
- [ ] Error handling for network issues
- [ ] Fallback mechanisms in place
- [ ] Rate limiting considerations addressed

## Performance Impact
- [ ] No negative performance impact
- [ ] Performance improved (specify metrics)
- [ ] Performance degraded but justified (explain why)

## Screenshots/Demo
<!-- Add screenshots, GIFs, or links to demo videos if applicable -->

## Additional Notes
<!-- Any additional information, considerations, or context -->

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code is properly commented
- [ ] Documentation updated (if needed)
- [ ] No console.log statements in production code
- [ ] No commented-out code blocks
- [ ] Git hooks pass locally
- [ ] Branch is up to date with target branch